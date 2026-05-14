/*
  src/components/terminal/TerminalNavbar.tsx

  ---------------------------------------------------------
  TerminalNavbar
  ---------------------------------------------------------

  Interactive Terminal OS 의
  상단 navigation bar 컴포넌트.

  ---------------------------------------------------------

  역할:

  - 현재 시스템 상태 표시
  - navigation menu
  - 시간 표시
  - external link
  - workstation header

  ---------------------------------------------------------

  참고한 UI 감성:

  - 미래형 workstation
  - archive terminal
  - ambient operating system
  - cinematic control panel

  ---------------------------------------------------------

  중요한 철학:

  이 navbar 는:

  ❌ 일반 웹사이트 header
  ❌ SaaS navbar
  ❌ flashy topbar

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "시스템 인터페이스"

  느낌.

  ---------------------------------------------------------

  따라서:

  - 여백 넓게
  - 선 얇게
  - glow 약하게
  - contrast 절제

  방향 유지.

  ---------------------------------------------------------

  앞으로 추가 가능한 기능:

  - active tab state
  - route sync
  - realtime clock
  - system status
  - sound toggle
  - theme switch
  - network status

  ---------------------------------------------------------

  현재 단계에서는:

  UI shell 만 구현한다.
*/

"use client";

/*
  GitHub 아이콘.

  lucide-react 사용.
*/
import { Github } from "lucide-react";

/*
  TerminalNavbar 컴포넌트.
*/
export default function TerminalNavbar() {
  /*
    현재 시간 생성.

    지금은 static 방식.

    이후:
    useEffect + setInterval 로
    realtime clock 으로 확장 가능.
  */
  const currentTime = new Date().toLocaleTimeString(
    "en-GB",
    {
      hour12: false,
    }
  );

  return (
    /*
      navbar 전체 영역.

      border-b:
      terminal body 와 구분.

      backdrop 느낌 위해
      약한 transparent 사용.
    */
    <header
      className="
        relative

        border-b border-white/[0.06]

        bg-black/20
      "
    >
      {/* =====================================================
          TOP LIGHT REFLECTION
          -----------------------------------------------------
          glass 표면 reflection.

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
          NAVBAR CONTENT
          -----------------------------------------------------
          실제 navbar 콘텐츠 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between

          px-8
          py-5
        "
      >
        {/* =================================================
            LEFT SIDE
            -------------------------------------------------
            logo + navigation 영역.
        ================================================= */}
        <div
          className="
            flex
            items-center
            gap-10
          "
        >
          {/* =============================================
              SYSTEM LOGO
              ---------------------------------------------
              cyan accent 사용.

              너무 밝으면
              cheap cyberpunk 느낌 남.
          ============================================== */}
          <div
            className="
              relative

              font-mono

              text-2xl

              tracking-tight

              text-cyan-300

              drop-shadow-[0_0_8px_rgba(125,211,252,0.35)]
            "
          >
            me

            {/* subtle underline */}
            <div
              className="
                absolute

                -bottom-2
                left-0

                h-px
                w-12

                bg-cyan-300/80
              "
            />
          </div>

          {/* =============================================
              NAVIGATION MENU
              ---------------------------------------------
              terminal style navigation.
          ============================================== */}
          <nav>
            <ul
              className="
                flex
                items-center
                gap-12

                font-mono

                text-sm
                tracking-wide

                text-white/82
              "
            >
              {/* story */}
              <li
                className="
                  transition-colors
                  duration-300

                  hover:text-cyan-200
                "
              >
                <button>
                  story
                </button>
              </li>

              {/* skills */}
              <li
                className="
                  transition-colors
                  duration-300

                  hover:text-cyan-200
                "
              >
                <button>
                  skills
                </button>
              </li>

              {/* portfolio */}
              <li
                className="
                  transition-colors
                  duration-300

                  hover:text-cyan-200
                "
              >
                <button>
                  portfolio
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* =================================================
            RIGHT SIDE
            -------------------------------------------------
            system status + clock + github
        ================================================= */}
        <div
          className="
            flex
            items-center
            gap-6
          "
        >
          {/* =============================================
              SYSTEM ONLINE INDICATOR
              ---------------------------------------------
              작은 active 상태 표시.
          ============================================== */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* online dot */}
            <div
              className="
                h-2.5
                w-2.5

                rounded-full

                bg-lime-400

                shadow-[0_0_10px_rgba(163,230,53,0.8)]
              "
            />

            {/* current time */}
            <span
              className="
                font-mono

                text-sm

                tracking-wide

                text-white/85
              "
            >
              {currentTime}
            </span>
          </div>

          {/* =============================================
              GITHUB BUTTON
              ---------------------------------------------
              external profile icon.

              hover 를 과하게 넣지 않는다.
          ============================================== */}
          <button
            className="
              flex
              items-center
              justify-center

              text-white/70

              transition-all
              duration-300

              hover:text-cyan-200
            "
            aria-label="GitHub"
          >
            <Github size={18} />
          </button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GLOW LINE
          -----------------------------------------------------
          navbar 하단부의 아주 미세한 glow.
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
    </header>
  );
}