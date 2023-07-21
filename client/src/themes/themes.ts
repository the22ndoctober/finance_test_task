import React from "react"
import { PaletteMode } from "@mui/material"

const themes = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#41337A",
          },
          secondary: {
            main: "#6EA4BF",
          },
          text: {
            primary: "#fff",
            secondary: "grey",
          },
        }
      : {
          primary: {
            main: "#ECFEE8",
          },
          secondary: {
            main: "#C2EFEB",
          },
          text: {
            primary: "#000",
            secondary: "grey",
          },
        }),
  },
})

export default themes
