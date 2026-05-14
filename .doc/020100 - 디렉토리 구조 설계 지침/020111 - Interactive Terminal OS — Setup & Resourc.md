# 020111 - Interactive Terminal OS — Setup & Resource Instruction

# Interactive Terminal OS — Setup & Resource Instruction

이 문서는 프로젝트 초기 세팅 시 필요한:

- npm 패키지
- 폰트
- 아이콘
- 오디오
- 이미지
- 테마 파일
- 설정 파일
- CSS 구조

를 정리한 최종 세팅 가이드이다.

---

# 1. 필수 npm 패키지 설치

## 기본

```bash
npm install react-router-dom
```

---

# 2. 애니메이션

## framer-motion

```bash
npm install framer-motion
```

용도:

- page transition
- fade
- glitch
- screen animation

---

# 3. 아이콘

## lucide-react

```bash
npm install lucide-react
```

---

# 4. 오디오

## howler

```bash
npm install howler
```

용도:

- ambient hum
- UI sound
- terminal sound

---

# 5. 데이터 처리

## xml parser

```bash
npm install fast-xml-parser
```

---

## csv parser

```bash
npm install papaparse
```

---

## markdown

```bash
npm install marked
```

---

# 6. 차트

## recharts

```bash
npm install recharts
```

---

# 7. 상태 관리 (선택)

## zustand 추천

```bash
npm install zustand
```

Redux 보다:

- 가볍고
- terminal 구조에 잘 맞음.

---

# 8. 유틸

```bash
npm install clsx
```

용도:

- className 조합

---

# 9. 권장 패키지 (추후)

## WebGL

```bash
npm install three
```

---

## Shader

```bash
npm install @react-three/fiber
npm install @react-three/drei
```

---

# 10. 추천 폰트

## 본문

# Noto Sans KR

[Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR?utm_source=chatgpt.com)

---

# terminal/code

# JetBrains Mono

[JetBrains Mono](https://www.jetbrains.com/lp/mono/?utm_source=chatgpt.com)

---

# 11. 폰트 저장 위치

```
public/assets/fonts/
```

---

# 12. 추천 폰트 구조

```
fonts/
├ noto-sans-kr/
└ jetbrains-mono/
```

---

# 13. 아이콘 시스템

# Lucide

[Lucide Icons](https://lucide.dev/?utm_source=chatgpt.com)

---

# 14. 추천 오디오 리소스

## CRT hum

검색 키워드:

```
crt hum ambience
```

---

# 추천 사이트

## Pixabay

[Pixabay Audio](https://pixabay.com/sound-effects/?utm_source=chatgpt.com)

---

## Freesound

[Freesound](https://freesound.org/?utm_source=chatgpt.com)

---

# 15. 추천 오디오 구조

```
audio/
├ ambient/
│   ├ crt-hum.mp3
│   └ room-loop.mp3
│
├ ui/
│   ├ click.wav
│   ├ hover.wav
│   └ open.wav
│
└ system/
    ├ boot.wav
    └ shutdown.wav
```

---

# 16. 이미지 리소스 규칙

## 배경

```
webp
```

우선 사용.

---

# glass overlay

```
png/webp
```

투명 유지.

---

# 17. 권장 이미지 크기

## desktop background

```
1920x1080
```

---

# mobile background

```
1080x1920
```

---

# glass overlay

```
2048 이상 권장
```

---

# 18. CSS 구조

```
src/
├ themes/
└ styles/
```

---

# 19. themes/

```
themes/
├ base.css
├ crt.css
├ matrix.css
├ amber.css
├ clean.css
└ synthwave.css
```

---

# 20. styles/

```
styles/
├ globals.css
├ reset.css
├ layout.css
├ typography.css
├ animations.css
├ effects.css
├ responsive.css
└ utilities.css
```

---

# 21. Theme 로딩 규칙

## main.jsx

```jsx
import "./styles/globals.css";
import "./themes/base.css";
import "./themes/crt.css";
```

---

# 22. Theme 적용 방식

```html
<html data-theme="crt">
```

---

# 23. CSS 변수 구조

## base.css

```css
:root {

  --font-ui:
  "Noto Sans KR";

  --font-mono:
  "JetBrains Mono";

}
```

---

# crt.css

```css
[data-theme="crt"] {

  --bg-primary:
  #05070b;

  --text-primary:
  #d7dde7;

  --accent:
  #52d8ff;

}
```

---

# 24. 절대 금지

```css
color: #52d8ff;
```

직접 hex 사용 금지.

---

# 25. overlay asset 규칙

glass overlay 는:

```
배경 포함 금지
```

---

# overlay 역할

허용:

- reflection
- highlight
- convex distortion
- subtle blur

---

# 금지

- dark background
- color tint
- fake monitor frame

---

# 26. Router 구조

## BrowserRouter 사용

```jsx
<BrowserRouter
 basename={import.meta.env.BASE_URL}
/>
```

---

# 27. Page 구조

전체 reload 금지.

```
persistent shell architecture
```

사용.

---

# 유지 요소

- background
- glass
- scanline
- audio
- terminal frame

---

# 교체 요소

```
content only
```

---

# 28. Transition 권장

## 추천

- fade
- blur fade
- CRT redraw
- subtle glitch

---

# 금지

- bounce
- spring 과다
- flashy motion

---

# 29. 추천 VSCode Extensions

## 필수

- ESLint
- Prettier
- Error Lens

---

# 추천

- Pretty TypeScript Errors
- CSS Peek
- Path Intellisense

---

# 30. 추천 Vite Plugins

## SVG

```bash
npm install vite-plugin-svgr -D
```

---

# vite.config.js

```jsx
import svgr from "vite-plugin-svgr";

plugins: [svgr()]
```

---

# 31. 추천 Git 규칙

## 브랜치

```
feature/
theme/
effect/
archive/
```

---

# 32. 권장 이미지 최적화

## 변환 추천

# Squoosh

[Squoosh](https://squoosh.app/?utm_source=chatgpt.com)

---

# 33. 추천 목표

최종적으로 이 프로젝트는:

```
interactive operating system
developer archive
digital terminal environment
```

느낌을 목표로 한다.