import React, { useRef, useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const container = useRef();
  const X = 170;
  const location = useLocation();
  const mediaQuery = useRef(gsap.matchMedia());

  // PC animation
  useGSAP(
    () => {
      const mq = mediaQuery.current;
      mq.add("(min-width:1024px)", (context) => {
        if (context.isReverted) return;
        if (isOpen) {
          // 메인페이지인 경우 이전에 열려있던 메뉴 닫기
          if (location.pathname === "/") {
            setActiveSub(null);
            gsap.to(".header_nav-main > li", {
              width: X,
              duration: 0.5,
              ease: "expo.inOut",
              overwrite: true,
            });
          }

          setActiveSub(null);

          gsap.to(".header_nav", { autoAlpha: 1, duration: 0.1 });
          gsap.to(".header_nav-main", {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power4.out",
          });

          // 메인 페이지가 아닐때
          if (location.pathname !== "/") {
            const activeLink = document.querySelector(
              `.header_nav-main > li[data-path="${location.pathname}"]`,
            );
            if (activeLink) {
              gsap.to(activeLink, {
                width: X * 2, // Active 시 2X 확장
                duration: 0.6,
                ease: "expo.inOut",
                delay: 0.1,
              });
            }
          }
        } else {
          // 메뉴 닫기 로직
          const tl = gsap.timeline();

          tl.to(".header_nav-sub", {
            opacity: 0,
            x: -20,
            duration: 0.3,
            ease: "power2.in",
          })
            .to(".header_nav-main > li", {
              width: X,
              duration: 0.3,
              ease: "power2.in",
            })
            .to(".header_nav-main", {
              opacity: 0,
              y: -50,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                gsap.set(".header_nav", { autoAlpha: 0 });
                setActiveSub(null);
              },
            });
        }
      });
      return () => mq.revert();
    },
    { scope: container, dependencies: [isOpen, location.pathname] },
  );

  useGSAP(
    () => {
      const mq = mediaQuery.current;
      mq.add("(min-width:1024px)", (context) => {
        if (context.isReverted) return;
        if (!isOpen) return;

        if (activeSub) {
          // 비활성화된 서브 메뉴(현재 active가 아닌 것) 퇴장 애니메이션
          gsap.to(".header_nav-sub:not(.show)", {
            opacity: 0,
            x: -50,
            duration: 0.3,
            ease: "power2.in",
          });
          // 모든 li를 일단 기본 너비 X로 돌림
          gsap.to(".header_nav-main > li", {
            width: X,
            duration: 0.3,
            ease: "power2.in",
          });

          // 선택된 메뉴 너비 확장 및 서브 메뉴 등장
          const tl = gsap.timeline();
          tl.to(".header_nav-main > li.active", {
            width: X * 2,
            duration: 0.7,
            ease: "expo.inOut",
          }).fromTo(
            `.header_nav-sub.${activeSub}`,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.4",
          );
        } else {
          //  activeSub가 null일때
          const tl = gsap.timeline({ overwrite: true });

          tl.to(".header_nav-sub", {
            opacity: 0,
            x: -50,
            duration: 0.4,
            ease: "expo.inOut",
          }).to(
            ".header_nav-main > li",
            {
              width: X,
              duration: 0.5,
              ease: "expo.inOut",
            },
            "-=0.3",
          );

          // gsap.to(".header_nav", {
          //   width: X,
          //   duration: 0.2,
          //   ease: "expo.inOut",
          //   delay: 0.1,
          // });
        }
      });
      return () => mq.revert();
    },
    { scope: container, dependencies: [activeSub] },
  );

  // Mobile animation
  useGSAP(
    () => {
      const mq = mediaQuery.current;
      mq.add("(max-width:1024px)", (context) => {
        if (context.isReverted) return;
        if (isOpen) {
          gsap.to(".header_nav", { height: "auto", duration: 0.2 });
          gsap.to(".header_nav-main", {
            autoAlpha: 1,
            duration: 0.3,
            delay: 0.3,
            ease: "power4.out",
          });
        } else {
          const tl = gsap.timeline();
          tl.to(".header_nav-main", {
            autoAlpha: 0,
            duration: 0.3,
            ease: "power4.out",
          }).to(".header_nav", { height: "0px", duration: 0.2 });
        }
      });
      return () => mq.revert();
    },
    { scope: container, dependencies: [isOpen, location.pathname] },
  );

  const handleSubToggle = (menuName) => {
    if (activeSub === menuName) {
      // 이미 열려있는 메뉴를 클릭한 경우
      setActiveSub(null);
    } else {
      setActiveSub(menuName);
    }
  };
  return (
    <div className="header" ref={container}>
      <div className="header_inner">
        <div className="header_logo">
          <Link to="/">
            <img src="/images/NAMPYONG_LOGO_02LT.png" alt="logoLT" />
          </Link>
        </div>
        <div className="header_menu">
          <div className={`header_menu_btn ${isOpen ? "active" : ""}`}>
            <span
              className="header_menu_btn-dot"
              onClick={() => setIsOpen(!isOpen)}></span>
          </div>
          <nav className="header_nav">
            <ul className="header_nav-main">
              <li data-path="/about">
                <Link to="/about">about</Link>
              </li>
              <li
                className={activeSub === "products" ? "active" : ""}
                data-path="/products">
                <button
                  className="header_nav-main_btn"
                  onClick={() => handleSubToggle("products")}>
                  products
                </button>
                <div
                  className={`header_nav-sub products ${activeSub === "products" ? "show" : ""}`}>
                  <ul className="header_nav-sub_inner">
                    <li>
                      <Link to="">emisshield</Link>
                    </li>
                    <li>
                      <Link to="">carbon nanotube sheets</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li data-path="/studies">
                <Link to="/studies">case studies</Link>
              </li>
              <li data-path="/science">
                <Link to="/science">science</Link>
              </li>
              <li data-path="/contact">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
