import * as React from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 1;
  -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1);

  .logo-class{
    cursor: pointer;
    margin: 0 10px;
    font-size: 24px;
    font-weight: 500;
  }

  .sub-section-div{
    display: flex;
    align-items: center;
  }

  .sub-section{
    cursor: pointer;
    margin: 0 10px;
    &:hover{
      font-weight: 600;
    }
  }

  .link-decoration {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 1091px) {
    display: none;
    height: 0px;
  }
`

const Header = () => {
  return(
    <HeaderWrapper>
      <Grid container xs={4} md={12} className="header-mobile-desktop-visibility">
        <div>
          <Link className="link-decoration" to="/">
            <span className="logo-class">AD NewsLetter</span>
          </Link>
        </div>
        <div className="sub-section-div">
          <Link className="link-decoration" to="/finance">
            <span className="sub-section">Finance</span>
          </Link>
        </div>
        <div className="sub-section-div">
          <Link className="link-decoration" to="/stock-tips">
            <span className="sub-section">Stock Tips</span>
          </Link>
        </div>
        <div className="sub-section-div">
          <Link className="link-decoration" to="/software-development">
            <span className="sub-section">Development</span>
          </Link>
        </div>
      </Grid>
    </HeaderWrapper>
  );
}

export default Header
