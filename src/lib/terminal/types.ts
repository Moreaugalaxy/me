/*
  src/lib/terminal/types.ts

  ---------------------------------------------------------
  Terminal Types
  ---------------------------------------------------------

  Interactive Terminal OS 의
  terminal 시스템 공용 타입 정의 파일.

  ---------------------------------------------------------

  역할:

  - terminal history 타입 정의
  - parser 결과 타입 정의
  - command metadata 타입 정의
  - session 구조 정의

  ---------------------------------------------------------

  중요한 철학:

  이 파일은:

  terminal 시스템 전체의
  "데이터 설계도"

  역할을 한다.

  ---------------------------------------------------------

  현재 단계에서는:

  - history
  - parser
  - command registry

  중심 타입만 정의.

  ---------------------------------------------------------

  이후 추가 가능한 타입:

  - filesystem
  - process manager
  - tab session
  - realtime logs
  - notifications
  - boot state
  - system metrics
*/

/* =========================================================
   REACT TYPE IMPORT
   ---------------------------------------------------------
   output component typing 용도.
========================================================= */
import type { ReactNode } from "react";

/* =========================================================
   TERMINAL HISTORY ITEM
   ---------------------------------------------------------
   terminal 출력 한 세션 구조.
========================================================= */

/*
  하나의 terminal 실행 결과 구조.

  예:

    help
      → help output

    about
      → about component
*/
export type TerminalHistoryItem = {
  /*
    React rendering key 용
    고유 ID.
  */
  id: string;

  /*
    사용자가 입력한 command.
  */
  command: string;

  /*
    terminal 출력 UI.

    React component 가능.
  */
  output: ReactNode;

  /*
    생성 시간 timestamp.
  */
  timestamp: number;
};

/* =========================================================
   PARSER RESULT TYPE
   ---------------------------------------------------------
   parser 반환 데이터 구조.
========================================================= */

/*
  parser 실행 결과.
*/
export type ParserResult = {
  /*
    normalize 된 command.
  */
  command: string;

  /*
    렌더링할 UI component.
  */
  component: ReactNode;

  /*
    clear command 여부.
  */
  clear?: boolean;

  /*
    command 존재 여부.
  */
  found: boolean;
};

/* =========================================================
   TERMINAL COMMAND TYPE
   ---------------------------------------------------------
   command registry 구조.
========================================================= */

/*
  command metadata 구조.
*/
export type TerminalCommand = {
  /*
    대표 command 이름.

    예:
    about
  */
  name: string;

  /*
    command alias 목록.

    예:
    ["cat about.txt"]
  */
  aliases?: string[];

  /*
    command 설명.
  */
  description: string;

  /*
    syntax 표시 문자열.
  */
  syntax: string;
};

/* =========================================================
   TERMINAL SESSION TYPE
   ---------------------------------------------------------
   terminal 전체 세션 상태 구조.
========================================================= */

/*
  terminal session state.

  이후:
  multi-tab terminal
  구현 시 중요해진다.
*/
export type TerminalSession = {
  /*
    세션 고유 ID.
  */
  id: string;

  /*
    현재 session 이름.
  */
  name: string;

  /*
    session history.
  */
  history: TerminalHistoryItem[];

  /*
    활성화 여부.
  */
  active: boolean;
};

/* =========================================================
   TERMINAL TAB TYPE
   ---------------------------------------------------------
   tab UI 구조 정의.
========================================================= */

/*
  terminal 상단 tab 정보.
*/
export type TerminalTab = {
  /*
    tab 고유 ID.
  */
  id: string;

  /*
    tab 표시 이름.
  */
  label: string;

  /*
    활성 상태.
  */
  active: boolean;
};

/* =========================================================
   TERMINAL STATUS TYPE
   ---------------------------------------------------------
   fake OS 상태 정의.
========================================================= */

/*
  시스템 상태 값.
*/
export type TerminalStatus =
  | "BOOTING"
  | "ONLINE"
  | "IDLE"
  | "PROCESSING"
  | "ERROR";

/* =========================================================
   TERMINAL THEME TYPE
   ---------------------------------------------------------
   향후 테마 시스템용.
========================================================= */

/*
  terminal theme 종류.
*/
export type TerminalTheme =
  | "default"
  | "cinematic"
  | "archive"
  | "matrix"
  | "amber";
