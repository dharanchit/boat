import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const FinanceWrapper = styled.div`
  .heading {
    text-align: center;
  }
`

const Finance = () => {
  return (
    <FinanceWrapper>
      <Layout>
        <Seo title="Finance" />
        <h3 className="heading">Everything about finance and stocks</h3>
      </Layout>
    </FinanceWrapper>
  )
}

export default Finance
