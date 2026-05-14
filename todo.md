# React Error #418 분석 및 해결

## 🔴 원래 에러 상황

**에러 코드**: React error #418 - "Objects are not valid as a React child"

**원인**: `app/layout.tsx`의 CSS 변수 설정 방식 문제
```tsx
// ❌ 잘못된 방식
style={{
  "--noise-image": `url("${assetBasePath}/textures/noise.png")`,
} as any}
```

React 19에서 `style` prop 객체는:
1. camelCase 키만 인식 (CSS 변수는 케밥-케이스)
2. CSS 변수를 문자열 키로 받을 수 없음
3. `as any` 캐스팅도 실행 시 객체 직렬화 실패

## ✅ 적용된 해결책

### 1. CSS 변수를 `app/globals.css` `:root`로 이동
```css
:root {
  /* ... 기존 변수들 ... */
  
  --noise-image: url("/textures/noise.png");
}
```

Next.js의 `assetPrefix`가 자동으로 배포 환경에 맞게 경로를 조정:
- 개발: `/textures/noise.png`
- 배포 (GitHub Pages): `/me/textures/noise.png` (자동)

### 2. `app/layout.tsx` 정리
- `assetBasePath` 변수 제거
- `style` prop 제거
- React 서버 컴포넌트로 단순화

### 3. `app/page.tsx` 정리
- `assetBasePath` 변수 제거
- 배경 이미지를 Tailwind 클래스로 변경
```tsx
// ✅ 올바른 방식
<div className="bg-[url('/images/terminal-bg.jpg')] ...">
```

### 4. `app/theme.css` 정리
- 중복된 `:root` 정의 제거
- CSS 변수는 `app/globals.css`에서만 관리

## 🔑 핵심 원칙

**CSS 변수는 CSS에서, 동적 값은 환경 변수로**

- `style` prop에 CSS 변수 객체 ❌
- CSS 파일의 `:root`에서 정의 ✅
- Next.js의 자동 경로 처리 활용 ✅

---

# ask.md 처리 완료 사항

## 🔍 분석된 문제
- GitHub Pages 배포 시 `/me/` 베이스 경로가 자산 파일 참조에 미반영됨
- 노이즈 이미지 경로가 존재하지 않는 `/images/overlays/noise.png` 참조
- 배경 이미지 파일명이 코드에서 다르게 참조되고 있음 (`bg-terminal.jpg` vs 실제 `terminal-bg.jpg`)

## ✅ 적용된 수정 사항

### 1. `next.config.ts`
- 환경 변수 `NEXT_PUBLIC_BASE_PATH` 추가
- GitHub Actions 배포 시 `/me` 경로가 자동 반영됨

### 2. `app/layout.tsx`  
- `assetBasePath` 변수로 `NEXT_PUBLIC_BASE_PATH` 읽기
- body에 `--noise-image` CSS 변수 설정 (동적 경로 적용)

### 3. `app/page.tsx`
- 배경 이미지 경로를 `terminal-bg.jpg`로 수정 (실제 파일명 반영)
- `assetBasePath` 변수를 사용하여 GitHub Pages 경로 대응

### 4. `app/theme.css`
- 기본 노이즈 이미지 경로를 `public/textures/noise.png`로 수정
- `background-image`를 CSS 변수 `var(--noise-image)` 사용

### 5. `components/effects/CRTOverlay.tsx`
- 노이즈 이미지 참조를 CSS 변수로 변경

## 🧪 검증 상태
- ✅ `npm run build`: 성공 (Exit Code: 0)
- ✅ 파일 오류 검사: 모두 정상
- ✅ 타입스크립트 컴파일 오류: 없음

## 📝 참고 사항
실제 공개 경로 구조:
```
https://moreaugalaxy.github.io/me/
├── /images/terminal-bg.jpg    → 메인 배경
└── /textures/noise.png        → CRT 노이즈 오버레이
```

로컬 개발 시 (`npm run dev`):
```
http://localhost:3000/
├── /images/terminal-bg.jpg
└── /textures/noise.png
```
