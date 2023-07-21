import styled from "@emotion/styled"
import { Box, Container, Typography } from "@mui/material"
import React from "react"
import { PaletteMode, Grid, Button } from "@mui/material"

type NavigationProps = {
  changeMode: any
}

const Navigation = ({ changeMode }: NavigationProps) => {
  return (
    <Box sx={{ bgcolor: "primary.main", py: "2rem" }}>
      <Container maxWidth="lg">
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4">Floppy Finance</Typography>
          <Button
            variant="outlined"
            sx={{ bgcolor: "secondary.main", color: "text.primary" }}
            onClick={changeMode}
          >
            Change Theme
          </Button>
        </Grid>
      </Container>
    </Box>
  )
}

export default Navigation
