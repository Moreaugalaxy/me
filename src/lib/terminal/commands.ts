/*
  src/lib/terminal/commands.ts

  ---------------------------------------------------------
  Terminal Commands Registry
  ---------------------------------------------------------

  Interactive Terminal OS 의
  command registry 시스템.

  ---------------------------------------------------------

  역할:

  - 사용 가능한 command 목록 정의
  - alias 관리
  - command metadata 제공
  - parser lookup 지원
  - autocomplete 기반 제공

  ---------------------------------------------------------

  중요한 철학:

  이 파일은:

  단순 상수 파일이 아니라

  "terminal operating system registry"

  역할을 한다.

  ---------------------------------------------------------

  따라서 이후:

  - fuzzy search
  - autocomplete
  - command suggestion
  - permission system
  - filesystem integration
  - dynamic modules

  의 중심 데이터가 된다.

  ---------------------------------------------------------

  현재 단계에서는:

  - command metadata
  - aliases
  - syntax
  - descriptions

  만 관리.
*/

/* =========================================================
   TYPE IMPORTS
   ---------------------------------------------------------
   terminal 공용 타입 import.
========================================================= */
import type { TerminalCommand } from "@/lib/terminal/types";

/* =========================================================
   TERMINAL COMMAND REGISTRY
   ---------------------------------------------------------
   전체 command 목록.
========================================================= */

/*
  현재 지원 command 리스트.

  이후:
  runtime module system 으로
  확장 가능.
*/
export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    /*
        대표 command 이름.
      */
    name: "about",

    /*
        alias 목록.

        실제 terminal 느낌 강화 목적.
      */
    aliases: ["cat about.txt"],

    /*
        command 사용 예시.
      */
    syntax: "about",

    /*
        help 화면 설명.
      */
    description: "Show personal introduction archive.",
  },

  {
    name: "skills",

    aliases: ["ls skills"],

    syntax: "skills",

    description: "Display technical capability registry.",
  },

  {
    name: "projects",

    aliases: ["ls projects"],

    syntax: "projects",

    description: "Open project archive database.",
  },

  {
    name: "help",

    aliases: [],

    syntax: "help",

    description: "Display available command registry.",
  },

  {
    name: "clear",

    aliases: [],

    syntax: "clear",

    description: "Clear current terminal session.",
  },
];

/* =========================================================
   COMMAND LOOKUP MAP
   ---------------------------------------------------------
   빠른 command 검색용 map.
========================================================= */

/*
  key:
  command or alias

  value:
  TerminalCommand
*/
export const COMMAND_MAP = createCommandMap();

/* =========================================================
   COMMAND MAP CREATOR
   ---------------------------------------------------------
   registry 기반 lookup map 생성.
========================================================= */

/*
  command map 생성 함수.
*/
function createCommandMap() {
  /*
    결과 object.
  */
  const map: Record<string, TerminalCommand> = {};

  /*
    모든 command 순회.
  */
  TERMINAL_COMMANDS.forEach((command) => {
    /*
        대표 command 등록.
      */
    map[command.name] = command;

    /*
        alias 등록.
      */
    command.aliases?.forEach((alias) => {
      map[alias] = command;
    });
  });

  return map;
}

/* =========================================================
   HELPER FUNCTIONS
   ---------------------------------------------------------
   command utility 함수들.
========================================================= */

/*
  command normalize 처리.

  역할:
  - trim
  - lowercase
*/
export function normalizeCommand(input: string) {
  return input.trim().toLowerCase();
}

/*
  command 존재 여부 확인.
*/
export function hasCommand(input: string) {
  /*
    normalize 적용.
  */
  const normalized = normalizeCommand(input);

  return Boolean(COMMAND_MAP[normalized]);
}

/*
  command metadata 반환.
*/
export function getCommand(input: string) {
  /*
    normalize 적용.
  */
  const normalized = normalizeCommand(input);

  return COMMAND_MAP[normalized];
}

/*
  전체 command 목록 반환.
*/
export function getAllCommands() {
  return TERMINAL_COMMANDS;
}

/*
  command 이름만 반환.

  autocomplete 용도.
*/
export function getCommandNames() {
  return TERMINAL_COMMANDS.map((command) => command.name);
}

/*
  alias 포함 전체 검색 키워드 반환.
*/
export function getAllCommandKeywords() {
  return TERMINAL_COMMANDS.flatMap((command) => [
    command.name,

    ...(command.aliases ?? []),
  ]);
}
