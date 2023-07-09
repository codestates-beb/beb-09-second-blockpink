import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardMedia, CardContent } from "@mui/material";
import styles from "../../assets/Item.module.css";
import { UserContext } from "../Context/UserContext";

import Posting from "../Posting";

const Item = () => {
  const { user, setUser } = useContext(UserContext);
  const [infoNft, setInfoNft] = useState([]);

  return (
    <div className={styles.itemContainer}>
      <p className={styles.title}>Collected</p>
      <div className={styles.borderBottom}></div>
      <div className={styles.nftContainer}>
        {user.nfts ? (
          user.nfts.map((data, i) => {
            console.log(data[0]);
            return (
              <Card
                key={i}
                sx={{ maxWidth: "300px", borderRadius: "20px" }}
                className={styles.nft}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={data[0].tokenURI}
                  title={data[0].tokenId}
                />
                <CardContent>
                  <div>
                    <p className={styles.cardTitle}>{data[0].tokenId}</p>
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
          <div></div>
        )}
      </div>
      <p className={styles.title}>Posts</p>
      <div className={styles.borderBottom}></div>
      <div>
        {user.posts ? (
          user.posts.map((data, i) => {
            return <Posting />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Item;
