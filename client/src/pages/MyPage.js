import React, { useContext, useEffect } from "react";
import Banner from "../components/MyPage/Banner";
import ProfileImg from "../components/MyPage/ProfileImg";
import Item from "../components/MyPage/Item";
import UserInfo from "../components/MyPage/UserInfo";
import { UserContext } from "../components/Context/UserContext";

import styles from "../assets/MyPage.module.css";

// api
import { getUserInfo } from "../api/get-userinfo";

const MyPage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const result = getUserInfo(user.accessToken);
    setUser({
      isLogin: user.isLogin,
      accessToken: user.accessToken,
      address: result.address,
      token_amount: result.token_amount,
      eth_amount: result.eth_amount,
      nfts: [result.nfts],
      posts: [result.posts],
    });
  }, []);

  console.log(user);

  return (
    <div className={styles.myPageContainer}>
      <Banner />
      <ProfileImg />
      <UserInfo />
      <Item />
    </div>
  );
};

export default MyPage;
