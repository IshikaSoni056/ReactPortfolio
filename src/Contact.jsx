import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <MainContainer>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <ContentWrapper>
        <section className="contact section" id="Contact">
          <div className="container">
            <div className="row">
              <div className="ct">
                <h2>Contact Me</h2>
              </div>
              <div className="cont-pg">
                <div className="contactleft">
                  <p className="mb-6 mt-6 textleft" >
                  soniishika145@gmail.com
                  </p>
                  <p className="mb-10">
                    7692030958
                  </p>
                  <div className="socialicons">
                    <a href="https://www.linkedin.com/in/ishika-soni-8b005325a/">
                    <IoLogoLinkedin style={{ width: '40px', height: '40px' }}/>
                    </a>
                    <a href="https://www.instagram.com/ishikasoni_543/">
                    <FaInstagramSquare style={{ width: '40px', height: '40px' }}/>
                    </a>
                  </div>
                  <a href="https://drive.google.com/file/d/1-w4jQwYOCoZWpt_p94jOfVS5RHzHcpkE/view?usp=sharing" className="btn">
                    Resume
                  </a>
                </div>
                <div className="contactright">
                  <form action="https://formspree.io/f/meoqwpre" method="POST">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      autoComplete="off"
                      required=""
                    />
                    <input
                      type="Email"
                      name="Email"
                      placeholder="Your Email"
                       autoComplete="off"
                      required=""
                    />
                    <textarea
                      name="Message"
                      cols="30"
                      rows="6"
                      placeholder="Your Message"
                      autoComplete="off"
                      defaultValue={""}
                      required
                    />
                    <button type="submit" className="btn btn2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentWrapper>
    </MainContainer>
  );
};

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.bgblack900};
  margin-left: ${({ isNavOpen }) => (isNavOpen ? '270px' : '0')};
  transition: margin-left 0.3s;
  padding: 20px;

  @media (min-width: 1200px) {
    margin-left: 270px;
  }

  .ct {
    color: ${({ theme }) => theme.colors.yellow};
    font-style: italic;
    text-align: center;
    margin-bottom: 20px;
    h2{
      font-size: 40px;
    }
  }


  .cont-pg {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 25px;
  }

  .contactleft,
  .contactright {
    width: 100%;
    max-width: 500px;
    padding: 10px;
  }

 

  .socialicons {
    margin-top: 20px;
    
  }

  .socialicons a {
    text-decoration: none;
    font-size: 30px;
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.yellow};
    display: inline-block;
    transition: transform 0.5s;
  }

  .socialicons a:hover {
    transform: translateY(-5px);
    color: white;
  }

  .btn {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.yellow};
    font-weight: 600;
    color: black;
    text-decoration: none;
    height: 40px;
    width: 140px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: 20px;
  }

  .contactright form {
    display: flex;
    flex-direction: column;
  }

  form input,
  form textarea {
    width: 100%;
    border: 0;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 10px 0;
    color: #fff;
    font-size: 16px;
    border-radius: 6px;
  }

  form .btn2 {
    padding: 12px 40px;
    margin-top: 10px;
    font-size: 20px;
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    .contactleft,
    .contactright {
      width: 100%;
    }

    .ct {
      font-size: 24px;
    }

    .btn {
      font-size: 14px;
      height: 36px;
    }
  }

  @media (max-width: 600px) {
    .ct {
      font-size: 20px;
    }

    .btn {
      width: 120px;
      font-size: 14px;
    }

    form input,
    form textarea {
      font-size: 14px;
    }

    .socialicons a {
      font-size: 24px;
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

export default Contact;
