import React from 'react'
import Nav from './Nav';
import styled from 'styled-components';


const About = () => {
  return (
    <MainContainer>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <ContentWrapper>
      <section className="about section" id="Skills">
  <div className="container flex-1">
    <div className="row">
    <div className="me">
  <h1 className="h11">About Me</h1>
  <p className="para">
    I am currently pursuing a B.Tech in Computer Science and Engineering
    at Madhav Institute of Technology and Science, Gwalior. My aggregate
    CGPA is 8.32. My interests lie in Competitive Programming, DSA, and
    Web Development. My web development tech stack includes HTML, CSS,
    JavaScript, React.js. I'm proficient in programming with C and C++,
    and I also possess a foundational understanding of Python. I
    consider myself an enthusiastic learner and always strive to excel
    in any assigned task.
  </p>
  <div className="platforms">
    <a href="https://leetcode.com/u/Ishikasoni056/">
      <img src="/download.png" alt="LeetCode" />
    </a>
    <a href="https://www.codechef.com/users/ishikasoni_056">
      <img src="/codechef.jpg" alt="CodeChef" />
    </a>
    <a href="https://github.com/IshikaSoni056">
      <img src="/github.png" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/ishika-soni-8b005325a/">
      <img src="/linkd.png" alt="LinkedIn" />
    </a>
  </div>
</div>

      <div className="skills">
        <h2 className="h22">My Skills</h2>
        <div className="circles">
          <div className="outer">
            <div className="inner">
              <div id="number">HTML</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p1"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">CSS</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p2"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">
                Java-
                <br />
                script
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p3"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">Tailwind</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p4"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">C++</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p5"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">DSA</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p6"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <div id="number">React</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="80px"
                height="80px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  className="p7"
                  cx={40}
                  cy={40}
                  r={35}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
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
  margin-left: ${({ isNavOpen }) => (isNavOpen ? "270px" : "0")};
  transition: margin-left 0.3s;

  @media (min-width: 1200px) {
    margin-left: 270px;
  }`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  .section .container{
    padding-top: 60px;
    padding-bottom: 70px;
}

.section-title{
    flex: 0 0 100%;
    max-width: 100%;
    /* background-color: red; */
}
.section-title h2{
    font-size: 40px;
    color: ${({ theme }) => theme.colors.bgblack900};
    font-weight: 700;
    position: relative;
}

.section-title h2::before{
    content:'';
    height: 4px;
    width: 50px;
    background-color:${({ theme }) => theme.colors.yellow};
    position: absolute;
    top: 100%;
    left: 0; 
 }

 .section-title h2::after{
    content:'';
    height: 4px;
    width: 25px;
    background-color: ${({ theme }) => theme.colors.yellow};
    position: absolute;
    top: 100%;
    left: 0; 
    margin-top: 8px;
 }
 .row {
  display: flex;
  flex-wrap: wrap; /* Allows the sections to wrap to the next line */
  justify-content: space-between;
  align-items: flex-start;
}

.me, .skills {
  flex: 1;
  padding: 30px;
  padding-left:0;
  box-sizing: border-box;
}
.skills{
  padding-right:60px;
  padding-left: 30px;
  
}

/* Media query for screen sizes less than 800px */
@media (max-width: 1000px) {
  .row {
    flex-direction: column; /* Stacks items vertically */
  }

  .me, .skills {
    flex: unset; /* Removes equal flex distribution */
    width: 100%; /* Takes full width */
  }
}
.h11{
    font-size: 45px;
    margin-bottom: 70px;
    color: ${({ theme }) => theme.colors.grey};
    font-style: italic;
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
    /* border-bottom: 2px solid var(--skin-color); */
}
.h22{
    font-size: 45px;
    font-style: italic;
    color:${({ theme }) => theme.colors.yellow};
   text-align: center;

    /* border-bottom: 2px solid var(--skin-color); */

}
/* .me {
 margin-right: 80px;
} */
.me p{
   text-align: justify;
   padding-bottom: 30px;
   padding-left: 50px;
   color: ${({ theme }) => theme.colors.white};
   font-size: 20px;
  
   
  
}



.platforms {
  display: flex;
  gap: 40px; /* Add spacing between the icons */
  flex-wrap: nowrap; /* Prevent wrapping to the next line */
  justify-content: center; /* Center the links horizontally */
  align-items: center; /* Align the icons vertically */
  margin-bottom: 50px;
}

.platforms a img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  border-radius: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 0 2px 2px ${({ theme }) => theme.colors.yellow};

}

.platforms a img:hover {
  transform: scale(1.2); /* Add a hover effect */
}

.skills h2{
    padding-bottom: 40px;
   
}
.circles{
 
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 50px;
    justify-content: center ;
    
}
.outer{
    width: 80px;
    height: 80px;
    border: 1px solid grey;
    border-radius: 50%;
    padding: 8px;
    /* box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
    -6px -6px 10px -1px rgba(255,255,255,0.7); */
    position: relative;

    
}
.inner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid grey;
    /* box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2), */
   /* inset -4px -4px 6px -1px rgba(255,255,255,0.7); */
   

}
#number{
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
        font-size: 15px;

    
    

}
circle{
    fill: none;
    stroke: ${({ theme }) => theme.colors.yellow};
    stroke-width: 10px;
    stroke-dasharray: 219;
    stroke-dashoffset: 219 ;
    animation: anim 1s linear forwards;
}
svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
}

.p1{  animation: anim1 1s linear forwards}
.p2{  animation: anim2 1s linear forwards}
.p3{  animation: anim3 1s linear forwards}
.p4{  animation: anim4 1s linear forwards}
.p5{  animation: anim5 1s linear forwards}
.p6{  animation: anim6 1s linear forwards}
.p7{  animation: anim7 1s linear forwards}



@keyframes anim1{
    100%{
        stroke-dashoffset: 44 ;
    }
}
@keyframes anim2{
    100%{
        stroke-dashoffset: 66 ;
    }
}
@keyframes anim3{
    100%{
        stroke-dashoffset: 110 ;
    }
}
@keyframes anim4{
    100%{
        stroke-dashoffset: 44 ;
    }
}
@keyframes anim5{
    100%{
        stroke-dashoffset: 44 ;
    }
}
@keyframes anim6{
    100%{
        stroke-dashoffset: 66 ;
    }
}
@keyframes anim7{
    100%{
        stroke-dashoffset: 130 ;
    }
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
  

export default About;
