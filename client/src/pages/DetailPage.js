import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider } from "@mui/material";

export default function DetailPage() {
  return (
    <div>
      <Grid
        container
        style={{ margin: "0 4rem", padding: "1rem", alignItems: "center" }}
      >
        <Grid xs={3}>
          <Sidebar />
        </Grid>
        <Grid xs={6}>
          <div className="post-info">
            <img src="" alt="user_img" />
            <div>name</div>
            <div>number</div>
            <Button>
              <Link to="/">List</Link>
            </Button>
          </div>
          <div className="post-content">content</div>
          <div className="post-data">
            <div>title</div>
            <div>creation date</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "2rem 0 0 0",
            }}
          >
            <div>
              <img src="" alt="user_img" />
              <div>name</div>
            </div>
            <div style={{ padding: "1rem" }}>
              this is where comments will be shown
            </div>
          </div>
          <Divider variant="middle" style={{ margin: "0 2rem 0 0" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "2rem 0 0 0",
            }}
          >
            <div>
              <img src="" alt="user_img" />
              <div>name</div>
            </div>
            <div style={{ padding: "1rem" }}>
              this is where comments will be shown
            </div>
          </div>
          <Divider variant="middle" style={{ margin: "0 2rem 0 0" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "2rem 0 0 0",
            }}
          >
            <div>
              <img src="" alt="user_img" />
              <div>name</div>
            </div>
            <div style={{ padding: "1rem" }}>
              this is where comments will be shown
            </div>
          </div>
          <Divider variant="middle" style={{ margin: "0 2rem 0 0" }} />
        </Grid>
        <Grid xs={3}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
