import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

// api
import { getPosting } from "./api/get-posting.js";

const LoginContext = createContext();

function PageContent() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const location = useLocation();
  const { loginHandler } = useContext(LoginContext);

  useEffect(() => {
    setIsLoading(true);

    const fetchRandomPost = async () => {
      try {
        const postData = await getPosting();
        setPost(postData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); 
      }
    };

    const timer = setTimeout(() => {
      fetchRandomPost();
    }, 700); 

    return () => clearTimeout(timer); 

  }, [location]);

  return (
    isLoading ? (
      <Spinner />
    ) : (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/detail" element={<DetailPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/mint" element={<MintPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/login"
          element={<LoginPage loginHandler={loginHandler} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  );
}

export default function App() {
  const [login, setLogin] = useState({
    isLogin: false,
    accessToken: "",
  });

  const loginHandler = (token) => {
    setLogin({
      isLogin: true,
      accessToken: token,
    });
  };

  return (
    <Router>
      <Header />
      <Sidebar />
      <LoginContext.Provider value={{ login, loginHandler }}>
        <PageContent />
      </LoginContext.Provider>
      <Footer />
    </Router>
  );
}