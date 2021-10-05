import {NoteDispatchContext, NoteStateContext} from "./noteContext";
import {useReducer} from "react";
import noteReducer from "./noteReducer";


export default function NoteContextProvider({children}) {

    const [state, dispatch] = useReducer(noteReducer, {
        notes: [],
        appointments: [],
        gallery: [],
        todos: [],
        links: [],
        fetchStatus: undefined,
    })

    return (

        <NoteStateContext.Provider value={state}>
            <NoteDispatchContext.Provider value={dispatch}>
                {children}
            </NoteDispatchContext.Provider>
        </NoteStateContext.Provider>
    )
}