/*
  src/components/terminal/commands/ProjectsCommand.tsx

  ---------------------------------------------------------
  ProjectsCommand
  ---------------------------------------------------------

  Interactive Terminal OS 의
  "projects" 명령어 출력 컴포넌트.

  ---------------------------------------------------------

  역할:

  사용자가 terminal 에:

    projects

  또는:

    ls projects

  같은 명령어를 입력했을 때
  프로젝트 아카이브를 출력한다.

  ---------------------------------------------------------

  중요한 철학:

  이 컴포넌트는:

  단순 portfolio list 가 아니라

  "digital archive database"

  처럼 느껴져야 한다.

  ---------------------------------------------------------

  따라서:

  ❌ 카드 남발 금지
  ❌ 과한 gradient 금지
  ❌ neon UI 금지
  ❌ startup landing 느낌 금지

  ---------------------------------------------------------

  목표 분위기:

  - archive workstation
  - cinematic interface
  - future terminal
  - system registry
  - ambient control panel

  ---------------------------------------------------------

  현재 단계에서는:

  정적 mock 데이터 기반 UI.

  이후 추가 가능한 기능:

  - 상세 modal
  - live preview
  - filtering
  - category system
  - command navigation
  - realtime status
  - project detail route
*/


/* =========================================================
   PROJECT DATA
   ---------------------------------------------------------
   프로젝트 mock data.

   이후:
   database / CMS / mdx 등으로
   확장 가능.
========================================================= */
const projects = [
  {
    id: "PJT-001",

    title: "Interactive Terminal OS",

    category: "Frontend System",

    status: "ACTIVE",

    year: "2025",

    description:
      "Cinematic portfolio operating system inspired by retro-future workstation interfaces.",
  },

  {
    id: "PJT-002",

    title: "Archive Memory Interface",

    category: "Experimental UI",

    status: "ONLINE",

    year: "2025",

    description:
      "Immersive digital archive experience focused on ambient interaction design.",
  },

  {
    id: "PJT-003",

    title: "Realtime Analytics Dashboard",

    category: "Monitoring Platform",

    status: "DEPLOYED",

    year: "2024",

    description:
      "Live monitoring interface for realtime operational visualization systems.",
  },

  {
    id: "PJT-004",

    title: "Glass Motion Framework",

    category: "UI Architecture",

    status: "RESEARCH",

    year: "2024",

    description:
      "Experimental interface framework combining cinematic motion and glass surfaces.",
  },
];


/*
  ProjectsCommand 컴포넌트.
*/
export default function ProjectsCommand() {
  return (
    /*
      전체 프로젝트 출력 영역.

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
        me@portfolio:~$ ls projects
      </div>

      {/* =====================================================
          INTRO DESCRIPTION
          -----------------------------------------------------
          archive 설명 영역.
      ====================================================== */}
      <div
        className="
          max-w-3xl

          text-white/68
        "
      >
        Loaded project archive registry.
        Current workspace contains cinematic interface,
        realtime system,
        and immersive frontend experiments.
      </div>

      {/* =====================================================
          PROJECT ARCHIVE TABLE
          -----------------------------------------------------
          terminal 기반 structured registry.
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

            grid-cols-[120px_1.2fr_1fr_140px_100px]

            border-b border-white/[0.06]

            bg-white/[0.02]

            px-6
            py-4

            text-xs

            uppercase

            tracking-[0.18em]

            text-white/38
          "
        >
          <div>ID</div>

          <div>Project</div>

          <div>Category</div>

          <div>Status</div>

          <div>Year</div>
        </div>

        {/* =================================================
            PROJECT ROWS
        ================================================= */}
        <div>
          {projects.map((project) => (
            <div
              key={project.id}

              /*
                row hover 를 아주 subtle 하게 유지.
              */
              className="
                border-b border-white/[0.05]

                transition-all
                duration-300

                hover:bg-cyan-300/[0.03]
              "
            >
              {/* =========================================
                  MAIN ROW
              ========================================== */}
              <div
                className="
                  grid

                  grid-cols-[120px_1.2fr_1fr_140px_100px]

                  items-center

                  px-6
                  py-5
                "
              >
                {/* project id */}
                <div
                  className="
                    text-white/34
                  "
                >
                  {project.id}
                </div>

                {/* project title */}
                <div
                  className="
                    text-white/92
                  "
                >
                  {project.title}
                </div>

                {/* category */}
                <div
                  className="
                    text-white/58
                  "
                >
                  {project.category}
                </div>

                {/* status */}
                <div>
                  <span
                    className="
                      rounded-full

                      border border-lime-300/20

                      bg-lime-300/[0.05]

                      px-3
                      py-1

                      text-xs

                      tracking-[0.14em]

                      text-lime-300
                    "
                  >
                    {project.status}
                  </span>
                </div>

                {/* year */}
                <div
                  className="
                    text-white/38
                  "
                >
                  {project.year}
                </div>
              </div>

              {/* =========================================
                  DESCRIPTION ROW
                  -----------------------------------------
                  archive detail 설명 영역.
              ========================================== */}
              <div
                className="
                  border-t border-white/[0.03]

                  px-6
                  pb-5

                  text-sm

                  text-white/54
                "
              >
                {project.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          SYSTEM METADATA PANEL
          -----------------------------------------------------
          archive 시스템 상태 영역.
      ====================================================== */}
      <div
        className="
          grid

          gap-5

          md:grid-cols-3
        "
      >
        {/* =============================================
            METADATA CARD
        ============================================== */}
        <div
          className="
            rounded-2xl

            border border-white/[0.08]

            bg-white/[0.02]

            p-6
          "
        >
          {/* label */}
          <div
            className="
              mb-3

              text-xs

              uppercase

              tracking-[0.2em]

              text-white/34
            "
          >
            Archive Count
          </div>

          {/* value */}
          <div
            className="
              text-3xl

              text-cyan-100
            "
          >
            04
          </div>
        </div>

        {/* =============================================
            METADATA CARD
        ============================================== */}
        <div
          className="
            rounded-2xl

            border border-white/[0.08]

            bg-white/[0.02]

            p-6
          "
        >
          {/* label */}
          <div
            className="
              mb-3

              text-xs

              uppercase

              tracking-[0.2em]

              text-white/34
            "
          >
            System Status
          </div>

          {/* value */}
          <div
            className="
              text-3xl

              text-lime-300
            "
          >
            ONLINE
          </div>
        </div>

        {/* =============================================
            METADATA CARD
        ============================================== */}
        <div
          className="
            rounded-2xl

            border border-white/[0.08]

            bg-white/[0.02]

            p-6
          "
        >
          {/* label */}
          <div
            className="
              mb-3

              text-xs

              uppercase

              tracking-[0.2em]

              text-white/34
            "
          >
            Workspace
          </div>

          {/* value */}
          <div
            className="
              text-3xl

              text-cyan-100
            "
          >
            ACTIVE
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER NOTE
          -----------------------------------------------------
          작은 archive footer.
      ====================================================== */}
      <div
        className="
          text-xs

          uppercase

          tracking-[0.22em]

          text-white/26
        "
      >
        project archive synchronization completed
      </div>
    </section>
  );
}