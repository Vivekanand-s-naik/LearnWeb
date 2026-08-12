import { useEffect, useState } from "react";
import "./App.css";
import Button from './components/Button';
import Card from './components/Card';
import { ThemeContextProvider } from "./Context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState('light')
  
  const setDarkTheme = () =>{
    setThemeMode('dark');
  };
  
  const setLightTheme = () =>{
    setThemeMode('light');
  };

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);
  
  return (
    <ThemeContextProvider value={{themeMode, setLightTheme, setDarkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider >
  );
}

export default App;
