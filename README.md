# 내 프로필 Page

터미널 스타일의 개인 홈페이지 템플릿입니다. React, Vite, React Router, Firebase Firestore를 사용하여 간단한 자기소개 페이지와 스킬 목록을 제공합니다.

## 목차

- [주요 기능](#주요-기능)
- [설치 및 실행](#설치-및-실행)
- [의존성](#의존성)
- [빌드](#빌드)
- [배포](#배포)
- [파일 구조](#파일-구조)
- [자산 구조](#자산-구조)
- [자산 리소스 규칙](#자산-리소스-규칙)

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

## 의존성

이 프로젝트는 다음 주요 라이브러리를 사용합니다.

- `react`, `react-dom`: React 기반 SPA 구성
- `react-router-dom`: 클라이언트 라우팅
- `firebase`: Firestore 및 Firebase 서비스 연결
- `framer-motion`: 화면 전환 및 UI 애니메이션
- `lucide-react`: 아이콘 컴포넌트
- `howler`: 오디오 재생 및 사운드 효과
- `fast-xml-parser`, `papaparse`, `marked`: 정적 데이터 파싱 지원
- `recharts`: 데이터 시각화 및 차트 구성
- `zustand`: 가벼운 상태 관리
- `clsx`: `className` 조건부 조합
- `vite-plugin-svgr`: SVG를 React 컴포넌트로 사용

## 빌드

```bash
npm run build
```

## 배포

`vite.config.js`에 `base: "/me/"`가 설정되어 있어 GitHub Pages 같은 서브디렉터리 배포에 적합합니다.

## 파일 구조

- `src/App.jsx`: 라우터 및 전체 레이아웃
- `src/pages/Story.jsx`: 자기소개 페이지
- `src/pages/Skills.jsx`: Firebase 기반 스킬 페이지
- `src/pages/Portfolio.jsx`: 포트폴리오 페이지
- `src/services/firebase.js`: Firebase 초기화
- `src/components/layout/Shell.jsx`: 앱 쉘 레이아웃
- `src/components/ui/TerminalInput.jsx`: 터미널 입력 UI
- `src/styles/globals.css`: 전역 스타일과 테마 기본 설정

## 자산 구조

프로젝트는 정적 리소스를 `public/assets`에서 관리합니다.

- `public/assets/bg/desktop`: 데스크톱 배경 이미지
- `public/assets/bg/mobile`: 모바일 배경 이미지
- `public/assets/glass/desktop`: 데스크톱용 CRT 글라스 오버레이
- `public/assets/glass/mobile`: 모바일용 CRT 글라스 오버레이
- `public/assets/textures/noise`: 노이즈 텍스처
- `public/assets/textures/grain`: 그레인 텍스처
- `public/assets/textures/scanline`: 스캔라인 텍스처
- `public/assets/textures/dust`: 먼지 텍스처
- `public/assets/audio/ambient`: 앰비언트 오디오 루프
- `public/assets/audio/ui`: UI 사운드 효과
- `public/assets/audio/system`: 시스템 사운드
- `public/assets/video/loops`: 반복 배경 비디오
- `public/assets/video/intro`: 인트로/오프닝 비디오
- `public/assets/icons`: 아이콘 리소스
- `public/assets/fonts`: 웹폰트 파일
- `public/assets/data/json`: 정적 JSON 데이터

### 자산 리소스 규칙

- 이미지 파일은 `webp` 형식을 우선 사용하며, 투명 배경이 필요한 자산은 `png` 또는 `webp`로 저장합니다.
- 배경과 글라스 오버레이는 `desktop`/`mobile` 하위 폴더로 분리하여 미디어 쿼리별 로딩과 관리가 쉬워야 합니다.
- 텍스처는 목적별로 분류합니다.
  - `noise`: CRT 노이즈와 필름 그레인 효과
  - `grain`: 미세한 입자 질감
  - `scanline`: 스캔라인 및 라인 기반 패턴
  - `dust`: 먼지, 스크래치, 글레어 디테일
- 오디오 자산은 역할별로 분리합니다.
  - `ambient`: 전체 배경/루프 사운드
  - `ui`: 버튼 클릭, 팝업, 전환 효과음
  - `system`: 부팅, 종료, 알림 등 시스템 이벤트 효과음
- 비디오는 용도와 반복성에 따라 분리합니다.
  - `loops`: 반복 재생용 배경 비디오
  - `intro`: 한 번 재생되는 인트로/시작 화면 비디오
- 폰트는 `public/assets/fonts`에 저장하고, CSS 변수로 로드하여 테마와 타이포그래피를 통제합니다.
- 정적 데이터 원본은 `public/assets/data` 하위에 저장하여 외부 데이터 로딩이나 내부 데이터 시드를 지원합니다.
- 네이밍 규칙
  - `glass-desktop.webp`, `bg-space-dark.webp`, `noise-soft.webp`처럼 의미 있는 이름을 사용합니다.
  - `final-final2.png`, `real-last.webp`와 같은 모호한 이름은 피합니다.
- 리소스 사용 원칙
  - 배경은 `dark`, `ambient`, `cinematic` 컨셉을 유지합니다.
  - 글라스 오버레이는 `subtle`하고 `transparent`하며 배경을 가리지 않아야 합니다.
  - 텍스처와 효과는 화면을 돋보이게 하되 콘텐츠 가독성을 해치지 않아야 합니다.
  - 오디오는 전체 UI 경험을 보조하는 역할만 하며 과한 SFX는 피해야 합니다.
