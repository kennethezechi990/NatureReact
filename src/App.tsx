import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login/Login";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import OurServices from "./Components/OurServices/OurServices";
import Hero from "./Components/Hero/Hero";
import CustomerNeedSection from "./Components/CustomerNeedSection/CustomerNeedSection";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/AboutUsSection" element={<AboutUsSection />} />
          <Route
            path="/CustomerNeedSection"
            element={<CustomerNeedSection />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
