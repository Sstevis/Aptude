import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import FAQ from "./routes/FAQ";
import Home from "./components/Home";
import Pricing from "./routes/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
