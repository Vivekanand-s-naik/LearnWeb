import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:'light',
    setDarkTheme:()=>{},
    setLightTheme:()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider

//Export a custome hook
export default function useTheme(){
    return useContext(ThemeContext);
}
