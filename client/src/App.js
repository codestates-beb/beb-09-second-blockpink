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

export default function App() {
  return (
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}