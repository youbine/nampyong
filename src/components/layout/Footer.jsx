import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Footer.scss";
import { Link } from "react-router";

const Footer = () => {
  const [isEn, setIsEn] = useState(Math.random() < 0.5);
  const footerRef = useRef();
  const wordmarkRef = useRef();

  // wordmark gsap
  useGSAP(
    () => {
      gsap.fromTo(
        wordmarkRef.current,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,

          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        },
      );
    },
    { scope: footerRef, dependencies: [isEn] },
  );


  return (
    <div className="footer" ref={footerRef}>
      <div className="footer_inner">
        <div className="footer_info">
          <p className="copyright">Nampyong Systems © 2026</p>
          <div className="footer_links">
            <Link to="">contact</Link>
            <Link to="">legal terms</Link>
            <Link to="">privacy policy</Link>
          </div>
        </div>

        <div className="footer_wordmark" onClick={() => setIsEn(!isEn)}>
          <div className="footer_wordmark_inner" ref={wordmarkRef}>
            {isEn ? (
              <div className="footer_wordmark-en">
                <img
                  src="/images/NAMPYONG_WORDMARK_01DK-EN.png"
                  alt="wordmarkDK"
                />
              </div>
            ) : (
              <div className="footer_wordmark-kr">
                <img
                  src="/images/NAMPYONG_WORDMARK_01DK-KR.png"
                  alt="wordmarkDK"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
