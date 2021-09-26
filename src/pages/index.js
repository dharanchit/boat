import * as React from "react"
import { Grid } from "@mui/material"
import Layout from "../components/layout"
import Seo from "../components/seo"
import file from "../files/resume.pdf"
import { AiOutlineCloudDownload } from "react-icons/ai"
import styled from "styled-components"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const StyledWrapper = styled.div`
  .icon-class {
    padding-left: 20px;
  }

  .resume-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-class {
    padding-right: 5px;
  }
`

const IndexPage = () => {
  return (
    <StyledWrapper>
      <Layout>
        <Seo title="Home" />
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <a download href={file} className="resume-text">
              <span className="text-class">Resume</span>{" "}
              <AiOutlineCloudDownload />
            </a>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <a
              href="https://www.linkedin.com/in/anchitdhar/"
              className="resume-text"
              target="_blank"
            >
              <span className="text-class">Linked In</span>
              <AiFillLinkedin />
            </a>
          </Grid>
          <Grid item xs={12} justifyContent="center">
            <a
              href="https://github.com/dharanchit"
              className="resume-text"
              target="_blank"
            >
              <span className="text-class">Github</span>
              <AiFillGithub />
            </a>
          </Grid>
        </Grid>
      </Layout>
    </StyledWrapper>
  )
}

export default IndexPage
