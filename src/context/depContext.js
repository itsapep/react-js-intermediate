import {createContext, useContext} from "react";

const DepsContext = createContext({});

export function useDeps() {
    // Allow a functional component to use context system
    return useContext(DepsContext);
}

export function DepsProvider({children, services}) {
    return (
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}