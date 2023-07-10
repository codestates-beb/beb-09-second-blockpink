import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Spinner from "./components/Spinner"; 

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
import { getPosting } from "./api/get-all-posting.js";
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

  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [pageLoading, setPageLoading] = useState(true); // 각 페이지 접속에 대한 로딩 상태 추가

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );
  
  useEffect(() => {
    async function fetchData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 700)); // 0.7초 딜레이 추가

        setLoading(false); // 로딩 상태 업데이트
      } catch (error) {
        console.error(error.response); // 오류 응답 로깅
        // 오류 처리 로직 추가
        // 예: 오류 메시지를 사용자에게 표시하거나, 기본 데이터로 대체하거나, 다른 오류 처리 작업 수행 등
        setLoading(false); // 로딩 상태를 false로 설정하여 로딩 컴포넌트를 제거하고, 오류 처리 작업을 수행할 수 있도록 함
      }
    }

    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 설정

  useEffect(() => {
    setPageLoading(loading); // 페이지 로딩 상태 업데이트
  }, [loading]);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Header />
        <Sidebar />
        {pageLoading ? (
          <Spinner /> // 로딩 중이면 로딩 컴포넌트를 반환
        ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail">
            <Route path=":id" element={<DetailPage />} />
          </Route>
          <Route path="/mint" element={<MintPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        )}
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}
