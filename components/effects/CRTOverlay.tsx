/*
  components/system/CRTOverlay.tsx

  ---------------------------------------------------------
  CRTOverlay
  ---------------------------------------------------------

  Interactive Terminal OS 프로젝트의
  CRT 질감 레이어 컴포넌트.

  중요한 점:

  이 컴포넌트의 목적은
  "레트로 효과를 과시"하는 게 아니다.

  핵심 목표는:

  - subtle analog texture
  - cinematic monitor feeling
  - soft workstation atmosphere

  를 만드는 것.

  ---------------------------------------------------------

  절대 피해야 하는 방향:

  ❌ 과한 glitch
  ❌ matrix 스타일
  ❌ neon hacker 느낌
  ❌ 강한 scanline
  ❌ VHS meme 효과

  ---------------------------------------------------------

  좋은 CRT는:

  "보이는 효과"가 아니라
  "느껴지는 질감"

  이어야 한다.

  ---------------------------------------------------------

  이 컴포넌트가 담당하는 레이어:

  1. soft noise
  2. scanline
  3. vignette
  4. phosphor glow 느낌
  5. subtle screen texture

  ---------------------------------------------------------

  사용 예시:

  <main>
    <Background />
    <CRTOverlay />
    <TerminalShell />
  </main>

  ---------------------------------------------------------

  주의:

  pointer-events-none 필수.

  overlay 레이어가
  클릭 이벤트를 막으면 안 된다.
*/

export default function CRTOverlay() {
  return (
    <>
      {/* =====================================================
          NOISE LAYER
          -----------------------------------------------------
          가장 중요한 질감 레이어.

          역할:
          디지털 화면의 "너무 깨끗한 느낌" 제거.

          opacity가 매우 중요하다.

          높아질수록:
          - 싸구려 VHS 느낌
          - dirty texture
          - 저해상도 느낌

          이 강해진다.

          현재 수준:
          "거의 안 보이지만 존재는 느껴지는 수준"
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[2]

          opacity-[0.025]

          mix-blend-screen
        "
        style={{
          /*
            noise texture 이미지.

            추천 파일:
            /public/textures/noise.png

            작은 반복 texture 사용 추천.
          */
          backgroundImage:
            "var(--noise-image)",

          /*
            texture 반복.

            전체 화면에 고르게 퍼지도록 설정.
          */
          backgroundRepeat: "repeat",
        }}
      />

      {/* =====================================================
          SCANLINE LAYER
          -----------------------------------------------------
          CRT 특유의 수평 라인 질감.

          하지만:
          "scanline이 보이면 실패"

          매우 약하게 유지.

          repeating-linear-gradient 사용 이유:
          실제 이미지 없이도
          가벼운 성능으로 구현 가능.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[3]

          opacity-[0.04]
        "
        style={{
          background: `
            repeating-linear-gradient(
              to bottom,

              transparent 0px,

              rgba(255,255,255,0.03) 1px,

              transparent 2px
            )
          `,
        }}
      />

      {/* =====================================================
          VIGNETTE LAYER
          -----------------------------------------------------
          화면 가장자리를 아주 미세하게 어둡게 만든다.

          목적:
          중앙 집중도 강화.

          cinematic monitor 느낌 생성.

          radial-gradient 사용 이유:
          자연스럽게 중앙 시선 유도 가능.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[4]
        "
        style={{
          background: `
            radial-gradient(
              circle,

              transparent 45%,

              rgba(0,0,0,0.18) 100%
            )
          `,
        }}
      />

      {/* =====================================================
          TOP LIGHT REFLECTION
          -----------------------------------------------------
          오래된 모니터 유리 표면 느낌.

          아주 약한 상단 reflection 추가.

          목적:
          화면이 flat 해 보이는 것 방지.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[5]

          opacity-[0.03]
        "
        style={{
          background: `
            linear-gradient(
              to bottom,

              rgba(255,255,255,0.10),

              transparent 20%
            )
          `,
        }}
      />

      {/* =====================================================
          PHOSPHOR GLOW
          -----------------------------------------------------
          CRT 특유의 soft glow 느낌.

          blur 사용 이유:
          디지털 sharpness를 살짝 줄임.

          매우 약하게 유지해야 한다.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[6]

          opacity-[0.04]

          blur-[1px]
        "
        style={{
          background: `
            radial-gradient(
              circle at center,

              rgba(120,180,255,0.08),

              transparent 70%
            )
          `,
        }}
      />

      {/* =====================================================
          EDGE DARKENING
          -----------------------------------------------------
          화면 외곽부를 아주 약하게 눌러준다.

          목적:
          CRT monitor frame 느낌 강화.

          실제 오래된 디스플레이처럼
          가장자리 밝기를 살짝 감소시킨다.
      ====================================================== */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[7]

          shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]
        "
      />
    </>
  );
}