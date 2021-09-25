import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const SoftwareWrapper = styled.div`
  .heading {
    text-align: center;
  }
`

const SoftwareDevelopment = () => {
  return (
    <SoftwareWrapper>
      <Layout>
        <Seo title="Software-development" />
        <h3 className="heading">
          Sharing Latest Updates On My Journey To A Better Software Developer
        </h3>
      </Layout>
    </SoftwareWrapper>
  )
}

export default SoftwareDevelopment
