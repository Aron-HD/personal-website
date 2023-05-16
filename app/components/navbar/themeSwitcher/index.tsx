// import { jsx, useColorMode } from "theme-ui"
import SunIcon from "./sun"
import MoonIcon from "./moon"

const ThemeSwitcher = () => {
  // const [colorMode, setColorMode] = useColorMode()
  let colorMode = "dark"
  const nextColorMode = colorMode === "light" ? "dark" : "light"
  // use tailwind color mode

  return (
    <button type="button" className="block left-1/2 right-1/2 rounded-[50%] h-[50px] w-[50px] bg-transparent text-secondary hover:bezier-all hover:text-primary hover:cursor-pointer"
    // onClick={() => setColorMode(nextColorMode)}
    >
      {colorMode === "light" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  )
}

export default ThemeSwitcher
