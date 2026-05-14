/*
  components/system/GlassFrame.tsx

  ---------------------------------------------------------
  GlassFrame
  ---------------------------------------------------------

  Interactive Terminal OS 의
  glass surface 전용 프레임 컴포넌트.

  ---------------------------------------------------------

  이 컴포넌트의 목적:

  - 미래형 workstation glass
  - cinematic transparent panel
  - layered interface depth

  를 만드는 것.

  ---------------------------------------------------------

  중요한 철학:

  이 프로젝트의 glass 는:

  ❌ iOS 스타일 과한 glassmorphism
  ❌ 과한 blur
  ❌ 밝은 유리 느낌
  ❌ neon reflection

  이 아니다.

  목표는:

  "어두운 미래형 관측 장비"

  같은 분위기.

  ---------------------------------------------------------

  즉:

  luxury UI 보다

  archive workstation
  ambient terminal
  cinematic console

  에 가까워야 한다.

  ---------------------------------------------------------

  이 컴포넌트가 담당하는 역할:

  1. glass panel base
  2. border depth
  3. internal reflection
  4. ambient glow
  5. cinematic shadow

  ---------------------------------------------------------

  사용 예시:

  <GlassFrame>
    <YourContent />
  </GlassFrame>

  ---------------------------------------------------------

  주의:

  blur 강도를 과하게 올리면:
  - cheap glass 느낌
  - GPU 부담 증가
  - 모바일 성능 저하

  가 발생한다.

  따라서 blur 는 절제해야 한다.
*/

import { ReactNode } from "react";

/*
  GlassFrame props 정의.

  children:
  glass 내부에 렌더링할 콘텐츠.

  className:
  외부에서 추가 스타일 확장 가능하도록 제공.
*/
interface GlassFrameProps {
  children: ReactNode;
  className?: string;
}

/*
  GlassFrame 컴포넌트.
*/
export default function GlassFrame({
  children,
  className = "",
}: GlassFrameProps) {
  return (
    /*
      최상위 컨테이너.

      relative:
      내부 overlay 레이어들의 기준점.

      overflow-hidden:
      reflection / glow 가 radius 밖으로
      새어나가지 않도록 제한.

      rounded-[28px]:
      너무 동그랗지 않으면서
      미래형 패널 느낌 유지.
    */
    <div
      className={`
        relative

        overflow-hidden

        rounded-[28px]

        ${className}
      `}
    >
      {/* =====================================================
          OUTER AMBIENT GLOW
          -----------------------------------------------------
          배경과 glass panel 을
          살짝 분리하는 외부 glow.

          중요한 점:
          glow 가 "효과"처럼 보이면 안 된다.

          목표:
          아주 미세한 깊이감만 추가.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[28px]

          shadow-[0_0_120px_rgba(120,170,255,0.08)]
        "
      />

      {/* =====================================================
          MAIN GLASS SURFACE
          -----------------------------------------------------
          실제 glass 표면 레이어.

          bg rgba:
          완전 투명 금지.
          적당한 dark tint 유지 필요.

          backdrop-blur:
          뒤 배경을 부드럽게 흐려
          유리 느낌 생성.

          border:
          glass edge 정의.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          border border-white/10

          bg-[rgba(10,14,20,0.55)]

          backdrop-blur-[14px]
        "
      >
        {/* =================================================
            TOP LIGHT REFLECTION
            -------------------------------------------------
            유리 표면 상단 reflection.

            목적:
            완전히 flat 한 느낌 제거.

            opacity를 매우 낮게 유지해
            subtle cinematic 방향 유지.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-b
            from-white/[0.07]
            via-transparent
            to-transparent
          "
        />

        {/* =================================================
            SIDE EDGE HIGHLIGHT
            -------------------------------------------------
            좌우 가장자리의 미세한 빛 반사.

            glass edge 를 더 입체적으로 만든다.

            실제 고급 모니터 프레임 느낌 생성.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            left-0

            w-px

            bg-white/10
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            right-0

            w-px

            bg-white/[0.04]
          "
        />

        {/* =================================================
            INNER SHADOW
            -------------------------------------------------
            내부 깊이감 생성.

            inset shadow 사용 이유:
            glass 내부가 살짝 recessed 된 느낌 제공.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
          "
        />

        {/* =================================================
            BOTTOM DEPTH GRADIENT
            -------------------------------------------------
            하단부를 살짝 어둡게 만든다.

            목적:
            cinematic depth 강화.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            h-24

            bg-gradient-to-t
            from-black/20
            to-transparent
          "
        />

        {/* =================================================
            CONTENT AREA
            -------------------------------------------------
            실제 콘텐츠 영역.

            z-index 를 높여
            overlay 위로 올린다.
        ================================================= */}
        <div
          className="
            relative
            z-20
          "
        >
          {children}
        </div>
      </div>

      {/* =====================================================
          OUTER FRAME BORDER
          -----------------------------------------------------
          가장 바깥쪽 아주 미세한 frame line.

          목적:
          glass 패널 경계 명확화.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[28px]

          border border-white/[0.03]
        "
      />
    </div>
  );
}