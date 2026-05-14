import React from "react";
import { NavLink } from "react-router-dom";
import TerminalInput from "../ui/TerminalInput.jsx";
import { navigationItems } from "../../data/siteNavigation.js";

function Shell({ children }) {
  return (
    <div className="terminal-shell">
      <div className="terminal-frame">
        <div className="terminal-topbar">
          <div className="terminal-brand">
            <span>me</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
          <nav className="terminal-nav">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="terminal-content">{children}</div>

        <TerminalInput />
      </div>
    </div>
  );
}

export default Shell;
