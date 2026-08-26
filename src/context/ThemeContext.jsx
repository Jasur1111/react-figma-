import React, { createContext, useState } from 'react'


export const ThemeContent = createContext();
function ThemeProvider(props) {
    const [theme,setTheme] = useState("light")
    function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
    }



  return (
    <ThemeContent.Provider value={{theme, toggleTheme }}>
        {props.children}
    </ThemeContent.Provider>
  );
}


export default ThemeProvider;
