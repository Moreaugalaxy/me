/*
  components/system/TerminalShell.tsx

  ---------------------------------------------------------
  Interactive Terminal OS 의 핵심 Shell 컴포넌트.
  ---------------------------------------------------------

  이 컴포넌트는 단순 카드 UI가 아니다.

  역할:

  - OS 내부 프레임
  - glass workstation
  - terminal container
  - persistent system shell

  을 담당한다.

  ---------------------------------------------------------

  중요한 설계 철학:

  1. "앱 카드"처럼 보이면 실패
  2. "OS 내부 패널"처럼 느껴져야 함
  3. 너무 밝으면 안 됨
  4. 너무 futuristic neon 이어도 안 됨
  5. subtle depth 유지

  ---------------------------------------------------------

  이 Shell 위에 앞으로 올라갈 요소들:

  - Navigation
  - Archive Screen
  - Terminal Screen
  - Memory Viewer
  - Timeline
  - Audio Panel
  - System Overlay

  ---------------------------------------------------------

  사용 예시:

  <TerminalShell>
    <YourContent />
  </TerminalShell>
*/

import { ReactNode } from "react";

/*
  TerminalShell 컴포넌트가 받을 props 타입 정의.

  children:
  shell 내부에 렌더링될 실제 콘텐츠.
*/
interface TerminalShellProps {
  children: ReactNode;
}

/*
  메인 Terminal Shell 컴포넌트.
*/
export default function TerminalShell({
  children,
}: TerminalShellProps) {
  return (
    /*
      Shell 외부 래퍼.

      relative:
      이후 overlay / glow / reflection 레이어의
      기준점 역할.

      w-full:
      반응형 전체 너비 사용.

      max-w-6xl:
      너무 넓어지면 몰입감이 깨지므로
      최대 폭 제한.

      rounded-2xl:
      미래형 OS지만 너무 둥글지 않게 유지.

      overflow-hidden:
      내부 overlay가 radius 밖으로
      삐져나오는 것 방지.
    */
    <div
      className="
        relative

        w-full
        max-w-6xl

        overflow-hidden

        rounded-2xl
      "
    >
      {/* =====================================================
          OUTER AMBIENT GLOW
          -----------------------------------------------------
          아주 약한 외부 glow.

          목적:
          배경과 shell을 살짝 분리.

          중요한 점:
          glow가 "효과"처럼 보이면 안 됨.

          opacity를 매우 낮게 유지.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-2xl

          shadow-[0_0_120px_rgba(80,120,255,0.08)]
        "
      />

      {/* =====================================================
          MAIN GLASS PANEL
          -----------------------------------------------------
          실제 glass shell 레이어.

          핵심 포인트:

          backdrop-blur:
          뒤 배경을 부드럽게 흐려
          유리 느낌 생성.

          bg rgba:
          완전 투명 금지.
          너무 투명하면 cheap 해 보인다.

          border:
          glass edge 정의.
      ====================================================== */}
      <div
        className="
          relative
          z-10

          border border-white/10

          bg-[rgba(10,14,22,0.58)]

          backdrop-blur-[12px]
        "
      >
        {/* =================================================
            TOP REFLECTION LAYER
            -------------------------------------------------
            유리 표면의 아주 약한 빛 반사.

            목적:
            flat 디자인 느낌 제거.

            opacity 매우 중요.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-b
            from-white/[0.06]
            via-transparent
            to-transparent
          "
        />

        {/* =================================================
            INNER SHADOW
            -------------------------------------------------
            shell 내부 깊이감 생성.

            inset shadow 사용 이유:
            패널 내부가 살짝 들어간 느낌 제공.
        ================================================= */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
          "
        />

        {/* =================================================
            SYSTEM TOP BAR
            -------------------------------------------------
            workstation monitor 느낌의 상단 바.

            macOS traffic light 느낌을
            직접적으로 따라가지 않도록
            색을 절제한다.
        ================================================= */}
        <div
          className="
            relative
            z-20

            flex
            items-center
            justify-between

            border-b border-white/10

            px-6
            py-4
          "
        >
          {/* 상태 indicator 영역 */}
          <div className="flex items-center gap-2">
            
            {/* online 상태 */}
            <div
              className="
                h-2
                w-2
                rounded-full

                bg-cyan-300/70

                shadow-[0_0_10px_rgba(103,232,249,0.35)]
              "
            />

            {/* inactive 상태 */}
            <div className="h-2 w-2 rounded-full bg-white/20" />

            {/* inactive 상태 */}
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>

          {/* 시스템 이름 */}
          <p
            className="
              font-mono

              text-[11px]

              uppercase

              tracking-[0.28em]

              text-[#7f8794]
            "
          >
            Interactive Terminal OS
          </p>
        </div>

        {/* =================================================
            MAIN CONTENT AREA
            -------------------------------------------------
            실제 screen 콘텐츠 영역.

            앞으로:
            - archive UI
            - terminal UI
            - navigation
            - viewer

            등이 여기에 들어간다.
        ================================================= */}
        <div
          className="
            relative
            z-20

            px-8
            py-10

            md:px-12
            md:py-14
          "
        >
          {children}
        </div>

        {/* =================================================
            BOTTOM AMBIENT GRADIENT
            -------------------------------------------------
            shell 하단 깊이감 강화.

            화면 아래쪽이 살짝 무거워지도록
            cinematic contrast 생성.
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
      </div>
    </div>
  );
}