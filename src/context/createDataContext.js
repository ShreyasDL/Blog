import React,{ useReducer } from 'react'

const Context = React.createContext()

export default (reducer, actions , initialState ) => {
    const Provider = ( { children }) => {
        const [state, dispatch] = useReducer(reducer,initialState)

        return <Context.Provider value = { state } > { children }</Context.Provider>
    }

    return { Context , Provider }
}
