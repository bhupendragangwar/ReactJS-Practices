// import useTheme from "../ThemeToggle";

import { useTheme } from "./ThemeProvoder";

const Toggle = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div style={
            {
                display: "flex",
                justifyContent: 'space-evenly',
                borderBottom: '2px solid Grey'
            }
        }>
            <button
                onClick={toggleTheme}
                style={{
                    cursor: 'pointer',
                    height: '100%',
                    border: 'none',
                    marginTop: '12px',
                    padding: '20px',
                    outline: 'none',
                    borderRadius: '15px 15px 15px 0px',

                }}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
        </div>
    )
}

export default Toggle;