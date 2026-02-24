import { useEffect } from "react";
import { useOutletContext } from "react-router";
import "./Home.scss";

const Home = () => {
  const { isFooterActive, setIsFooterActive } = useOutletContext();

  const handleToggle = () => setIsFooterActive(!isFooterActive);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero_logo">
          <img src="/images/NAMPYONG_LOGO_02LT.png" alt="logoLT" />
        </div>
        {!isFooterActive && (
          <div className="hero_footer-activation-icon" onClick={handleToggle}>
            <span className="arrow">↓</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
