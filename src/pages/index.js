import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import file from "../files/resume.pdf"
import { AiOutlineCloudDownload } from "react-icons/ai"
import styled from "styled-components"

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
        <a download href={file} className="resume-text">
          <span className="text-class">Resume</span> <AiOutlineCloudDownload />
        </a>
      </Layout>
    </StyledWrapper>
  )
}

export default IndexPage
