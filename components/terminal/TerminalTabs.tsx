/*
  src/components/terminal/TerminalTabs.tsx

  ---------------------------------------------------------
  TerminalTabs
  ---------------------------------------------------------

  Interactive Terminal OS 의
  상단 tab navigation 컴포넌트.

  ---------------------------------------------------------

  역할:

  - 현재 열린 terminal session 표시
  - workspace 전환
  - active view 강조
  - operating system 느낌 강화

  ---------------------------------------------------------

  이 컴포넌트는:

  일반 브라우저 탭이 아니라

  "digital workstation tabs"

  느낌이어야 한다.

  ---------------------------------------------------------

  중요한 철학:

  ❌ Chrome tab 느낌
  ❌ VSCode clone
  ❌ flashy neon

  대신:

  - cinematic
  - restrained
  - subtle
  - ambient

  방향 유지.

  ---------------------------------------------------------

  앞으로 확장 가능한 기능:

  - dynamic tabs
  - close button
  - drag reorder
  - active route sync
  - command session tabs
  - archive tabs

  ---------------------------------------------------------

  현재 단계에서는:

  정적인 UI shell 만 구현.
*/

"use client";

/*
  탭 데이터 타입 정의.

  향후:
  route 기반 state 관리에도 사용 가능.
*/
type TerminalTab = {
  /*
    고유 식별자.
  */
  id: string;

  /*
    화면에 표시될 이름.
  */
  label: string;

  /*
    현재 활성 탭 여부.
  */
  active?: boolean;
};

/*
  임시 탭 데이터.

  이후:
  props 또는 store 로 이동 가능.
*/
const tabs: TerminalTab[] = [
  {
    id: "welcome",
    label: "Welcome",
    active: true,
  },

  {
    id: "story",
    label: "Story",
  },

  {
    id: "projects",
    label: "Projects",
  },
];

/*
  TerminalTabs 컴포넌트.
*/
export default function TerminalTabs() {
  return (
    /*
      tabs 전체 영역.

      border-bottom:
      output 영역과 구분.
    */
    <div
      className="
        relative

        border-b border-white/[0.06]

        bg-black/10
      "
    >
      {/* =====================================================
          BACKGROUND HIGHLIGHT
          -----------------------------------------------------
          상단 유리 reflection 느낌.
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
          TAB CONTAINER
          -----------------------------------------------------
          실제 탭 리스트 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          items-center

          gap-3

          overflow-x-auto

          px-6
          py-4
        "
      >
        {/* =================================================
            TAB LOOP
            -------------------------------------------------
            탭 리스트 렌더링.
        ================================================= */}
        {tabs.map((tab) => {
          /*
            현재 active 상태 여부.
          */
          const isActive = tab.active;

          return (
            <button
              key={tab.id}
              /*
                tab button style.

                active 상태와 inactive 상태를
                분리해서 설계.
              */
              className={`
                relative

                flex
                items-center
                gap-3

                rounded-xl

                border

                px-5
                py-3

                font-mono
                text-sm

                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      border-cyan-300/30
                      bg-cyan-300/[0.06]
                      text-cyan-100

                      shadow-[0_0_24px_rgba(125,211,252,0.08)]
                    `
                    : `
                      border-white/[0.06]
                      bg-white/[0.02]
                      text-white/60

                      hover:border-cyan-300/20
                      hover:text-cyan-100
                    `
                }
              `}
            >
              {/* =============================================
                  ACTIVE GLOW DOT
                  ---------------------------------------------
                  active tab 상태 강조.
              ============================================== */}
              <div
                className={`
                  h-2
                  w-2

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-cyan-300

                        shadow-[0_0_12px_rgba(125,211,252,0.9)]
                      `
                      : `
                        bg-white/20
                      `
                  }
                `}
              />

              {/* =============================================
                  TAB LABEL
                  ---------------------------------------------
                  탭 이름.
              ============================================== */}
              <span>
                {tab.label}
              </span>

              {/* =============================================
                  CLOSE BUTTON
                  ---------------------------------------------
                  workstation tab 느낌 강화.

                  아직 실제 동작 없음.
              ============================================== */}
              <span
                className="
                  ml-2

                  text-xs

                  opacity-40

                  transition-opacity
                  duration-300

                  hover:opacity-100
                "
              >
                ×
              </span>

              {/* =============================================
                  ACTIVE UNDERLINE
                  ---------------------------------------------
                  현재 선택 탭 표시.
              ============================================== */}
              {isActive && (
                <div
                  className="
                    absolute

                    inset-x-4
                    bottom-0

                    h-px

                    bg-cyan-300/70
                  "
                />
              )}
            </button>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM AMBIENT LINE
          -----------------------------------------------------
          tabs 아래쪽 subtle glow line.
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
          via-cyan-300/10
          to-transparent
        "
      />
    </div>
  );
}