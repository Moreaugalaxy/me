/*
  src/components/terminal/TerminalInput.tsx

  ---------------------------------------------------------
  TerminalInput
  ---------------------------------------------------------

  Interactive Terminal OS 의
  하단 command input 컴포넌트.

  ---------------------------------------------------------

  역할:

  - 사용자 명령어 입력
  - fake shell interaction 생성
  - terminal immersion 강화
  - command execution 준비

  ---------------------------------------------------------

  중요한 철학:

  이 input 은:

  ❌ 일반 form input
  ❌ 검색창
  ❌ chat UI

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "조용한 시스템 콘솔"

  느낌.

  ---------------------------------------------------------

  따라서:

  - border 최소화
  - glow 절제
  - spacing 여유롭게
  - typography 정돈

  방향 유지.

  ---------------------------------------------------------

  현재 단계에서는:

  - 입력 UI
  - focus 스타일
  - shell 분위기

  만 구현한다.

  아직:
  ❌ 실제 command parser
  ❌ enter execution
  ❌ history navigation
  ❌ autocomplete

  는 구현하지 않는다.

  ---------------------------------------------------------

  앞으로 추가될 기능:

  - command execution
  - history stack
  - arrow navigation
  - auto suggestion
  - fake filesystem
  - command parser
  - terminal animation
*/

"use client";

/*
  React state 사용.

  input value 상태 관리용.
*/
import { useState } from "react";


/*
  TerminalInput 컴포넌트.
*/
export default function TerminalInput() {
  /*
    현재 입력값 상태.

    이후:
    command execution 과 연결 가능.
  */
  const [command, setCommand] = useState("");

  return (
    /*
      전체 input 영역.

      border-top:
      output 영역과 시각적으로 구분.
    */
    <footer
      className="
        relative

        border-t border-white/[0.06]

        bg-black/20
      "
    >
      {/* =====================================================
          TOP HIGHLIGHT
          -----------------------------------------------------
          glass reflection 느낌.

          flat 느낌 제거.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-b
          from-white/[0.02]
          to-transparent
        "
      />

      {/* =====================================================
          INPUT CONTAINER
          -----------------------------------------------------
          실제 입력 UI 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          gap-4

          px-8
          py-6
        "
      >
        {/* =================================================
            TERMINAL PROMPT
            -------------------------------------------------
            shell prompt 영역.

            cyan accent 사용.
        ================================================= */}
        <div
          className="
            flex
            items-center
            gap-3

            font-mono
            text-sm

            whitespace-nowrap
          "
        >
          {/* user */}
          <span
            className="
              text-cyan-300
            "
          >
            me
          </span>

          {/* separator */}
          <span
            className="
              text-white/40
            "
          >
            @
          </span>

          {/* system */}
          <span
            className="
              text-white/78
            "
          >
            portfolio
          </span>

          {/* location */}
          <span
            className="
              text-lime-300
            "
          >
            ~
          </span>

          {/* dollar prompt */}
          <span
            className="
              text-cyan-300
            "
          >
            $
          </span>
        </div>

        {/* =================================================
            INPUT WRAPPER
            -------------------------------------------------
            input field 영역.

            flex-1:
            남은 공간 전체 사용.
        ================================================= */}
        <div
          className="
            relative

            flex-1
          "
        >
          {/* =============================================
              TERMINAL INPUT
              ---------------------------------------------
              실제 입력 필드.
          ============================================== */}
          <input
            type="text"

            /*
              현재 입력값 연결.
            */
            value={command}

            /*
              입력 변경 시 상태 업데이트.
            */
            onChange={(event) =>
              setCommand(event.target.value)
            }

            /*
              placeholder text.
            */
            placeholder="Type a command..."

            /*
              terminal style input.
            */
            className="
              w-full

              bg-transparent

              font-mono
              text-sm

              text-white/88

              outline-none

              placeholder:text-white/28
            "

            /*
              자동완성 비활성화.

              브라우저 기본 스타일 제거.
            */
            autoComplete="off"

            spellCheck={false}
          />

          {/* =============================================
              AMBIENT INPUT GLOW
              ---------------------------------------------
              focus 상태에서
              subtle glow 생성.
          ============================================== */}
          <div
            className="
              pointer-events-none

              absolute

              bottom-[-10px]
              left-0

              h-px
              w-full

              bg-gradient-to-r
              from-cyan-300/0
              via-cyan-300/25
              to-cyan-300/0
            "
          />
        </div>

        {/* =================================================
            SYSTEM STATUS
            -------------------------------------------------
            우측 상태 표시 영역.

            현재는 static 상태.
        ================================================= */}
        <div
          className="
            hidden

            items-center
            gap-3

            md:flex
          "
        >
          {/* online indicator */}
          <div
            className="
              h-2
              w-2

              rounded-full

              bg-lime-400

              shadow-[0_0_10px_rgba(163,230,53,0.75)]
            "
          />

          {/* status text */}
          <span
            className="
              font-mono
              text-xs

              uppercase

              tracking-[0.2em]

              text-white/38
            "
          >
            ready
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GLOW LINE
          -----------------------------------------------------
          하단 subtle cyan glow.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-cyan-300/20
          to-transparent
        "
      />
    </footer>
  );
}