import React, { useState } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Navigation from "./components/header/Navigation"
import useMediaQuery from "@mui/material/useMediaQuery"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import themes from "./themes/themes"
import MainContainer from "./components/container/MainContainer"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [theme, setTheme] = useState<Partial<any>>(
    createTheme(themes(prefersDarkMode ? "dark" : "light")),
  )

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
        }}
      />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
