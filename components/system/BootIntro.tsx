/*
  components/system/BootIntro.tsx

  ---------------------------------------------------------
  BootIntro
  ---------------------------------------------------------

  Interactive Terminal OS 의
  첫 진입 boot sequence 컴포넌트.

  ---------------------------------------------------------

  이 컴포넌트의 목적:

  사용자가 단순 웹사이트를 여는 것이 아니라

  "디지털 시스템에 접속했다"

  는 감각을 만드는 것.

  ---------------------------------------------------------

  중요한 철학:

  이 boot screen 은:

  ❌ 과한 해킹 영화 느낌
  ❌ 빠른 타이핑 남발
  ❌ matrix 스타일
  ❌ 과한 glitch

  를 피해야 한다.

  ---------------------------------------------------------

  목표 분위기:

  - 조용한 시스템
  - 오래된 미래형 워크스테이션
  - archive terminal
  - cinematic operating environment

  ---------------------------------------------------------

  핵심 키워드:

  subtle
  ambient
  restrained
  immersive

  ---------------------------------------------------------

  앞으로 확장 가능한 요소:

  - typing animation
  - loading progress
  - audio cue
  - boot delay
  - memory restore
  - biometric access
  - archive sync

  ---------------------------------------------------------

  사용 예시:

  <BootIntro />

  ---------------------------------------------------------

  중요한 UX 원칙:

  boot animation 은 짧아야 한다.

  사용자를 기다리게 하면:
  immersive 가 아니라
  불편한 사이트가 된다.

  따라서:
  "분위기만 전달하고 빠르게 끝난다"
  가 핵심.
*/

export default function BootIntro() {
  return (
    /*
      전체 boot 영역.

      relative:
      내부 glow / cursor 효과 기준점.

      max-w:
      terminal line 길이 제한.

      너무 길면 terminal 느낌이 사라진다.
    */
    <section
      className="
        relative

        max-w-3xl
      "
    >
      {/* =====================================================
          SYSTEM STATUS
          -----------------------------------------------------
          현재 시스템 상태 표시.

          작은 cyan 강조를 사용해
          online 상태 느낌 생성.

          uppercase + tracking:
          terminal monitor 분위기 강화.
      ====================================================== */}
      <p
        className="
          mb-6

          font-mono

          text-xs

          uppercase

          tracking-[0.28em]

          text-cyan-300/70
        "
      >
        SYSTEM ONLINE
      </p>

      {/* =====================================================
          MAIN TITLE
          -----------------------------------------------------
          메인 시스템 이름.

          매우 중요한 영역.

          font-weight 를 과하게 굵게 하지 않는다.

          이유:
          cinematic UI 는
          지나치게 bold 하면
          cheap sci-fi 느낌이 난다.
      ====================================================== */}
      <h1
        className="
          font-mono

          text-4xl
          leading-tight

          text-[#d7dde7]

          md:text-6xl
        "
      >
        Interactive
        <br />
        Terminal OS
      </h1>

      {/* =====================================================
          SUB DESCRIPTION
          -----------------------------------------------------
          시스템 설명 영역.

          line-height 를 넓게 사용해
          조용한 분위기 유지.

          너무 밝은 색 사용 금지.
      ====================================================== */}
      <p
        className="
          mt-8

          max-w-xl

          text-sm
          leading-7

          text-[#7f8794]

          md:text-base
        "
      >
        A cinematic digital archive system inspired by
        retro-future operating environments, ambient
        interfaces, and soft CRT workstation displays.
      </p>

      {/* =====================================================
          BOOT LOG CONTAINER
          -----------------------------------------------------
          terminal boot sequence 영역.

          실제 OS 로그처럼 구성.

          하지만:
          너무 기술적으로 복잡하면 안 된다.

          목적은:
          "분위기 전달"
      ====================================================== */}
      <div
        className="
          mt-14

          space-y-3

          font-mono

          text-xs

          text-[#8f98a8]
        "
      >
        {/* =================================================
            LOG LINE
            -------------------------------------------------
            opacity 차이를 이용해
            depth 느낌 생성.
        ================================================= */}
        <p className="opacity-80">
          INITIALIZING SYSTEM...
        </p>

        <p className="opacity-70">
          LOADING MEMORY ARCHIVE...
        </p>

        <p className="opacity-60">
          RESTORING TERMINAL SESSION...
        </p>

        {/* =================================================
            ACTIVE STATUS
            -------------------------------------------------
            현재 활성 상태 강조.

            cyan 을 사용하지만
            neon 느낌은 피한다.
        ================================================= */}
        <p
          className="
            text-cyan-300/80
          "
        >
          CONNECTION ESTABLISHED
        </p>
      </div>

      {/* =====================================================
          TERMINAL CURSOR
          -----------------------------------------------------
          아주 미세한 terminal cursor 느낌.

          너무 빠른 blinking 금지.

          aggressive terminal 느낌이 아니라
          ambient workstation 느낌 유지.
      ====================================================== */}
      <div
        className="
          mt-8

          flex
          items-center
          gap-3
        "
      >
        {/* prompt symbol */}
        <span
          className="
            font-mono

            text-sm

            text-cyan-300/70
          "
        >
          &gt;
        </span>

        {/* blinking cursor */}
        <div
          className="
            h-4
            w-2

            bg-cyan-300/60

            animate-pulse
          "
        />
      </div>

      {/* =====================================================
          AMBIENT BOTTOM GLOW
          -----------------------------------------------------
          boot 영역 아래쪽의 미세한 glow.

          목적:
          화면 중심 집중도 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          -bottom-24
          left-0

          h-40
          w-40

          rounded-full

          bg-cyan-300/[0.05]

          blur-3xl
        "
      />
    </section>
  );
}