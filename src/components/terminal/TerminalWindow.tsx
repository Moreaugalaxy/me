/*
  src/components/terminal/TerminalWindow.tsx

  ---------------------------------------------------------
  TerminalWindow
  ---------------------------------------------------------

  Interactive Terminal OS 의
  핵심 메인 window 컴포넌트.

  ---------------------------------------------------------

  역할:

  - terminal 전체 구조 조립
  - navbar / tabs / output / input 연결
  - glass workstation shell 구성
  - OS window 분위기 형성

  ---------------------------------------------------------

  이 컴포넌트는:

  사실상 전체 시스템의
  "메인 애플리케이션 창"

  역할이다.

  ---------------------------------------------------------

  중요한 철학:

  ❌ 일반 웹 카드
  ❌ dashboard panel
  ❌ chat container

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "future cinematic workstation"

  느낌.

  ---------------------------------------------------------

  따라서:

  - depth
  - layered glass
  - ambient light
  - restrained contrast
  - structured spacing

  중심으로 설계한다.

  ---------------------------------------------------------

  현재 단계에서는:

  UI shell 조립만 담당.

  이후:
  - command state
  - session state
  - parser
  - history
  - filesystem
  - routing

  등을 여기서 관리하게 된다.
*/


/* =========================================================
   COMPONENT IMPORTS
   ---------------------------------------------------------
   terminal 내부 구성요소 import.
========================================================= */

/*
  glass outer shell.

  terminal window 전체 외곽 프레임.
*/
import GlassFrame from "@/components/layout/GlassFrame";

/*
  terminal top navbar.
*/
import TerminalNavbar from "@/components/terminal/TerminalNavbar";

/*
  terminal session tabs.
*/
import TerminalTabs from "@/components/terminal/TerminalTabs";

/*
  terminal output area.
*/
import TerminalOutput from "@/components/terminal/TerminalOutput";

/*
  terminal command input.
*/
import TerminalInput from "@/components/terminal/TerminalInput";


/*
  TerminalWindow 컴포넌트.
*/
export default function TerminalWindow() {
  return (
    /*
      terminal window outer wrapper.

      width 제한:
      cinematic monitor 느낌 유지.

      mx-auto:
      화면 중앙 정렬.
    */
    <div
      className="
        relative

        mx-auto

        w-full
        max-w-[1500px]
      "
    >
      {/* =====================================================
          AMBIENT OUTER GLOW
          -----------------------------------------------------
          terminal 뒤쪽 공간감 생성.

          blur 강하게,
          opacity 약하게 사용.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/[0.05]

          blur-3xl
        "
      />

      {/* =====================================================
          SECONDARY SIDE GLOW
          -----------------------------------------------------
          화면 한쪽에 subtle light 추가.

          완전히 대칭이면
          UI 가 너무 기계적으로 보인다.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          right-[-120px]
          top-[120px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-violet-400/[0.04]

          blur-3xl
        "
      />

      {/* =====================================================
          MAIN GLASS WINDOW
          -----------------------------------------------------
          실제 terminal application window.
      ====================================================== */}
      <GlassFrame>
        {/* =================================================
            WINDOW CONTENT
            -------------------------------------------------
            내부 vertical layout 구성.
        ================================================= */}
        <div
          className="
            relative

            flex
            flex-col
          "
        >
          {/* =============================================
              WINDOW TOP NAVBAR
              ---------------------------------------------
              window controls,
              title,
              system indicators.
          ============================================== */}
          <TerminalNavbar />

          {/* =============================================
              TERMINAL TABS
              ---------------------------------------------
              workspace / session tabs.
          ============================================== */}
          <TerminalTabs />

          {/* =============================================
              TERMINAL OUTPUT
              ---------------------------------------------
              main archive content area.
          ============================================== */}
          <TerminalOutput />

          {/* =============================================
              TERMINAL INPUT
              ---------------------------------------------
              command input area.
          ============================================== */}
          <TerminalInput />
        </div>
      </GlassFrame>

      {/* =====================================================
          SCREEN EDGE SHADOW
          -----------------------------------------------------
          CRT monitor edge 느낌 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[32px]

          shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]
        "
      />

      {/* =====================================================
          SUBTLE BORDER LIGHT
          -----------------------------------------------------
          glass edge reflection.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[32px]

          border border-white/[0.03]
        "
      />
    </div>
  );
}