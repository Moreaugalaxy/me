/*
  src/components/terminal/TerminalOutput.tsx

  ---------------------------------------------------------
  TerminalOutput
  ---------------------------------------------------------

  Interactive Terminal OS 의
  메인 출력 영역 컴포넌트.

  ---------------------------------------------------------

  역할:

  - terminal command history 출력
  - system logs 표시
  - portfolio content 렌더링
  - fake shell experience 생성

  ---------------------------------------------------------

  이 컴포넌트가 사실상:

  "포트폴리오 본문"

  이다.

  ---------------------------------------------------------

  중요한 철학:

  이 영역은:

  단순 terminal text 가 아니라

  "interactive archive"

  처럼 느껴져야 한다.

  ---------------------------------------------------------

  따라서:

  - spacing 넓게
  - typography 정돈
  - contrast 절제
  - modern card 와 terminal 혼합

  구조를 사용한다.

  ---------------------------------------------------------

  앞으로 확장될 기능:

  - command parser
  - dynamic history
  - animated typing
  - realtime logs
  - scroll memory
  - command execution
  - markdown rendering
  - interactive widgets

  ---------------------------------------------------------

  현재 단계에서는:

  정적 mock UI 만 구현한다.
*/


/* =========================================================
   SKILL DATA
   ---------------------------------------------------------
   현재 표시할 기술 스택 데이터.

   이후:
   CMS / JSON / database 등으로
   분리 가능.
========================================================= */
const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "Git",
];


/* =========================================================
   PROJECT DATA
   ---------------------------------------------------------
   프로젝트 리스트 mock data.
========================================================= */
const projects = [
  {
    title: "Interactive Terminal OS",

    description:
      "Cinematic terminal portfolio experience.",

    date: "2025.05",
  },

  {
    title: "Archive System",

    description:
      "Ambient digital memory interface.",

    date: "2025.04",
  },

  {
    title: "Realtime Dashboard",

    description:
      "Monitoring UI for live system analytics.",

    date: "2025.03",
  },
];


/*
  TerminalOutput 컴포넌트.
*/
export default function TerminalOutput() {
  return (
    /*
      terminal 출력 영역 전체.

      overflow-y-auto:
      이후 command history 가 많아졌을 때
      스크롤 가능하도록 준비.

      min-height 사용 이유:
      현재 화면 비율 안정화.
    */
    <section
      className="
        relative

        min-h-[680px]

        overflow-y-auto

        px-8
        py-8
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOW
          -----------------------------------------------------
          내부 공간감 생성.

          매우 약하게 유지.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-0

          h-[320px]
          w-[320px]

          -translate-x-1/2

          rounded-full

          bg-cyan-400/[0.03]

          blur-3xl
        "
      />

      {/* =====================================================
          TERMINAL CONTENT
          -----------------------------------------------------
          실제 출력 콘텐츠 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          flex-col

          gap-10

          font-mono

          text-[15px]
          leading-8

          text-white/88
        "
      >
        {/* =================================================
            COMMAND:
            whoami
        ================================================= */}
        <div>
          {/* command line */}
          <div
            className="
              mb-3

              text-cyan-300
            "
          >
            me@portfolio:~$ whoami
          </div>

          {/* command result */}
          <p>
            frontend developer and
            cinematic interface designer.
          </p>
        </div>

        {/* =================================================
            COMMAND:
            cat about.txt
        ================================================= */}
        <div>
          {/* command line */}
          <div
            className="
              mb-3

              text-cyan-300
            "
          >
            me@portfolio:~$ cat about.txt
          </div>

          {/* about content */}
          <div
            className="
              max-w-3xl

              space-y-2

              text-white/78
            "
          >
            <p>
              Hello. I build immersive web
              experiences inspired by
              retro-future operating systems.
            </p>

            <p>
              I focus on cinematic UI,
              ambient interaction,
              and emotionally memorable interfaces.
            </p>

            <p>
              My goal is creating digital spaces
              that feel alive, calm, and atmospheric.
            </p>
          </div>
        </div>

        {/* =================================================
            COMMAND:
            ls skills
        ================================================= */}
        <div>
          {/* command line */}
          <div
            className="
              mb-5

              text-cyan-300
            "
          >
            me@portfolio:~$ ls skills
          </div>

          {/* =============================================
              SKILL GRID
              ---------------------------------------------
              modern card UI 와
              terminal UI 혼합 구조.
          ============================================== */}
          <div
            className="
              grid

              grid-cols-2
              gap-4

              md:grid-cols-3
              xl:grid-cols-6
            "
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  rounded-xl

                  border border-white/[0.08]

                  bg-white/[0.02]

                  px-5
                  py-4

                  text-center

                  text-sm
                  text-white/82

                  transition-all
                  duration-300

                  hover:border-cyan-300/20
                  hover:bg-cyan-300/[0.03]
                  hover:text-cyan-100
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            COMMAND:
            ls projects
        ================================================= */}
        <div>
          {/* command line */}
          <div
            className="
              mb-5

              text-cyan-300
            "
          >
            me@portfolio:~$ ls projects
          </div>

          {/* =============================================
              PROJECT TABLE
              ---------------------------------------------
              terminal 느낌 유지하면서
              modern structured list 사용.
          ============================================== */}
          <div
            className="
              overflow-hidden

              rounded-2xl

              border border-white/[0.08]

              bg-black/20
            "
          >
            {/* project rows */}
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  grid

                  grid-cols-[1.4fr_2fr_auto]

                  items-center

                  border-b border-white/[0.05]

                  px-6
                  py-5

                  transition-all
                  duration-300

                  hover:bg-cyan-300/[0.03]
                "
              >
                {/* project title */}
                <div
                  className="
                    text-white/92
                  "
                >
                  {project.title}
                </div>

                {/* project description */}
                <div
                  className="
                    text-white/62
                  "
                >
                  {project.description}
                </div>

                {/* project date */}
                <div
                  className="
                    text-sm

                    text-white/42
                  "
                >
                  {project.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            COMMAND:
            help
        ================================================= */}
        <div>
          {/* command line */}
          <div
            className="
              mb-5

              text-cyan-300
            "
          >
            me@portfolio:~$ help
          </div>

          {/* =============================================
              HELP GRID
              ---------------------------------------------
              사용 가능한 명령어 목록.
          ============================================== */}
          <div
            className="
              grid

              gap-y-3

              md:grid-cols-2
            "
          >
            {/* command item */}
            <div
              className="
                flex
                gap-5
              "
            >
              <span
                className="
                  w-24

                  text-lime-300
                "
              >
                about
              </span>

              <span
                className="
                  text-white/68
                "
              >
                Show personal introduction
              </span>
            </div>

            {/* command item */}
            <div
              className="
                flex
                gap-5
              "
            >
              <span
                className="
                  w-24

                  text-lime-300
                "
              >
                skills
              </span>

              <span
                className="
                  text-white/68
                "
              >
                Show technical stack
              </span>
            </div>

            {/* command item */}
            <div
              className="
                flex
                gap-5
              "
            >
              <span
                className="
                  w-24

                  text-lime-300
                "
              >
                projects
              </span>

              <span
                className="
                  text-white/68
                "
              >
                Show project archive
              </span>
            </div>

            {/* command item */}
            <div
              className="
                flex
                gap-5
              "
            >
              <span
                className="
                  w-24

                  text-lime-300
                "
              >
                clear
              </span>

              <span
                className="
                  text-white/68
                "
              >
                Clear terminal output
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}