import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Grid
        container
        style={{ margin: "0 4rem", padding: "1rem", alignItems: "center" }}
      >
        <Grid xs={3}>
          <Link to="/">Sweet</Link>
        </Grid>
        <Grid xs={6}>
          <input type="search" placeholder="Search" size={40}></input>
        </Grid>
        <Grid xs={3} style={{ display: "flex" }}>
          <Button color="secondary">ETH faucet</Button>
          <Button>Login</Button>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
