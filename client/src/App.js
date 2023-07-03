import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";
import MintPage from "./pages/MintPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/detail" element={<DetailPage />}>
          <Route path=":id"></Route>
        </Route>
        <Route path="/mint" element={<MintPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
