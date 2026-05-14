/*
  src/components/terminal/ui/ProjectRow.tsx

  ---------------------------------------------------------
  ProjectRow
  ---------------------------------------------------------

  Interactive Terminal OS 의
  프로젝트 row 컴포넌트.

  ---------------------------------------------------------

  역할:

  - 단일 프로젝트 정보 표시
  - archive database row 표현
  - terminal registry 분위기 강화
  - 프로젝트 상태 시각화

  ---------------------------------------------------------

  중요한 철학:

  이 컴포넌트는:

  ❌ 일반 카드 UI
  ❌ 블로그 리스트
  ❌ startup showcase
  ❌ neon cyberpunk

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "future archive registry"

  느낌.

  ---------------------------------------------------------

  따라서:

  - structured layout
  - restrained contrast
  - subtle hover
  - terminal typography

  방향 유지.

  ---------------------------------------------------------

  현재 단계에서는:

  정적 UI 기반 row 컴포넌트 구현.

  이후 추가 가능한 기능:

  - expand animation
  - detail modal
  - live preview
  - command execution
  - realtime deployment status
  - project route transition
*/


/* =========================================================
   COMPONENT PROPS
   ---------------------------------------------------------
   ProjectRow 에 전달되는 데이터 타입 정의.
========================================================= */
type ProjectRowProps = {
  /*
    프로젝트 고유 ID.

    예:
    PJT-001
  */
  id: string;

  /*
    프로젝트 이름.
  */
  title: string;

  /*
    프로젝트 분류.
  */
  category: string;

  /*
    현재 상태.

    예:
    ACTIVE
    ONLINE
    DEPLOYED
  */
  status: string;

  /*
    프로젝트 연도.
  */
  year: string;

  /*
    프로젝트 설명.
  */
  description: string;
};


/*
  상태별 색상 스타일 정의.

  현재는 간단한 방식 사용.

  이후:
  utility 함수로 분리 가능.
*/
const statusStyles: Record<string, string> = {
  ACTIVE: `
    border-lime-300/20
    bg-lime-300/[0.06]
    text-lime-300
  `,

  ONLINE: `
    border-cyan-300/20
    bg-cyan-300/[0.06]
    text-cyan-200
  `,

  DEPLOYED: `
    border-violet-300/20
    bg-violet-300/[0.06]
    text-violet-200
  `,

  RESEARCH: `
    border-amber-300/20
    bg-amber-300/[0.06]
    text-amber-200
  `,
};


/*
  ProjectRow 컴포넌트.
*/
export default function ProjectRow({
  id,
  title,
  category,
  status,
  year,
  description,
}: ProjectRowProps) {
  /*
    현재 status 에 맞는 style.

    존재하지 않는 경우 fallback 사용.
  */
  const currentStatusStyle =
    statusStyles[status] ??
    `
      border-white/[0.08]
      bg-white/[0.03]
      text-white/72
    `;

  return (
    /*
      row 전체 영역.

      group:
      hover animation 공유용.
    */
    <div
      className="
        group

        relative

        border-b border-white/[0.05]

        transition-all
        duration-300

        hover:bg-cyan-300/[0.03]
      "
    >
      {/* =====================================================
          HOVER GLOW
          -----------------------------------------------------
          hover 시 subtle ambient glow 생성.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-gradient-to-r
          from-transparent
          via-cyan-300/[0.03]
          to-transparent
        "
      />

      {/* =====================================================
          MAIN ROW
          -----------------------------------------------------
          핵심 프로젝트 정보 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          grid

          grid-cols-[120px_1.2fr_1fr_140px_100px]

          items-center

          gap-4

          px-6
          py-5
        "
      >
        {/* =================================================
            PROJECT ID
        ================================================= */}
        <div
          className="
            text-sm

            tracking-[0.08em]

            text-white/34
          "
        >
          {id}
        </div>

        {/* =================================================
            PROJECT TITLE
        ================================================= */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* active signal dot */}
          <div
            className="
              h-2
              w-2

              rounded-full

              bg-cyan-300

              shadow-[0_0_8px_rgba(125,211,252,0.75)]
            "
          />

          {/* title */}
          <span
            className="
              text-white/92
            "
          >
            {title}
          </span>
        </div>

        {/* =================================================
            CATEGORY
        ================================================= */}
        <div
          className="
            text-white/56
          "
        >
          {category}
        </div>

        {/* =================================================
            STATUS BADGE
        ================================================= */}
        <div>
          <span
            className={`
              inline-flex

              items-center
              justify-center

              rounded-full

              border

              px-3
              py-1

              text-[11px]

              uppercase

              tracking-[0.16em]

              ${currentStatusStyle}
            `}
          >
            {status}
          </span>
        </div>

        {/* =================================================
            YEAR
        ================================================= */}
        <div
          className="
            text-white/34
          "
        >
          {year}
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION SECTION
          -----------------------------------------------------
          프로젝트 설명 영역.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          border-t border-white/[0.03]

          px-6
          pb-5

          text-sm
          leading-7

          text-white/54
        "
      >
        {description}
      </div>

      {/* =====================================================
          BOTTOM SIGNAL LINE
          -----------------------------------------------------
          archive system 느낌 강화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute

          bottom-0
          left-0

          h-px
          w-full

          bg-gradient-to-r
          from-transparent
          via-cyan-300/10
          to-transparent

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />
    </div>
  );
}