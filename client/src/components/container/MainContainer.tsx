import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import PriceItem from "../priceItem/PriceItem"

const MainContainer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container direction={"column"}>
        <Grid item lg={3} sx={{ bgcolor: "secondary.main" }}>
          <PriceItem />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainContainer
