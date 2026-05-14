/*
  src/lib/terminal/history.ts

  ---------------------------------------------------------
  Terminal History System
  ---------------------------------------------------------

  Interactive Terminal OS 의
  terminal history 관리 시스템.

  ---------------------------------------------------------

  역할:

  - command 실행 기록 저장
  - terminal output timeline 관리
  - history append 처리
  - history clear 처리
  - boot sequence 제공

  ---------------------------------------------------------

  중요한 철학:

  이 시스템은:

  단순 배열 저장소가 아니라

  "terminal session memory"

  처럼 동작해야 한다.

  ---------------------------------------------------------

  현재 단계에서는:

  - 기본 history 구조
  - immutable update helper
  - boot message

  만 구현.

  ---------------------------------------------------------

  이후 추가 가능한 기능:

  - localStorage persistence
  - session replay
  - multi-tab history
  - fake process logs
  - realtime stream
  - command history navigation
  - scroll restoration
*/


/* =========================================================
   TYPE IMPORTS
   ---------------------------------------------------------
   terminal 공용 타입 import.
========================================================= */
import type {
  ReactNode,
} from "react";

import type {
  TerminalHistoryItem,
} from "@/lib/terminal/types";


/* =========================================================
   HISTORY ID GENERATOR
   ---------------------------------------------------------
   history item 고유 ID 생성 함수.
========================================================= */

/*
  현재는:
  timestamp + random 기반.

  이후:
  uuid 로 교체 가능.
*/
function createHistoryId() {
  return (
    "history-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(36)
      .slice(2, 8)
  );
}


/* =========================================================
   HISTORY ITEM FACTORY
   ---------------------------------------------------------
   history item 생성 함수.
========================================================= */

/*
  terminal history item 생성.

  command 실행 결과를
  terminal timeline 형태로 변환한다.
*/
export function createHistoryItem(
  command: string,

  output: ReactNode
): TerminalHistoryItem {
  return {
    /*
      고유 ID.
    */
    id: createHistoryId(),

    /*
      실행된 command.
    */
    command,

    /*
      렌더링 output.
    */
    output,

    /*
      생성 시간.
    */
    timestamp: Date.now(),
  };
}


/* =========================================================
   HISTORY APPEND
   ---------------------------------------------------------
   history 추가 helper.
========================================================= */

/*
  immutable 방식으로
  history item 추가.
*/
export function appendHistory(
  currentHistory:
    TerminalHistoryItem[],

  item: TerminalHistoryItem
) {
  return [
    ...currentHistory,

    item,
  ];
}


/* =========================================================
   HISTORY CLEAR
   ---------------------------------------------------------
   terminal history 초기화.
========================================================= */

/*
  history 전체 제거.
*/
export function clearHistory() {
  return [] as TerminalHistoryItem[];
}


/* =========================================================
   DEFAULT BOOT HISTORY
   ---------------------------------------------------------
   최초 terminal boot message.
========================================================= */

/*
  시스템 진입 시 표시될
  기본 boot sequence.

  immersive atmosphere 목적.
*/
export const DEFAULT_HISTORY:
  TerminalHistoryItem[] = [
    createHistoryItem(
      "system",

      <div
        className="
          space-y-2

          font-mono
          text-sm

          text-white/72
        "
      >
        {/* =============================================
            BOOT TITLE
        ============================================== */}
        <div
          className="
            text-cyan-300
          "
        >
          INITIALIZING TERMINAL OS...
        </div>

        {/* =============================================
            BOOT STEP
        ============================================== */}
        <div>
          Loading cinematic interface modules...
        </div>

        {/* =============================================
            BOOT STEP
        ============================================== */}
        <div>
          Synchronizing archive registry...
        </div>

        {/* =============================================
            SYSTEM ONLINE
        ============================================== */}
        <div
          className="
            text-lime-300
          "
        >
          SYSTEM ONLINE
        </div>

        {/* =============================================
            HELPER MESSAGE
        ============================================== */}
        <div
          className="
            pt-2

            text-white/42
          "
        >
          Type
          {" "}

          <span
            className="
              text-cyan-200
            "
          >
            help
          </span>

          {" "}
          to display available commands.
        </div>
      </div>
    ),
  ];


/* =========================================================
   HISTORY SERIALIZER
   ---------------------------------------------------------
   향후 persistence 용 helper.
========================================================= */

/*
  history 를 JSON 저장 가능한 형태로 변환.

  현재는 placeholder 단계.
*/
export function serializeHistory(
  history:
    TerminalHistoryItem[]
) {
  return history.map(
    (item) => ({
      id: item.id,

      command: item.command,

      timestamp:
        item.timestamp,
    })
  );
}


/* =========================================================
   HISTORY LIMITER
   ---------------------------------------------------------
   terminal memory 폭주 방지.
========================================================= */

/*
  최대 history 개수 유지.

  너무 많은 output 누적 방지.
*/
export function limitHistory(
  history:
    TerminalHistoryItem[],

  max = 50
) {
  /*
    최대 개수 초과 시
    오래된 기록 제거.
  */
  if (history.length <= max) {
    return history;
  }

  return history.slice(
    history.length - max
  );
}