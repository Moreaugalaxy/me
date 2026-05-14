/*
  src/lib/terminal/parser.ts

  ---------------------------------------------------------
  Terminal Parser
  ---------------------------------------------------------

  Interactive Terminal OS 의
  command parser 시스템.

  ---------------------------------------------------------

  역할:

  사용자가 terminal 에 입력한 command 를
  해석해서 적절한 output component 를 반환한다.

  ---------------------------------------------------------

  예시:

    about
      → <AboutCommand />

    skills
      → <SkillsCommand />

    projects
      → <ProjectsCommand />

  ---------------------------------------------------------

  중요한 철학:

  이 parser 는:

  ❌ 실제 bash shell
  ❌ linux emulator
  ❌ 복잡한 CLI parser

  가 아니다.

  ---------------------------------------------------------

  목표는:

  "cinematic fake operating system"

  을 위한
  lightweight routing engine.

  ---------------------------------------------------------

  현재 단계에서는:

  - command normalize
  - command routing
  - unknown command 처리
  - clear 처리

  만 담당한다.

  ---------------------------------------------------------

  이후 추가 가능한 기능:

  - argument parsing
  - filesystem commands
  - async command
  - process simulation
  - fake networking
  - permissions
  - autocomplete integration
*/


/* =========================================================
   COMMAND COMPONENT IMPORTS
   ---------------------------------------------------------
   parser 가 반환할 component import.
========================================================= */

/*
  about command component.
*/
import AboutCommand from
  "@/components/terminal/commands/AboutCommand";

/*
  skills command component.
*/
import SkillsCommand from
  "@/components/terminal/commands/SkillsCommand";

/*
  projects command component.
*/
import ProjectsCommand from
  "@/components/terminal/commands/ProjectsCommand";

/*
  help command component.
*/
import HelpCommand from
  "@/components/terminal/commands/HelpCommand";

import { createElement } from "react";

/* =========================================================
   TERMINAL SYSTEM IMPORTS
========================================================= */

/*
  command registry utilities.
*/
import {
  getCommand,
  normalizeCommand,
} from "@/lib/terminal/commands";

/*
  parser result type.
*/
import type {
  ParserResult,
} from "@/lib/terminal/types";


/* =========================================================
   MAIN PARSER FUNCTION
   ---------------------------------------------------------
   terminal command 해석 함수.
========================================================= */

/*
  parseCommand

  사용자 입력을 해석한다.
*/
export function parseCommand(
  input: string
): ParserResult {
  /*
    command normalize 처리.

    예:
      "   HELP "
      → "help"
  */
  const command =
    normalizeCommand(input);

  /* =====================================================
     EMPTY INPUT
     -----------------------------------------------------
     빈 입력 방지.
  ===================================================== */
  if (!command) {
    return {
      command: "",

      component: null,

      found: false,
    };
  }

  /* =====================================================
     COMMAND LOOKUP
     -----------------------------------------------------
     registry 에서 command 검색.
  ===================================================== */
  const matchedCommand =
    getCommand(command);

  /* =====================================================
     UNKNOWN COMMAND
     -----------------------------------------------------
     존재하지 않는 command 처리.
  ===================================================== */
  if (!matchedCommand) {
    return {
      command,

      found: false,

      component: createElement(
        "div",
        {
          className: "font-mono text-sm text-red-300",
        },
        createElement(
          "span",
          null,
          "Command not found:"
        ),
        " ",
        createElement(
          "span",
          {
            className: "text-white/80",
          },
          command
        )
      ),
    };
  }

  /* =====================================================
     CLEAR COMMAND
     -----------------------------------------------------
     terminal output 초기화.
  ===================================================== */
  if (
    matchedCommand.name ===
    "clear"
  ) {
    return {
      command,

      component: null,

      clear: true,

      found: true,
    };
  }

  /* =====================================================
     ABOUT COMMAND
  ===================================================== */
  if (
    matchedCommand.name ===
    "about"
  ) {
    return {
      command,

      component: createElement(AboutCommand, null),

      found: true,
    };
  }

  /* =====================================================
     SKILLS COMMAND
  ===================================================== */
  if (
    matchedCommand.name ===
    "skills"
  ) {
    return {
      command,

      component: createElement(SkillsCommand, null),

      found: true,
    };
  }

  /* =====================================================
     PROJECTS COMMAND
  ===================================================== */
  if (
    matchedCommand.name ===
    "projects"
  ) {
    return {
      command,

      component: createElement(ProjectsCommand, null),

      found: true,
    };
  }

  /* =====================================================
     HELP COMMAND
  ===================================================== */
  if (
    matchedCommand.name ===
    "help"
  ) {
    return {
      command,

      component: createElement(HelpCommand, null),

      found: true,
    };
  }

  /* =====================================================
     FALLBACK
     -----------------------------------------------------
     예상치 못한 상태 대응.
  ===================================================== */
  return {
    command,

    found: false,

    component: createElement(
      "div",
      {
        className: "font-mono text-sm text-amber-300",
      },
      "Unknown parser state."
    ),
  };
}