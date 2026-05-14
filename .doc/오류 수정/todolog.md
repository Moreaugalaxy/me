# Todo

## 문제점
- GitHub Pages 서브디렉터리(`/me/`) 배포 시 일부 정적 자산 경로가 잘못되어 404가 발생함.
- `CRTOverlay`와 `theme.css`에서 노이즈 텍스처를 `/images/overlays/noise.png`로 참조하고 있음.
- 메인 배경 이미지는 실제 파일이 `public/images/terminal-bg.jpg`인데 코드에서 `bg-terminal.jpg`를 참조하고 있음.

## 수정해야 할 사항
1. `next.config.ts`에 public 환경 변수 `NEXT_PUBLIC_BASE_PATH` 추가.
2. `app/layout.tsx`에서 CSS 변수로 노이즈 이미지 경로를 basePath에 맞게 설정.
3. `app/page.tsx`에서 메인 배경 이미지를 `terminal-bg.jpg`로 수정하고 basePath를 적용.
4. `app/theme.css`에서 노이즈 이미지 기본 경로를 `public/textures/noise.png`로 수정하고 CSS 변수를 사용하도록 변경.
5. `components/effects/CRTOverlay.tsx`에서 노이즈 이미지 참조를 CSS 변수로 변경.

## 검증 순서
- [ ] 로컬 `next dev` 실행 후 노이즈와 배경 이미지가 정상 표시되는지 확인.
- [ ] `next build` 후 `next export` 혹은 `next start`로 빌드된 경로에서 `/me/` 경로가 올바른지 확인.
- [ ] GitHub Pages 환경에서 `/me/` 경로를 포함한 실제 배포 테스트.
