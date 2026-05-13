# 내 프로필 Page

터미널 스타일의 개인 홈페이지 템플릿입니다. React, Vite, React Router, Firebase Firestore를 사용하여 간단한 자기소개 페이지와 스킬 목록을 제공합니다.

## 주요 기능

- 터미널 스타일 UI
- React Router 기반 페이지 네비게이션
- Firebase Firestore에 저장된 스킬 목록
- GitHub Pages 배포 지원(`/me/` 베이스 경로)

## 설치 및 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

## 빌드

```bash
npm run build
```

## 배포

`vite.config.js`에 `base: "/me/"`가 설정되어 있어 GitHub Pages 같은 서브디렉터리 배포에 적합합니다.

## 파일 구조

- `src/App.jsx`: 라우터 및 전체 레이아웃
- `src/Pages/Story.jsx`: 자기소개 페이지
- `src/Pages/Skills.jsx`: Firebase 기반 스킬 페이지
- `src/Pages/Portfolio.jsx`: 포트폴리오 페이지
- `src/firebase.js`: Firebase 초기화
- `src/App.css`: 전체 앱 스타일
