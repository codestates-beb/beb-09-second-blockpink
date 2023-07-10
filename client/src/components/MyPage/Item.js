import React, { useContext, useState } from "react";
import { Tab, Tabs, Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "../../assets/Item.module.css";
import { UserContext } from "../Context/UserContext";

import Posting from "../Posting";

const Item = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("collected");
  let userNfts = user.nfts;
  let userPosts = user.posts || [];
  console.log(userNfts);
  console.log(userPosts);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={styles.itemContainer}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          "& .Mui-selected": {
            color: "#ff006c",
            backgroundColor: "transparent",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#ff006c",
          },
          "& .MuiTabs-root": {
            borderBottom: "1px solid #000",
          },
        }}
      >
        <Tab
          label="Collected"
          value="collected"
          sx={{
            fontSize: "16px",
            fontWeight: "800",
            "&.Mui-selected": {
              color: "#ff006c",
            },
          }}
        />
        <Tab
          label="Posts"
          value="posts"
          sx={{
            fontSize: "16px",
            fontWeight: "800",
            "&.Mui-selected": {
              color: "#ff006c",
            },
          }}
        />
      </Tabs>
      <div className={styles.borderBottom}></div>
      {activeTab === "collected" ? (
        <div className={styles.nftContainer}>
          {userNfts && userNfts.length ? (
            userNfts[0].map((data, i) => (
              <Card
                key={i}
                sx={{
                  maxWidth: "85%",
                  maxHeight: "280px",
                  borderRadius: "20px",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                className={styles.nft}
              >
                <CardMedia
                  sx={{ height: 120 }}
                  image={data.tokenURI}
                  title={data.tokenId}
                />
                <CardContent>
                  <div>
                    <p className={styles.cardTitle} style={{ marginLeft: "185px", marginTop: "0px" }}>
                      {data.tokenId}
                    </p>
                  </div>
                  <div className="cardContent">
                    <div className={styles.cardFloor}>
                      <p>Floor</p>
                      <p>0.1 ETH</p>
                    </div>
                    <div className={styles.cardTotal}>
                      <p>Total Volume</p>
                      <p>0.1 ETH</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>
              <Typography variant="body1" fontWeight="bold" fontSize="20px">
                No NFTs
              </Typography>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.postContainer}>
          {userPosts.length > 0 ? (
            userPosts.map((data) => (
              <div key={data.postId} className={styles.postContent}>
                <Posting id={data.postId} key={data.postId} />
              </div>
            ))
          ) : (
            <div>
              <Typography variant="body1" fontWeight="bold" fontSize="20px">
                No Posts
              </Typography>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Item;