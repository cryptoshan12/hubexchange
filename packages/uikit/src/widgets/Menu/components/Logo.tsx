import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { ArrowDownIcon, ArrowDropDownIcon, ArrowDropUpIcon, LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";
import { useState,useEffect } from "react";


interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 132px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const innerLogo = (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LogoIcon className="mobile-icon" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoWithTextIcon  className="desktop-icon" />
        {isDesktop && (
          <span
          style={{position:"absolute",
            left:"230px",
            top:"25px",
            marginLeft: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {isHovered ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
        </span>
        )}
      </div>


      

      {/* Dropdown Menu */}
      {/* Dropdown Menu */}
      {isDesktop && isHovered && (
        <div
          
          style={{
            position: "absolute",
            left: "5",
            marginTop: "0px",
            
            width: "220px",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            padding: "16px",
            border: "1px solid #ddd",
            zIndex: "1000",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {/* Company Section */}
            <div>
              <h4 style={{ color: "#333", fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>Company</h4>
              <a href="/" className="link" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Blog</a>
            </div>

            {/* Protocol Section */}
            <div>
              <h4 style={{ color: "#333", fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>Protocol</h4>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Forum</a>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Vote</a>
            </div>

            {/* Partnership Section */}
            <div>
              <h4 style={{ color: "#333", fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>Partnership</h4>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Partner with Sushi</a>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Token Listing</a>
            </div>

            {/* Support Section */}
            <div>
              <h4 style={{ color: "#333", fontSize: "18px", fontWeight: "600", marginBottom: "4px" }}>Support</h4>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>Academy</a>
              <a href="/" style={{ color: "#666", fontSize: "16px", display: "block", marginTop: "4px" }}>FAQ</a>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", paddingTop: "8px", borderTop: "1px solid #ddd", marginTop: "16px" }}>
              <a href="#" style={{ color: "#666" }}>✖️</a>
              <a href="#" style={{ color: "#666" }}>🐙</a>
              <a href="#" style={{ color: "#666" }}>🎮</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Hub.Exchange home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Hub.Exchange home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
