import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import PriceItem from "../items/priceItem/PriceItem"
import Search from "../items/search/Search"
import Typography from "@mui/material/Typography"

const MainContainer = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction={"column"}
        py={2}
        rowGap={3}
        justifyContent={"center"}
      >
        <Grid item spacing={0}>
          <Typography variant="h4" color="primary.text" textAlign={"center"}>
            Actual Prices for stock exchange shares
          </Typography>
        </Grid>
        <Grid item>
          <Search />
        </Grid>
        <Grid item spacing={0}>
          <Grid container spacing={0} direction={"row"} rowGap={1}>
            <PriceItem />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainContainer
