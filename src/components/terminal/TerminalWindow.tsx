/*
  src/components/terminal/TerminalWindow.tsx

  ---------------------------------------------------------
  TerminalWindow
  ---------------------------------------------------------

  Interactive Terminal OS 의
  실제 메인 터미널 화면 컴포넌트.

  ---------------------------------------------------------

  이 컴포넌트는:

  단순 "박스 UI" 가 아니다.

  역할:

  - terminal operating surface
  - navigation shell
  - command workspace
  - interactive archive viewport

  ---------------------------------------------------------

  전체 구조:

  TerminalWindow
    ├── TerminalNavbar
    ├── TerminalOutput
    └── TerminalInput

  ---------------------------------------------------------

  현재 단계에서는:

  - 레이아웃 구조
  - 기본 shell
  - visual hierarchy

  까지만 만든다.

  아직:
  ❌ 실제 command logic
  ❌ state system
  ❌ parser
  ❌ terminal history

  는 구현하지 않는다.

  ---------------------------------------------------------

  중요한 철학:

  이 UI 는:

  "개발자 장난감"

  처럼 보이면 안 된다.

  목표는:

  조용한 미래형 workstation.

  ---------------------------------------------------------

  따라서:

  - spacing 넓게
  - contrast 절제
  - subtle glow
  - restrained border

  방향 유지.
*/

import TerminalNavbar from "./TerminalNavbar";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

/*
  TerminalWindow 컴포넌트.
*/
export default function TerminalWindow() {
  return (
    /*
      전체 terminal shell.

      relative:
      내부 absolute layer 기준점.

      overflow-hidden:
      내부 glow 가 radius 밖으로
      튀어나가지 않도록 제한.

      rounded:
      glass frame 과 radius 통일.
    */
    <div
      className="
        relative

        overflow-hidden

        rounded-[28px]

        border border-white/[0.06]

        bg-[rgba(5,8,14,0.72)]

        shadow-[0_0_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* =====================================================
          INNER TOP HIGHLIGHT
          -----------------------------------------------------
          glass 내부 상단 reflection.

          목적:
          flat 느낌 제거.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      />

      {/* =====================================================
          INNER DEPTH SHADOW
          -----------------------------------------------------
          terminal 내부 recessed 느낌 생성.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        "
      />

      {/* =====================================================
          TERMINAL CONTENT WRAPPER
          -----------------------------------------------------
          실제 터미널 콘텐츠 영역.

          flex-col 구조:

          navbar
            ↓
          output
            ↓
          input
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
        "
      >
        {/* =================================================
            TERMINAL NAVBAR
            -------------------------------------------------
            상단 navigation 영역.

            포함 예정:
            - menu
            - clock
            - status
            - github
        ================================================= */}
        <TerminalNavbar />

        {/* =================================================
            TERMINAL OUTPUT
            -------------------------------------------------
            메인 출력 영역.

            실제 terminal history 가
            쌓이는 공간.
        ================================================= */}
        <TerminalOutput />

        {/* =================================================
            TERMINAL INPUT
            -------------------------------------------------
            하단 command input 영역.

            사용자가 명령어 입력하는 부분.
        ================================================= */}
        <TerminalInput />
      </div>

      {/* =====================================================
          BOTTOM AMBIENT GLOW
          -----------------------------------------------------
          하단부의 아주 약한 glow.

          목적:
          cinematic depth 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          bottom-[-120px]
          left-1/2

          h-[240px]
          w-[240px]

          -translate-x-1/2

          rounded-full

          bg-cyan-400/[0.04]

          blur-3xl
        "
      />

      {/* =====================================================
          SCREEN EDGE DARKENING
          -----------------------------------------------------
          CRT monitor edge 느낌 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          shadow-[inset_0_0_120px_rgba(0,0,0,0.28)]
        "
      />
    </div>
  );
}