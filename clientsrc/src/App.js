import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Upload from "./components/Upload/Upload";
import Layout from "./components/Layout/Layout";

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
