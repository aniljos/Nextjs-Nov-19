'use client'
import React, { useState } from "react";

export type ThemeState = {
    mode: string;
    changeMode: (mode: string) => void
}

export const initialThemeState: ThemeState = {
    mode: 'dark',
    changeMode: () => {}
}

//create the context
export const AppThemeContext = React.createContext(initialThemeState);



export default function AppThemeContextProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [mode, setMode] = useState(initialThemeState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
            {children}
        </AppThemeContext.Provider>
    )
}