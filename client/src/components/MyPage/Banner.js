import React, { useState, useEffect } from "react";
import { Grid, useTheme, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const BackgroundContainer = styled(Grid)(({ theme }) => ({
  width: "139%",
  height: "30vh",
  overflow: "hidden",
  display: "flex",
  marginLeft: "-22%",
  justifyContent: "center",
  alignItems: "center",
}));

const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const Banner = () => {
  const theme = useTheme();
  const [photo, setPhoto] = useState("");
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=gmMEtxOLtydYvjbI_SWI8InO7S9y5rdAlBX7DcwVC4g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data.urls.regular);
      })
      .catch((error) => {
        console.error("Error fetching photo:", error);
      });
  }, []);

  const handleWidthChange = (event, newWidth) => {
    setWidth(newWidth);
  };

  return (
    <BackgroundContainer container>
      <Grid item xs={12}>
        <Slider
          value={width}
          min={0}
          max={100}
          onChange={handleWidthChange}
          style={{ display: "none" }}
        />
        <BannerImage
          src={photo}
          alt="banner"
          theme={theme}
          style={{ width: `${100}%` }}
        />
      </Grid>
    </BackgroundContainer>
  );
};

export default Banner;
