import React from "react";
import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bidding from "./pages/Bidding/Bidding";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import BiddingRegister from "./pages/BiddingRegister/BiddingRegister";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <main>
        <Aside />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidding" element={<Bidding />} />
          <Route path="/register" element={<BiddingRegister />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
