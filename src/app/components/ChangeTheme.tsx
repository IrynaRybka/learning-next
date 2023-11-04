'use client'
import { useState } from "react";

const ChangeTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
theme === 'light' ? setTheme('dark') : setTheme('light')
}
    console.log(theme);
    return (
        <>
        <button value={theme} type="button" onClick={toggleTheme}>
        Change theme
        </button>
        <p>{theme}</p>
        </>
    )
}

export {ChangeTheme};