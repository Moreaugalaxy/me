import React from "react";

function TerminalInput() {
  return (
    <div className="terminal-input-area">
      <button type="button" aria-label="Add new entry">+</button>
      <button type="button" aria-label="Voice command">🎤</button>
      <button type="button" aria-label="Capture">📷</button>
      <input type="text" placeholder="Type a command..." />
    </div>
  );
}

export default TerminalInput;
