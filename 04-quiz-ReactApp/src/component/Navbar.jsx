import '../index.css'


import { useTheme } from "../Provider/ThemeProvider"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="navbar"
            style={{
                // background: theme === 'light' ? '#ffffffff' : '#333131ff',
                borderBottom: '2px solid grey'
            }}
        >

            <h2>React Quiz App</h2>
            <button onClick={toggleTheme} style={{
                cursor: 'pointer',
                height: '100%',
                border: 'none',
                // marginTop: '12px',
                margin: '10px',
                padding: '20px',
                outline: 'none',
                borderRadius: '15px 15px 15px 0px',
                background: theme === 'light' ? '#978585ff' : '#575050ff',
                color: theme === 'light' ? '#242424' : 'white',
                fontSize: '15px'


            }} >Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
        </div>
    )
}