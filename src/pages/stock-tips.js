import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import jsonData from "../material/stockTips/data.json"

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
        <Seo title="Stock" />
        <h3 className="heading">Stock Hints</h3>
        <ul>
          {jsonData.map(data => (
            <li>
              <div className="margin-top">
                <h3>{data["Share Name"]}</h3>
                <ul>
                  <li>{data["Current Price"]}</li>
                  <li>{data["Target Price"]}</li>
                  <li>{data["Dated"]}</li>
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
