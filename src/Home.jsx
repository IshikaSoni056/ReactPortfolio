import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { Globalstyle } from "./Globalstyle";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <MainContainer>
      
      {/* Sidebar Navigation */}
      <NavWrapper isNavOpen={isNavOpen}>
        <Nav />
      </NavWrapper>

      {/* Main Content */}
      <ContentWrapper>
        <Section id="Home">
          <div className="container">
            <div className="row flex">
              <div className="home-info mr-16">
                <h3 className="hello">
                  Hello, my name is <span className="name"> Ishika Soni!</span>
                </h3>
                <h1 className="my-profession">
                  I am a <span className="typing">Frontend Developer || Competitive Programmer.</span>
                </h1>
                <p className="text-white">
                  Welcome to my portfolio! Here, you'll find a curated selection of my
                  projects showcasing my skills and my passion for creating innovative
                  solutions.
                </p>
                <a
                  href="https://drive.google.com/file/d/1-w4jQwYOCoZWpt_p94jOfVS5RHzHcpkE/view?usp=sharing"
                  className="btn hire-me"
                >
                  RESUME
                </a>
              </div>
              <div className="home-img pad-15">
                <img src="/image.jpeg" alt="Profile" />
              </div>
            </div>
          </div>
        </Section>
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 30px;
  cursor: pointer;

  span {
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (min-width: 1200px) {
    display: none; /* Hide Hamburger on larger screens */
  }
`;

const NavWrapper = styled.div`
  width: ${({ isNavOpen }) => (isNavOpen ? "270px" : "0")};
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgblack100};
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.3s;
  z-index: 10;

  @media (min-width: 1200px) {
    width: 270px; /* Fixed width for larger screens */
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.bgblack900};
  margin-left: ${({ isNavOpen }) => (isNavOpen ? "270px" : "0")};
  transition: margin-left 0.3s;

  @media (min-width: 1200px) {
    margin-left: 270px;
  }
`;

const Section = styled.section`
  padding: 30px;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 80px;
  

  .container {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .home-info {
    flex: 0 0 60%;
    max-width: 60%;
  }

  .home-img {
    flex: 0 0 40%;
    max-width: 40%;
    text-align: center;
  }

  .home-img img {
    height: 400px;
    border: 4px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 10px;
    
  }

  .hello {
    font-size: 40px;
    margin: 70px 0 0 0;

    .name {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  .my-profession {
    font-size: 30px;
    margin: 15px 0 0 0;
    color: ${({ theme }) => theme.colors.offwhite};
  }

  .typing {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .home-info p {
    margin-bottom: 50px;
    font-size: 20px;
    text-align: justify;
  }

  .btn {
    font-size: 20px;
    font-weight: 600;
    padding: 12px 35px;
    border-radius: 40px;
    color: black;
    display: inline-block;
    border: none;
    white-space: nowrap;
    background: ${({ theme }) => theme.colors.yellow};
    transition: all 0.3s ease;
  }

  .btn:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .home-info {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .row{
      flex-wrap: wrap-reverse;
      gap: 10px;   
    }
    .home-img {
      display: flex;
      justify-content: center;
      
    }

    .home-img {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .home-img img {
      height: 300px;
    }

    .hello {
      font-size: 30px;
    }

    .my-profession {
      font-size: 25px;
    }
  }
  
`;

export default Home;
