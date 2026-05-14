/*
  src/app/layout.tsx

  ---------------------------------------------------------
  Root Layout
  ---------------------------------------------------------

  Next.js App Router 의
  최상위 레이아웃 파일.

  이 파일은 프로젝트 전체의:

  - 글로벌 스타일
  - 기본 메타데이터
  - 폰트 시스템
  - HTML 구조

  를 담당한다.

  ---------------------------------------------------------

  중요한 점:

  layout.tsx 는
  "사이트 프레임"

  같은 역할이다.

  page.tsx 가 바뀌어도
  layout.tsx 는 유지된다.

  ---------------------------------------------------------

  이 프로젝트에서는:

  globals.css
  +
  theme.css

  두 개를 반드시 import 해야 한다.

  이유:

  globals.css:
  → 기술적 기본 스타일

  theme.css:
  → 분위기 / immersive 스타일

  ---------------------------------------------------------

  앞으로 여기서 추가될 가능성이 있는 것:

  - custom font
  - metadata SEO
  - analytics
  - audio provider
  - theme provider
  - motion provider
  - system state provider
*/

import type { Metadata } from "next";

/*
  글로벌 기본 스타일.

  reset / root variables / scrollbar
  등을 포함.
*/
import "./globals.css";

/*
  프로젝트 분위기 전용 스타일.

  CRT / glass / ambient
  등을 담당.
*/
import "./theme.css";


/* =========================================================
   METADATA
   ---------------------------------------------------------
   사이트 기본 메타 정보.

   브라우저 탭 제목,
   설명 등에 사용된다.
========================================================= */
export const metadata: Metadata = {
  title: "Interactive Terminal OS",

  description:
    "A cinematic digital archive workstation inspired by ambient retro-future operating systems.",
};


/* =========================================================
   ROOT LAYOUT COMPONENT
   ---------------------------------------------------------
   앱 전체의 HTML 구조 정의.
========================================================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    /*
      lang="ko"

      기본 언어 설정.

      나중에 다국어 지원 시
      변경 가능.
    */
    <html lang="ko">
      {/*
        body 전체 설정.

        antialiased:
        폰트 렌더링 부드럽게 처리.

        theme-background:
        전체 cinematic background 적용.
      */}
      <body
        className="
          antialiased
          theme-background
        "
        style={{
          "--noise-image": `url("${assetBasePath}/textures/noise.png")`,
        } as any}
      >
        {/* 
          실제 페이지 콘텐츠 영역.

          page.tsx 가 여기 들어온다.
        */}
        {children}
      </body>
    </html>
  );
}