import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import jsonData from "../material/development/data.json"


const SoftwareWrapper = styled.div`
  .heading {
    text-align: center;
  }

  .margin-top {
    margin-top: 20px;
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
        <ul>
          {jsonData.map(data => (
            <li>
              <div className="margin-top">
                <h3>{data.title}</h3>
                <ul>
                  <li>{data.description}</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </SoftwareWrapper>
  )
}

export default SoftwareDevelopment
