import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MainContainer>
      {/* Hamburger Icon for small screens */}
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      
      {/* Full-Screen Menu for small screens */}
      {isMenuOpen && (
        
        <Menu>
         
         
          <ul>
         
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </Menu>
      )}

      {/* Sidebar Menu for larger screens */}
      <Sidebar>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Sidebar>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
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
    border-radius: 5px;
    transition: 0.3s;
  }
  

  @media (min-width: 1180px) {
    display: none; /* Hide Hamburger Icon on larger screens */
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.colors.bgblack100};
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  

  ul {
    list-style: none;
    text-align: center;

    li {
      /* margin: 20px 0; */

      text-decoration: none;
  font-size: 24px;
  width: 99vh;
  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s, transform 0.3s ease;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: black;
    transform: scale(1.2); /* Adds zoom effect */
  }

    }
  }

  @media (min-width: 1180px) {
    display: none; /* Hide Menu on larger screens */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 270px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgblack100};
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  ul {
    text-align:center;
    width: 120px;
    
    
    

    li {
      margin: 30px 0;
      background-color: ${({ theme }) => theme.colors.yellow};
      height: 50px;
      width: 150px;
      transition: color 0.3s, transform 0.3s ease;
      border-radius: 16px;
      border: 3px solid black;
      padding-top: 3px ;

      &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: black;
    transform: scale(1.2); /* Adds zoom effect */
  }

      a {
        text-decoration: none;
        font-size: 23px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.bgblack900};
        transition: color 0.3s;
        

        &:hover {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  @media (max-width: 1180px) {
    display: none; /* Hide Sidebar on small screens */
  }
`;

export default Nav;
