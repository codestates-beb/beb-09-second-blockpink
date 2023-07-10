import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "../../assets/Item.module.css";
import { UserContext } from "../Context/UserContext";

import Posting from "../Posting";

const Item = () => {
  const { user, setUser } = useContext(UserContext);
  const [infoNft, setInfoNft] = useState([]);
  let userNfts = user.nfts;
  let userPosts = user.posts;
  console.log(userNfts);
  console.log(userPosts);

  return (
    <div className={styles.itemContainer}>
      <p className={styles.title}>Collected</p>
      <div className={styles.borderBottom}></div>
      <div className={styles.nftContainer}>
        {userNfts !== undefined ? (
          userNfts.length !== 0 ? (
            userNfts[0].map((data, i) => {
              console.log(data);
              return (
                <Card
                  key={i}
                  sx={{ maxWidth: "300px", borderRadius: "20px" }}
                  className={styles.nft}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={data.tokenURI}
                    title={data.tokenId}
                  />
                  <CardContent>
                    <div>
                      <p className={styles.cardTitle}>{data.tokenId}</p>
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
              );
            })
          ) : (
            <div>
              <Typography>No NFTs</Typography>
            </div>
          )
        ) : (
          <div>
            <Typography>No NFTs</Typography>
          </div>
        )}
      </div>
      <p className={styles.title}>Posts</p>
      <div className={styles.borderBottom}></div>
      <div style={{ display: "flex" }}>
        {userPosts !== undefined ? (
          userPosts.length !== 0 ? (
            userPosts[0].map((data, i) => {
              return <Posting id={data.postId} key={data.postId} />;
            })
          ) : (
            <div>
              <Typography>No Posts</Typography>
            </div>
          )
        ) : (
          <div>
            <Typography>No Posts</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
