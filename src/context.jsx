import { useState, useEffect, createContext, useContext } from "react";

const Context = createContext();
export const AppContext = ({ children }) => {
  const [isDarkTheame, setisDarkTheame] = useState(false);
  const [searchValue, setsearchValue] = useState('cat')

  const toggleDarkTheme = () => {
    const NewTheme = !isDarkTheame;
    setisDarkTheame(NewTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", NewTheme);
    console.log(body);
  };

  return (
    <Context.Provider value={{ isDarkTheame, toggleDarkTheme, setsearchValue, searchValue }}>
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};
