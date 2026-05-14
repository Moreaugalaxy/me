/*
  src/components/terminal/commands/AboutCommand.tsx

  ---------------------------------------------------------
  AboutCommand
  ---------------------------------------------------------

  Interactive Terminal OS 의
  "about" 명령어 출력 컴포넌트.

  ---------------------------------------------------------

  역할:

  사용자가 terminal 에:

    about

  또는:

    cat about.txt

  같은 명령어를 입력했을 때
  출력되는 콘텐츠 영역.

  ---------------------------------------------------------

  이 컴포넌트는:

  단순 자기소개가 아니라

  "디지털 아카이브 로그"

  같은 분위기를 목표로 한다.

  ---------------------------------------------------------

  중요한 철학:

  ❌ 이력서 느낌
  ❌ 딱딱한 포트폴리오
  ❌ 자기소개서 문체

  대신:

  - cinematic
  - atmospheric
  - calm
  - immersive

  방향 유지.

  ---------------------------------------------------------

  현재 단계에서는:

  정적 UI 형태로만 구현.

  이후:
  markdown rendering,
  animation,
  typing effect,
  localization

  등으로 확장 가능.
*/


/*
  AboutCommand 컴포넌트.
*/
export default function AboutCommand() {
  return (
    /*
      전체 about 출력 영역.

      terminal typography 유지.
    */
    <section
      className="
        flex
        flex-col

        gap-6

        font-mono

        text-[15px]
        leading-8

        text-white/82
      "
    >
      {/* =====================================================
          COMMAND LINE
          -----------------------------------------------------
          실제 입력된 명령어처럼 보이는 영역.
      ====================================================== */}
      <div
        className="
          text-cyan-300
        "
      >
        me@portfolio:~$ cat about.txt
      </div>

      {/* =====================================================
          MAIN CONTENT
          -----------------------------------------------------
          자기소개 본문 영역.
      ====================================================== */}
      <div
        className="
          max-w-3xl

          space-y-5
        "
      >
        {/* =============================================
            INTRO PARAGRAPH
        ============================================== */}
        <p>
          Hello.
          I create immersive web experiences
          inspired by retro-future operating systems,
          cinematic interfaces,
          and ambient digital environments.
        </p>

        {/* =============================================
            SECOND PARAGRAPH
        ============================================== */}
        <p>
          My focus is building interfaces that
          feel emotionally memorable —
          not only functional,
          but atmospheric and alive.
        </p>

        {/* =============================================
            THIRD PARAGRAPH
        ============================================== */}
        <p>
          I enjoy combining terminal aesthetics,
          subtle motion,
          glass surfaces,
          CRT textures,
          and modern frontend architecture
          into one cohesive experience.
        </p>

        {/* =============================================
            FOURTH PARAGRAPH
        ============================================== */}
        <p>
          Currently working with
          React,
          Next.js,
          TypeScript,
          and cinematic UI systems
          focused on immersive interaction design.
        </p>
      </div>

      {/* =====================================================
          SYSTEM INFO CARD
          -----------------------------------------------------
          terminal style metadata 영역.
      ====================================================== */}
      <div
        className="
          mt-2

          overflow-hidden

          rounded-2xl

          border border-white/[0.08]

          bg-white/[0.02]
        "
      >
        {/* =============================================
            INFO ROW
        ============================================== */}
        <div
          className="
            grid

            grid-cols-[140px_1fr]

            border-b border-white/[0.06]

            px-6
            py-4
          "
        >
          {/* label */}
          <div
            className="
              text-white/40
            "
          >
            STATUS
          </div>

          {/* value */}
          <div
            className="
              text-lime-300
            "
          >
            ONLINE
          </div>
        </div>

        {/* =============================================
            INFO ROW
        ============================================== */}
        <div
          className="
            grid

            grid-cols-[140px_1fr]

            border-b border-white/[0.06]

            px-6
            py-4
          "
        >
          {/* label */}
          <div
            className="
              text-white/40
            "
          >
            ROLE
          </div>

          {/* value */}
          <div>
            Frontend Developer
          </div>
        </div>

        {/* =============================================
            INFO ROW
        ============================================== */}
        <div
          className="
            grid

            grid-cols-[140px_1fr]

            border-b border-white/[0.06]

            px-6
            py-4
          "
        >
          {/* label */}
          <div
            className="
              text-white/40
            "
          >
            FOCUS
          </div>

          {/* value */}
          <div>
            Cinematic UI / Terminal Systems
          </div>
        </div>

        {/* =============================================
            INFO ROW
        ============================================== */}
        <div
          className="
            grid

            grid-cols-[140px_1fr]

            px-6
            py-4
          "
        >
          {/* label */}
          <div
            className="
              text-white/40
            "
          >
            LOCATION
          </div>

          {/* value */}
          <div>
            Digital Archive Workspace
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER NOTE
          -----------------------------------------------------
          작은 시스템 메모 느낌.
      ====================================================== */}
      <div
        className="
          pt-2

          text-xs

          uppercase

          tracking-[0.22em]

          text-white/28
        "
      >
        archive record loaded successfully
      </div>
    </section>
  );
}