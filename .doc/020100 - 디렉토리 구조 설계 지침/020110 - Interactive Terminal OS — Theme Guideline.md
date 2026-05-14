# 020110 - Interactive Terminal OS — Theme Guideline

이 프로젝트의 디자인 철학은:

```
Retro CRT × Modern Operating System
```

이다.

단순 복고가 아니라:

- modern minimal
- cinematic terminal
- digital archive
- ambient interface
- interactive operating system

방향으로 설계한다.

---

# 1. 핵심 디자인 철학

## 목표

사용자가:

```
웹사이트
```

를 보는 느낌이 아니라

```
"어떤 시스템 내부에 접속한 느낌"
```

을 받게 한다.

---

# 2. 전체 분위기

## 감성 키워드

```
soft CRT
glass terminal
archive workstation
dark ambient
digital memory
retro future
```

---

# 3. 디자인 방향

## 절대 금지

- 과한 레트로
- 초록 단색 CRT
- 저해상도 픽셀 남용
- 과한 scanline
- neon 과다
- hacker movie cliché

---

# 목표 스타일

```
clean cinematic terminal
```

---

# 4. 테마 시스템 구조

모든 UI 는:

```
theme token system
```

기반으로 구성한다.

---

# 5. CSS 변수 규칙

모든 색상/효과는 CSS Variables 사용.

직접 색상 금지.

---

# 기본 구조

```css
:root {

  --bg-primary:
  #05070b;

  --bg-panel:
  rgba(12,16,24,0.72);

  --text-primary:
  #d7dde7;

  --text-muted:
  #7e8797;

  --accent:
  #52d8ff;

  --border:
  rgba(255,255,255,0.08);

}
```

---

# 6. 기본 테마

## CRT (기본)

```
soft cyan terminal
```

특징:

- 차가운 dark blue
- subtle glow
- soft reflection

---

# 7. 추가 테마

## Matrix

```
green phosphor
```

제한적으로 사용.

---

## Amber

```
amber monochrome
```

고전 workstation 느낌.

---

## Clean

```
glass minimal UI
```

CRT 효과 최소화.

---

## Synthwave

```
purple retro future
```

실험적 테마.

---

# 8. Typography Guideline

## 기본 한글

```
Noto Sans KR
```

---

# terminal/code

```
JetBrains Mono
```

---

# 금지

- 둥근 감성 폰트
- handwriting
- pixel font 남용

---

# 9. 아이콘 가이드

## 기본 아이콘

```
Lucide
```

---

# 아이콘 스타일

허용:

- outline
- thin stroke
- monochrome

금지:

- 3D
- glossy
- cartoon
- emoji 기반 UI

---

# 10. 레이아웃 철학

## 앱 구조

```
persistent shell
```

기반.

즉:

- background 유지
- glass 유지
- scanline 유지
- audio 유지

---

# 교체되는 영역

```
content screen only
```

---

# 11. 페이지 개념

페이지가 아니라:

```
screen
```

개념으로 설계.

예:

```
Story Screen
Archive Screen
Timeline Screen
```

---

# 12. Motion Guideline

애니메이션은:

```
subtle
```

해야 한다.

---

# 금지

- bounce
- elastic
- cartoony easing
- 과한 parallax

---

# 허용

- fade
- subtle blur
- opacity
- CRT flicker
- soft glitch
- horizontal distortion

---

# 13. Transition 스타일

## 추천

```
OS screen transition
```

---

# 추천 효과

- fade transition
- terminal redraw
- glitch flash
- scanline distortion

---

# 14. CRT 효과 규칙

CRT 효과는:

```
"느껴져야 하지만 보이면 안 된다"
```

---

# 권장 수준

## scanline

```css
opacity: 0.03 ~ 0.06
```

---

## noise

```css
opacity: 0.02 ~ 0.05
```

---

## flicker

```css
매우 약하게
```

---

# 금지

- 과한 왜곡
- 심한 곡면
- 심한 RGB 분리
- 읽기 어려운 blur

---

# 15. Glass Guideline

glass overlay 는:

```
subtle convex glass
```

기반.

---

# 특징

- 거의 투명
- 아주 약한 highlight
- 약한 reflection
- 아주 약한 blur

---

# 금지

- frosted glass
- iOS glassmorphism
- 과한 reflection
- 거울 수준 glare

---

# 16. Background Guideline

배경은:

```
ambient environment
```

개념.

---

# 추천

- dark space
- analog workstation
- deep gradient
- cinematic noise

---

# 금지

- 밝은 이미지
- 복잡한 패턴
- colorful wallpaper

---

# 17. Audio Guideline

audio 는:

```
ambient support
```

역할만 수행.

---

# 허용

- CRT hum
- typing sound
- subtle UI click
- low ambient loop

---

# 금지

- aggressive SFX
- loud UI
- arcade 느낌

---

# 18. Data Visualization

timeline/chart 는:

```
archive visualization
```

스타일로.

---

# 스타일

- thin lines
- muted colors
- subtle glow
- low contrast grid

---

# 금지

- colorful dashboard
- corporate analytics 느낌

---

# 19. Mobile Guideline

모바일에서는:

- CRT 효과 감소
- blur 감소
- overlay 단순화

---

# 모바일 목표

```
portable terminal device
```

느낌.

---

# 20. Theme Architecture Rule

모든 테마는:

```
동일한 구조
```

유지.

변경되는 것은:

- color
- glow
- overlay density
- accent

만 허용.

---

# 21. UI 철학

이 프로젝트의 UI 는:

```
showy interface
```

가 아니라

```
immersive operating environment
```

이어야 한다.

---

# 22. 최종 목표 감성

사용자가 느껴야 하는 것은:

```
오래된 미래의 시스템
디지털 기억 보관소
조용한 터미널
```

이다.