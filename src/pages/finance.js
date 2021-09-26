import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import jsonData from "../material/finance/data.json"

const FinanceWrapper = styled.div`
  .heading {
    text-align: center;
  }

  .margin-top {
    margin-top: 20px;
  }
`

const Finance = () => {
  return (
    <FinanceWrapper>
      <Layout>
        <Seo title="Finance" />
        <h3 className="heading">Everything about finance and stocks</h3>
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
    </FinanceWrapper>
  )
}

export default Finance
