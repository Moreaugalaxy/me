/*
  src/components/terminal/commands/HelpCommand.tsx

  ---------------------------------------------------------
  HelpCommand
  ---------------------------------------------------------

  Interactive Terminal OS 의
  "help" 명령어 출력 컴포넌트.

  ---------------------------------------------------------

  역할:

  사용자가 terminal 에:

    help

  명령어를 입력했을 때
  사용 가능한 command 목록과
  시스템 정보를 출력한다.

  ---------------------------------------------------------

  중요한 철학:

  이 컴포넌트는:

  단순 메뉴얼이 아니라

  "system command registry"

  같은 분위기를 목표로 한다.

  ---------------------------------------------------------

  따라서:

  ❌ docs 사이트 느낌 금지
  ❌ 튜토리얼 느낌 금지
  ❌ 개발자 콘솔 느낌 과다 금지

  ---------------------------------------------------------

  목표:

  - cinematic
  - minimal
  - atmospheric
  - workstation-like
  - futuristic archive

  ---------------------------------------------------------

  현재 단계에서는:

  정적 command registry 형태로 구현.

  이후 추가 가능한 기능:

  - interactive autocomplete
  - keyboard navigation
  - fuzzy search
  - command suggestions
  - terminal parser integration
  - dynamic command system
*/


/* =========================================================
   COMMAND DATA
   ---------------------------------------------------------
   현재 지원하는 command 리스트.

   이후:
   실제 parser 와 연결 가능.
========================================================= */
const commands = [
  {
    command: "about",

    syntax: "cat about.txt",

    description:
      "Show personal introduction and archive profile.",
  },

  {
    command: "skills",

    syntax: "ls skills",

    description:
      "Display technical stack and capability registry.",
  },

  {
    command: "projects",

    syntax: "ls projects",

    description:
      "Open project archive database.",
  },

  {
    command: "clear",

    syntax: "clear",

    description:
      "Clear current terminal output session.",
  },

  {
    command: "help",

    syntax: "help",

    description:
      "Display available command registry.",
  },
];


/*
  HelpCommand 컴포넌트.
*/
export default function HelpCommand() {
  return (
    /*
      전체 help 출력 영역.

      terminal typography 유지.
    */
    <section
      className="
        flex
        flex-col

        gap-8

        font-mono

        text-[15px]
        leading-8

        text-white/84
      "
    >
      {/* =====================================================
          COMMAND LINE
          -----------------------------------------------------
          실제 terminal command 느낌.
      ====================================================== */}
      <div
        className="
          text-cyan-300
        "
      >
        me@portfolio:~$ help
      </div>

      {/* =====================================================
          INTRO DESCRIPTION
          -----------------------------------------------------
          시스템 설명 영역.
      ====================================================== */}
      <div
        className="
          max-w-3xl

          text-white/68
        "
      >
        Available command registry loaded.
        Use the following commands
        to navigate the interactive terminal workspace.
      </div>

      {/* =====================================================
          COMMAND REGISTRY TABLE
          -----------------------------------------------------
          실제 command 목록 영역.
      ====================================================== */}
      <div
        className="
          overflow-hidden

          rounded-2xl

          border border-white/[0.08]

          bg-black/20
        "
      >
        {/* =================================================
            TABLE HEADER
        ================================================= */}
        <div
          className="
            grid

            grid-cols-[180px_220px_1fr]

            border-b border-white/[0.06]

            bg-white/[0.02]

            px-6
            py-4

            text-xs

            uppercase

            tracking-[0.18em]

            text-white/36
          "
        >
          <div>Command</div>

          <div>Syntax</div>

          <div>Description</div>
        </div>

        {/* =================================================
            COMMAND ROWS
        ================================================= */}
        <div>
          {commands.map((item) => (
            <div
              key={item.command}

              /*
                command row style.
              */
              className="
                grid

                grid-cols-[180px_220px_1fr]

                items-center

                border-b border-white/[0.05]

                px-6
                py-5

                transition-all
                duration-300

                hover:bg-cyan-300/[0.03]
              "
            >
              {/* =========================================
                  COMMAND NAME
              ========================================== */}
              <div
                className="
                  text-lime-300
                "
              >
                {item.command}
              </div>

              {/* =========================================
                  COMMAND SYNTAX
              ========================================== */}
              <div
                className="
                  text-cyan-100
                "
              >
                {item.syntax}
              </div>

              {/* =========================================
                  COMMAND DESCRIPTION
              ========================================== */}
              <div
                className="
                  text-white/58
                "
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          QUICK USAGE PANEL
          -----------------------------------------------------
          사용자 가이드 영역.
      ====================================================== */}
      <div
        className="
          rounded-2xl

          border border-white/[0.08]

          bg-white/[0.02]

          p-6
        "
      >
        {/* =============================================
            PANEL TITLE
        ============================================== */}
        <div
          className="
            mb-5

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/36
          "
        >
          Quick Usage
        </div>

        {/* =============================================
            GUIDE LIST
        ============================================== */}
        <div
          className="
            flex
            flex-col

            gap-4

            text-white/68
          "
        >
          {/* item */}
          <div
            className="
              flex
              gap-4
            "
          >
            <span
              className="
                text-cyan-300
              "
            >
              01
            </span>

            <span>
              Type commands in the terminal input area.
            </span>
          </div>

          {/* item */}
          <div
            className="
              flex
              gap-4
            "
          >
            <span
              className="
                text-cyan-300
              "
            >
              02
            </span>

            <span>
              Press Enter to execute command sessions.
            </span>
          </div>

          {/* item */}
          <div
            className="
              flex
              gap-4
            "
          >
            <span
              className="
                text-cyan-300
              "
            >
              03
            </span>

            <span>
              Explore project archives and system capabilities.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SYSTEM STATUS FOOTER
          -----------------------------------------------------
          terminal footer note.
      ====================================================== */}
      <div
        className="
          flex
          items-center
          gap-3

          text-xs

          uppercase

          tracking-[0.22em]

          text-white/26
        "
      >
        {/* status dot */}
        <div
          className="
            h-2
            w-2

            rounded-full

            bg-lime-400

            shadow-[0_0_10px_rgba(163,230,53,0.7)]
          "
        />

        <span>
          command registry initialized successfully
        </span>
      </div>
    </section>
  );
}