import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const RootLayout = () => {
  const [isFooterActive, setIsFooterActive] = useState(false);
  
 
  return (
    <div className={`root-wrapper ${isFooterActive ? "footer-active" : ""}`}>
      <Header />
      <main>
        <Outlet context={{ isFooterActive, setIsFooterActive }} />
      </main>
      <Footer isLandingActive={isFooterActive} />
    </div>
  );
};

export default RootLayout;
