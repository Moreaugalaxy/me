/*
  src/components/terminal/commands/SkillsCommand.tsx

  ---------------------------------------------------------
  SkillsCommand
  ---------------------------------------------------------

  Interactive Terminal OS 의
  "skills" 명령어 출력 컴포넌트.

  ---------------------------------------------------------

  역할:

  사용자가 terminal 에:

    skills

  또는:

    ls skills

  같은 명령어를 입력했을 때
  출력되는 기술 스택 영역.

  ---------------------------------------------------------

  중요한 철학:

  이 컴포넌트는:

  단순 기술 목록이 아니라

  "시스템 capability archive"

  처럼 보여야 한다.

  ---------------------------------------------------------

  따라서:

  ❌ 이력서 스타일 금지
  ❌ 뱃지 남발 금지
  ❌ neon card 금지
  ❌ gamer RGB 금지

  ---------------------------------------------------------

  목표:

  - cinematic
  - calm
  - workstation
  - atmospheric
  - archival

  ---------------------------------------------------------

  현재 단계에서는:

  정적 UI 기반으로 구현.

  이후:
  - animation
  - filtering
  - realtime status
  - proficiency graph
  - interactive expansion

  가능.
*/


/* =========================================================
   SKILL CATEGORY DATA
   ---------------------------------------------------------
   기술 스택 데이터.

   이후:
   CMS / JSON / database 로
   분리 가능.
========================================================= */
const skillGroups = [
  {
    title: "Frontend",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",

    skills: [
      "Node.js",
      "Firebase",
      "REST API",
      "Express",
    ],
  },

  {
    title: "Design",

    skills: [
      "UI Design",
      "Cinematic Interface",
      "Motion Systems",
      "Glass UI",
    ],
  },

  {
    title: "Tools",

    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Vercel",
    ],
  },
];


/*
  SkillsCommand 컴포넌트.
*/
export default function SkillsCommand() {
  return (
    /*
      전체 command 출력 영역.

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
          실제 입력된 terminal command 느낌.
      ====================================================== */}
      <div
        className="
          text-cyan-300
        "
      >
        me@portfolio:~$ ls skills
      </div>

      {/* =====================================================
          INTRO TEXT
          -----------------------------------------------------
          시스템 설명 영역.
      ====================================================== */}
      <div
        className="
          max-w-3xl

          text-white/68
        "
      >
        Current technology stack and
        interface systems used for building
        immersive digital experiences.
      </div>

      {/* =====================================================
          SKILL CATEGORY GRID
          -----------------------------------------------------
          기술 카테고리 리스트.
      ====================================================== */}
      <div
        className="
          grid

          gap-6

          md:grid-cols-2
        "
      >
        {/* =================================================
            CATEGORY LOOP
        ================================================= */}
        {skillGroups.map((group) => (
          <div
            key={group.title}

            /*
              category card style.
            */
            className="
              relative

              overflow-hidden

              rounded-2xl

              border border-white/[0.08]

              bg-white/[0.02]

              p-6

              transition-all
              duration-300

              hover:border-cyan-300/20
              hover:bg-cyan-300/[0.03]
            "
          >
            {/* =============================================
                TOP REFLECTION
                ---------------------------------------------
                glass surface 느낌 강화.
            ============================================== */}
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

            {/* =============================================
                CARD CONTENT
            ============================================== */}
            <div
              className="
                relative
                z-10
              "
            >
              {/* =========================================
                  CATEGORY TITLE
              ========================================== */}
              <div
                className="
                  mb-5

                  flex
                  items-center
                  gap-3
                "
              >
                {/* category glow dot */}
                <div
                  className="
                    h-2.5
                    w-2.5

                    rounded-full

                    bg-cyan-300

                    shadow-[0_0_12px_rgba(125,211,252,0.75)]
                  "
                />

                {/* title */}
                <h3
                  className="
                    text-sm

                    uppercase

                    tracking-[0.2em]

                    text-cyan-100
                  "
                >
                  {group.title}
                </h3>
              </div>

              {/* =========================================
                  SKILL LIST
              ========================================== */}
              <div
                className="
                  flex
                  flex-wrap

                  gap-3
                "
              >
                {group.skills.map((skill) => (
                  <div
                    key={skill}

                    /*
                      skill pill style.

                      terminal + modern UI 혼합.
                    */
                    className="
                      rounded-lg

                      border border-white/[0.06]

                      bg-black/20

                      px-4
                      py-2

                      text-sm

                      text-white/82

                      transition-all
                      duration-300

                      hover:border-cyan-300/20
                      hover:text-cyan-100
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          SYSTEM STATUS PANEL
          -----------------------------------------------------
          현재 시스템 capability 상태.
      ====================================================== */}
      <div
        className="
          overflow-hidden

          rounded-2xl

          border border-white/[0.08]

          bg-black/20
        "
      >
        {/* =============================================
            STATUS HEADER
        ============================================== */}
        <div
          className="
            border-b border-white/[0.06]

            px-6
            py-4

            text-sm

            uppercase

            tracking-[0.18em]

            text-white/42
          "
        >
          System Capability Status
        </div>

        {/* =============================================
            STATUS ROWS
        ============================================== */}
        <div
          className="
            divide-y divide-white/[0.05]
          "
        >
          {/* row */}
          <div
            className="
              grid

              grid-cols-[1fr_auto]

              px-6
              py-5
            "
          >
            <span>
              Frontend Rendering System
            </span>

            <span
              className="
                text-lime-300
              "
            >
              ACTIVE
            </span>
          </div>

          {/* row */}
          <div
            className="
              grid

              grid-cols-[1fr_auto]

              px-6
              py-5
            "
          >
            <span>
              Cinematic Motion Engine
            </span>

            <span
              className="
                text-lime-300
              "
            >
              ACTIVE
            </span>
          </div>

          {/* row */}
          <div
            className="
              grid

              grid-cols-[1fr_auto]

              px-6
              py-5
            "
          >
            <span>
              Interactive Terminal Layer
            </span>

            <span
              className="
                text-lime-300
              "
            >
              ONLINE
            </span>
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
        skill registry synchronized successfully
      </div>
    </section>
  );
}