import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import jsonData from "../material/reads/data.json"

const FinanceWrapper = styled.div`
  .heading {
    text-align: center;
  }

  .margin-top {
    margin-top: 20px;
  }
`

const Reads = () => {
  return (
    <FinanceWrapper>
      <Layout>
        <Seo title="Finance" />
        <h3 className="heading">Notes from reading</h3>
        <ul>
          {jsonData.map(data => (
            <li>
              <div className="margin-top">
                <p>{data.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </FinanceWrapper>
  )
}

export default Reads
