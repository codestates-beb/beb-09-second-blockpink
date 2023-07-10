import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";
import MintPage from "./pages/MintPage";
import NotFound from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import { UserContext } from "./components/Context/UserContext";

// api
import { getPosting } from "./api/get-posting.js";
import { getUserInfo } from "./api/get-userinfo";

export default function App() {
  const [user, setUser] = useState({
    isLogin: false,
    accessToken: "",
    nickname: "",
    address: "",
    token_amount: "",
    eth_amount: "",
    nfts: [],
    posts: [],
  });

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail" element={<DetailPage />}>
            <Route path=":id" />
          </Route>
          <Route path="/mint" element={<MintPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}