import React, { createContext, useContext, useState } from 'react'
import NoteContext from './noteContext'
// let NoteContext = createContext();

const NoteState = (props) => {
  
    const json = {name : "rahul"}

    let [state, setState] = useState(json);

    const update=()=>{
        setTimeout(()=> {
            setState( {name : "6"})
        }, 5000)
    }

    return(
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;