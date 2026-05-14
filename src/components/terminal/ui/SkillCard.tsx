/*
  src/components/terminal/ui/SkillCard.tsx

  ---------------------------------------------------------
  SkillCard
  ---------------------------------------------------------

  Interactive Terminal OS 의
  기술 스택 카드 컴포넌트.

  ---------------------------------------------------------

  역할:

  - 개별 skill 표시
  - capability status 표현
  - terminal UI + modern glass UI 혼합
  - immersive workstation 분위기 강화

  ---------------------------------------------------------

  중요한 철학:

  이 컴포넌트는:

  ❌ 일반 badge
  ❌ 단순 태그
  ❌ neon cyberpunk
  ❌ flashy gradient card

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "시스템 capability module"

  같은 느낌.

  ---------------------------------------------------------

  따라서:

  - subtle glow
  - restrained contrast
  - calm typography
  - soft glass surface

  방향 유지.

  ---------------------------------------------------------

  현재 단계에서는:

  재사용 가능한
  단일 skill card UI 구현.

  이후 추가 가능한 기능:

  - hover motion
  - realtime activity
  - proficiency graph
  - animated glow
  - category mode
  - compact mode
*/


/* =========================================================
   COMPONENT PROPS
   ---------------------------------------------------------
   SkillCard 에 전달될 데이터 타입 정의.
========================================================= */
type SkillCardProps = {
  /*
    기술 이름.

    예:
    React
    TypeScript
    Next.js
  */
  name: string;

  /*
    현재 상태.

    예:
    ACTIVE
    ONLINE
    READY
  */
  status?: string;

  /*
    추가 설명.

    선택값.
  */
  description?: string;
};


/*
  SkillCard 컴포넌트.
*/
export default function SkillCard({
  name,

  status = "ACTIVE",

  description,
}: SkillCardProps) {
  return (
    /*
      카드 전체 영역.

      relative:
      내부 glow layer 기준점.

      overflow-hidden:
      blur/glow clipping 용도.
    */
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-2xl

        border border-white/[0.08]

        bg-white/[0.02]

        p-5

        transition-all
        duration-500

        hover:border-cyan-300/20
        hover:bg-cyan-300/[0.03]
      "
    >
      {/* =====================================================
          TOP GLASS REFLECTION
          -----------------------------------------------------
          유리 표면 느낌 생성.
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
          AMBIENT GLOW
          -----------------------------------------------------
          hover 시 subtle glow 생성.

          과하지 않게 유지.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-[140px]
          w-[140px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-300/[0.04]

          opacity-0

          blur-3xl

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* =====================================================
          CARD CONTENT
          -----------------------------------------------------
          실제 콘텐츠 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          flex
          flex-col

          gap-5
        "
      >
        {/* =================================================
            TOP ROW
            -------------------------------------------------
            상태 indicator + status text.
        ================================================= */}
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* =============================================
              STATUS INDICATOR
          ============================================== */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* glow dot */}
            <div
              className="
                h-2.5
                w-2.5

                rounded-full

                bg-lime-400

                shadow-[0_0_10px_rgba(163,230,53,0.8)]
              "
            />

            {/* status text */}
            <span
              className="
                text-[11px]

                uppercase

                tracking-[0.18em]

                text-white/42
              "
            >
              {status}
            </span>
          </div>

          {/* =============================================
              SYSTEM ICON
              ---------------------------------------------
              terminal module 느낌 강화.
          ============================================== */}
          <div
            className="
              text-white/18
            "
          >
            ◆
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}
        <div
          className="
            flex
            flex-col

            gap-2
          "
        >
          {/* =============================================
              SKILL NAME
          ============================================== */}
          <h3
            className="
              text-lg

              text-cyan-100
            "
          >
            {name}
          </h3>

          {/* =============================================
              OPTIONAL DESCRIPTION
          ============================================== */}
          {description && (
            <p
              className="
                text-sm
                leading-6

                text-white/56
              "
            >
              {description}
            </p>
          )}
        </div>

        {/* =================================================
            BOTTOM SYSTEM BAR
            -------------------------------------------------
            workstation module 느낌 강화.
        ================================================= */}
        <div
          className="
            flex
            items-center
            justify-between

            border-t border-white/[0.05]

            pt-4
          "
        >
          {/* module label */}
          <div
            className="
              text-[10px]

              uppercase

              tracking-[0.22em]

              text-white/26
            "
          >
            capability module
          </div>

          {/* subtle signal */}
          <div
            className="
              h-px
              w-12

              bg-gradient-to-r
              from-cyan-300/0
              via-cyan-300/40
              to-cyan-300/0
            "
          />
        </div>
      </div>

      {/* =====================================================
          EDGE DARKENING
          -----------------------------------------------------
          CRT monitor 느낌 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          shadow-[inset_0_0_40px_rgba(0,0,0,0.18)]
        "
      />
    </div>
  );
}