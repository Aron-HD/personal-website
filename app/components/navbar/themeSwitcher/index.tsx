"use client"

import SunIcon from "./sun"
import MoonIcon from "./moon"
import useColorMode from "@/lib/useColorMode"

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === "light" ? "dark" : "light"

  return (
    <button type="button" className="block left-1/2 right-1/2 rounded-[50%] h-[50px] w-[50px] bg-transparent text-secondary hover:bezier-all hover:text-primary hover:cursor-pointer"
      onClick={() => setColorMode(nextColorMode)}
    >
      {colorMode === "light" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}

export default ThemeSwitcher;
