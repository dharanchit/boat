import * as React from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const HeaderWrapper = styled.div`
  background: #3fa3bb;
  display: flex;
  height: 40px;

  .icon-class {
    cursor: pointer;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Grid container>
      <Grid
        item
        xs={10}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      ></Grid>
      <Grid
        item
        xs={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AiFillLinkedin
          className="icon-class"
          onClick={() =>
            window.open("https://www.linkedin.com/in/anchitdhar/", "_blank")
          }
        />
      </Grid>
      <Grid
        item
        xs={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AiFillGithub
          className="icon-class"
          onClick={() => window.open("https://github.com/dharanchit", "_blank")}
        />
      </Grid>
    </Grid>
  </HeaderWrapper>
)

export default Header
