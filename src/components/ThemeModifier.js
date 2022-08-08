import { useEffect, useState } from "react"

const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false);

    // useEffect will equals componentDidMount and componentDidUpdate
    useEffect(() => {
        document.title = `Theme ${dark?'black':'white'}`
        // when given no dependencies, effect will always being called
        // when given an empty array, useEffect will only being called at first rendering
        // when given array with state value, useEffect will being called when state value is changed
        return () => {
            console.log(`component will unmount`);
        }
    })

    return (
        <div style={{backgroundColor:dark?'black':'white'}}>
            <p style={{color:dark?'white':'black'}}>Colour: {dark?'black':'white'}</p>
            <button onClick={() => setDark(!dark)}>
                set theme {dark? 'white':'black'}
            </button>
            <button onClick={props.onNavigate}>
                go to dummy view
            </button>
        </div>
    )
}

export default ThemeModifier;