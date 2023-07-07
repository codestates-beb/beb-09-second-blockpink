import React from "react";
import Banner from '../components/MyPage/Banner';
import ProfileImg from "../components/MyPage/ProfileImg";
import Item from '../components/MyPage/Item';
import UserInfo from "../components/MyPage/UserInfo";

import styles from '../assets/MyPage.module.css';

const MyPage = () => {

  return (
    <div className={styles.myPageContainer}>
      <Banner/>
      <ProfileImg/>
      <UserInfo/>
      <Item/>
    </div>
  );
};

export default MyPage;
