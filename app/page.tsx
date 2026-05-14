/*
  src/app/page.tsx

  ---------------------------------------------------------
  Main Page
  ---------------------------------------------------------

  Interactive Terminal OS 의
  메인 페이지.

  ---------------------------------------------------------

  현재 페이지 역할:

  - background scene 구성
  - CRT overlay 적용
  - ambient lighting 적용
  - boot intro 표시
  - terminal window 렌더링

  ---------------------------------------------------------

  현재 전체 계층 구조:

  background
    └ overlay
        └ ambient glow
            └ boot intro
                └ terminal window

  ---------------------------------------------------------

  중요한 철학:

  이 페이지는:

  ❌ 일반 landing page
  ❌ startup homepage
  ❌ dashboard

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "미래 운영체제 화면"

  같은 느낌.

  ---------------------------------------------------------

  따라서:

  - cinematic spacing
  - dark atmosphere
  - restrained glow
  - immersive layering
  - ambient depth

  중심으로 설계한다.

  ---------------------------------------------------------

  반드시 필요한 파일:

  public/images/terminal-bg.jpg

  ---------------------------------------------------------

  추천 이미지:

  - dark futuristic room
  - workstation
  - cyber archive
  - sci-fi monitor wall
  - cinematic environment

  ---------------------------------------------------------

  현재 단계에서는:

  정적 구조 기반 UI 만 구성.

  이후:
  - dynamic boot
  - animated transitions
  - realtime system
  - command parser
  - fake operating system

  으로 확장 가능.
*/


/* =========================================================
   COMPONENT IMPORTS
   ---------------------------------------------------------
   메인 페이지에서 사용할 컴포넌트 import.
========================================================= */

/*
  CRT screen overlay.

  scanline + noise + vignette 효과 담당.
*/
import CRTOverlay from "@/components/effects/CRTOverlay";

/*
  boot intro animation.

  초기 시스템 부팅 연출 담당.
*/
import BootIntro from "@/components/system/BootIntro";

/*
  terminal application window.
*/
import TerminalWindow from "@/components/terminal/TerminalWindow";


/*
  메인 페이지 컴포넌트.
*/
export default function HomePage() {
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    /*
      페이지 전체 wrapper.

      min-h-screen:
      전체 화면 높이 유지.

      overflow-hidden:
      glow / overlay clipping 용도.
    */
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-black
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          -----------------------------------------------------
          메인 cinematic background.

          반드시:
          public/images/terminal-bg.jpg
          파일 필요.
      ====================================================== */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url("${assetBasePath}/images/terminal-bg.jpg")`,
        }}
      />

      {/* =====================================================
          DARK ATMOSPHERE OVERLAY
          -----------------------------------------------------
          배경을 어둡게 눌러서
          terminal UI 가 더 잘 보이게 만든다.
      ====================================================== */}
      <div
        className="
          absolute
          inset-0

          bg-black/60
        "
      />

      {/* =====================================================
          RADIAL LIGHTING
          -----------------------------------------------------
          중앙 주변 subtle light 생성.

          flat 느낌 제거.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(80,180,255,0.12),transparent_65%)]
        "
      />

      {/* =====================================================
          TOP AMBIENT GLOW
          -----------------------------------------------------
          상단 atmospheric glow.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[-200px]

          h-[500px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-cyan-400/[0.08]

          blur-3xl
        "
      />

      {/* =====================================================
          SIDE GLOW
          -----------------------------------------------------
          화면 비대칭 공간감 생성.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          right-[-120px]
          top-[120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-violet-400/[0.06]

          blur-3xl
        "
      />

      {/* =====================================================
          CRT OVERLAY
          -----------------------------------------------------
          scanline / noise / vignette 효과.
      ====================================================== */}
      <CRTOverlay />

      {/* =====================================================
          MAIN CONTENT LAYER
          -----------------------------------------------------
          실제 콘텐츠 영역.

          z-index 로 overlay 위에 배치.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          min-h-screen

          items-center
          justify-center

          px-6
          py-10

          lg:px-10
        "
      >
        {/* =================================================
            CONTENT CONTAINER
            -------------------------------------------------
            boot intro + terminal window 배치.
        ================================================= */}
        <div
          className="
            relative

            flex
            w-full
            flex-col

            gap-8
          "
        >
          {/* =============================================
              BOOT INTRO
              ---------------------------------------------
              시스템 초기화 연출.

              이후:
              실제 boot animation 으로 확장 가능.
          ============================================== */}
          <BootIntro />

          {/* =============================================
              TERMINAL WINDOW
              ---------------------------------------------
              메인 interactive terminal UI.
          ============================================== */}
          <TerminalWindow />
        </div>
      </div>

      {/* =====================================================
          SCREEN VIGNETTE
          -----------------------------------------------------
          화면 가장자리 어둡게 처리.

          CRT monitor 느낌 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          shadow-[inset_0_0_180px_rgba(0,0,0,0.8)]
        "
      />
    </main>
  );
}