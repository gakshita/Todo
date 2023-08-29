import { createContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app ${theme}-mode`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
