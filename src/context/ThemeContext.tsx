import { createContext, useState, type ReactNode } from "react";

type ThemeContextType = {
    theme: string, 
    toggleTheme: () => void
}

export const ThemeContext= createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}