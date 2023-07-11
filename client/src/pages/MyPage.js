import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/MyPage/Banner";
import ProfileImg from "../components/MyPage/ProfileImg";
import Item from "../components/MyPage/Item";
import UserInfo from "../components/MyPage/UserInfo";
import { UserContext } from "../components/Context/UserContext";

import { Container } from "@mui/material";

// api
import { getUserInfo } from "../api/get-userinfo";

const MyPage = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(user.accessToken)
      .then((result) => {
        console.log(result);
        setUser({
          isLogin: user.isLogin,
          accessToken: user.accessToken,
          nickname: result.nickname,
          address: result.address,
          token_amount: result.token_amount,
          eth_amount: result.eth_amount,
          nfts: [result.nfts],
          posts: [result.posts],
        });
      })
      .catch((e) => {
        console.log(e);
        setUser({
          isLogin: false,
          accessToken: "",
          nickname: "",
          address: "",
          token_amount: "",
          eth_amount: "",
          nfts: [],
          posts: [],
        });
        navigate("/login");
      });
  }, []);

  console.log(user);

  return (
    // <div className={styles.myPageContainer}>
    <Container style={{ margin: "1rem auto", width: "70%" }}>
      <Banner />
      <ProfileImg />
      <UserInfo />
      <Item />
    </Container>
    // </div>
  );
};

export default MyPage;
