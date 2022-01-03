import React, {useRef} from 'react'

const App = () => {
    const ref = useRef();
    const inputRef = useRef()
    const click = () => {
        console.log(ref.current.clientHeight);
        ref.current.innerHTML = "Elemento cambiado";
    }
    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>
                Haz click
            </div>
        </div>
    )
}

export default App
