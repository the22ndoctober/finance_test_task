import React, { useState, useEffect } from "react"
import Navigation from "./components/header/Navigation"
import useMediaQuery from "@mui/material/useMediaQuery"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import themes from "./themes/themes"
import MainContainer from "./components/container/MainContainer"
import { PaletteMode } from "@mui/material"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [theme, setTheme] = useState<Partial<any>>(
    createTheme(themes(prefersDarkMode ? "dark" : "light")),
  )

  useEffect(() => {
    const userLocalTheme: PaletteMode =
      localStorage.getItem("theme") || theme.palette.mode
    if (userLocalTheme !== theme.palette.mode) {
      setTheme(createTheme(themes(userLocalTheme)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme.palette.mode)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation
        changeMode={() => {
          setTheme((state) =>
            createTheme(
              themes(state.palette.mode === "light" ? "dark" : "light"),
            ),
          )
          console.log(theme.palette.mode)
        }}
      />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
