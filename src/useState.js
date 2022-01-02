import React, { useState } from 'react'

//Reglas de los hooks
//No se llaman en loops, condiciones o whiles ni nada
// Solo se llaman en 2 partes
//Componentes de react
//custom hooks
//cuando creemos un custom hook use*

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar];
}

const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            Cantador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App
