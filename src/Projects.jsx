import React from 'react'
import Nav from './Nav';
import styled from 'styled-components';
import { FaLink } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


const Projects = () => {
  return (
    <MainContainer>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <ContentWrapper>
        <section className="project section" id="Projects">
          <div className="container">
            <div className="row" />
            <h1 className="pj">Projects</h1>
            <div className="prj">
              <div className="pt-img">
                <img src="magazilla.webp" alt="Project 1" />
                <div className="layer">
                  <h2>NewsGlobe Chrome extension</h2>
                  <p className="">HTML|CSS|Javascript|Tailwind CSS</p>
                  <a href="https://drive.google.com/file/d/16-2HOZrOsYJpQSppeKFOGx0uOaLj25y-/view?usp=sharing">
                    <FaLink style={{ width: '40px', height: '40px', position: 'relative', top:'10px', left:'10px'  }}/>

                  </a>
                </div>
              </div>
              <div className="pt-img">
                <img src="nature.webp" alt="Project 2" />
                <div className="layer">
                  <h2>TourBeauties</h2>
                  <p>HTML|CSS|Javascript</p>
                  <a href="https://ishikasoni056.github.io/ImageSlider/">
                  <FaLink style={{ width: '40px', height: '40px', position: 'relative', top:'10px', left:'10px' }}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentWrapper>
    </MainContainer>
  )
}

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.bgblack900};
  margin-left: ${({ isNavOpen }) => (isNavOpen ? '270px' : '0')};
  transition: margin-left 0.3s;
  padding: 20px;

  @media (min-width: 1200px) {
    margin-left: 270px;
  }


  .pj {
    font-size: 45px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    margin-top: 50px;
  }

  .prj {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    margin-top: 50px;
    align-items: center;
    padding: 0 20px;
  }

  .pt-img {
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease;
    border: 4px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 15px;
    max-width:550px;
    max-height: 300px;
  }

  .pt-img img {
    width: 100%;
    display: block;
    border-radius: 10px;
  }

  .layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(85, 82, 82, 0.6), ${({ theme }) => theme.colors.yellow});
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    font-size: 20px;
    transition: height 0.5s ease-in-out;
    max-width: 550px;
    max-height: 300px;
  }

  .layer h3 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .layer a {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    background: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
  }

  .pt-img:hover img {
    transform: scale(1.1);
    transition: transform 0.5s ease;
    
  }

  .pt-img:hover .layer {
    height: 100%;
    
  }

  @media (max-width: 768px) {
    .pj {
      font-size: 30px;
    }

    .prj {
      grid-template-columns: 1fr; /* Stack items on small screens */
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: 'Playfair Display', serif;

  .section .container {
    padding-top: 40px;
    padding-bottom: 50px;
  }
`;

const NavWrapper = styled.div`
  width: ${({ isNavOpen }) => (isNavOpen ? '270px' : '0')};
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgblack100};
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.3s;
  z-index: 10;

  @media (min-width: 1200px) {
    width: 270px;
  }

 
`;

export default Projects;
