/*
  src/app/page.tsx

  ---------------------------------------------------------
  Interactive Terminal OS
  Main Entry Screen
  ---------------------------------------------------------

  이 파일은 프로젝트의 첫 진입 화면.

  일반 웹사이트 랜딩페이지가 아니라:

  "사용자가 디지털 시스템 내부에 접속했다"

  는 감각을 만드는 것이 핵심 목표다.

  ---------------------------------------------------------

  전체 구조:

  Background
    ↓
  Dark Overlay
    ↓
  CRT Overlay
    ↓
  Glass Frame
    ↓
  Terminal Shell
    ↓
  Boot Intro

  ---------------------------------------------------------

  중요한 철학:

  이 프로젝트는:
  flashy cyberpunk 가 아니라

  "조용한 미래형 관측 시스템"

  분위기를 추구한다.

  따라서:
  모든 효과는 subtle 해야 한다.
*/

import CRTOverlay from "@/components/system/CRTOverlay";
import GlassFrame from "@/components/system/GlassFrame";
import TerminalShell from "@/components/system/TerminalShell";
import BootIntro from "@/components/system/BootIntro";

export default function HomePage() {
  return (
    /*
      메인 전체 화면 컨테이너.

      relative:
      내부 absolute overlay 들의 기준점.

      min-h-screen:
      최소 높이를 화면 전체로 설정.

      overflow-hidden:
      CRT overlay 등이
      화면 밖으로 튀어나가지 않도록 제한.
    */
    <main
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-[#05070b]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          -----------------------------------------------------
          전체 분위기를 만드는 핵심 배경.

          bg-cover:
          어떤 화면 비율에서도 꽉 차게 표시.

          opacity:
          배경이 콘텐츠보다 튀지 않도록 조절.
      ====================================================== */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat

          opacity-70
        "
        style={{
          /*
            public 폴더 기준 접근.

            실제 파일 위치:
            /public/images/backgrounds/ambient-space-01.jpg
          */
          backgroundImage:
            "url('/images/backgrounds/ambient-space-01.jpg')",
        }}
      />

      {/* =====================================================
          DARK AMBIENT OVERLAY
          -----------------------------------------------------
          텍스트 가독성 확보용.

          gradient 사용 이유:
          단순 검정 overlay 보다
          훨씬 cinematic 하다.
      ====================================================== */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-black/70
          via-[#05070b]/60
          to-[#05070b]
        "
      />

      {/* =====================================================
          CRT OVERLAY
          -----------------------------------------------------
          아래 요소들을 담당:

          - noise
          - scanline
          - vignette
          - phosphor glow
          - monitor texture

          중요한 점:
          "효과"처럼 보이면 실패.

          존재감보다 분위기가 중요하다.
      ====================================================== */}
      <CRTOverlay />

      {/* =====================================================
          CONTENT LAYER
          -----------------------------------------------------
          실제 UI 가 렌더링되는 영역.

          z-20:
          overlay 위로 올리기 위해 필요.
      ====================================================== */}
      <section
        className="
          relative
          z-20

          flex

          min-h-screen

          items-center
          justify-center

          px-6
          py-10
        "
      >
        {/* =================================================
            GLASS FRAME
            -------------------------------------------------
            전체 glass surface 담당.

            바깥 유리 프레임 역할.
        ================================================= */}
        <GlassFrame
          className="
            w-full
            max-w-6xl
          "
        >
          {/* =============================================
              TERMINAL SHELL
              ---------------------------------------------
              실제 OS shell 영역.

              내부 monitor frame 역할.
          ============================================== */}
          <TerminalShell>
            {/* =========================================
                BOOT INTRO
                -----------------------------------------
                최초 boot screen 콘텐츠.
            ========================================== */}
            <BootIntro />
          </TerminalShell>
        </GlassFrame>
      </section>
    </main>
  );
}