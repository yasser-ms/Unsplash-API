import React from "react";
import { useGlobalContext } from "./context";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ThemeToggle() {
  const { isDarkTheame, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheame ? (
          <MdOutlineLightMode className="toggle-icon" />
        ) : (
          <MdOutlineDarkMode
            className="toggle-icon"
            style={{ color: "#333" }}
          />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
