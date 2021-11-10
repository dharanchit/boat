import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import jsonData from "../material/stockTips/data.json"
import { Grid } from "@mui/material" 
import BasicCard from "../components/reusables/card"

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
        <h3 className="heading">Stocks I am bullish on (Swing Trade)</h3>
          <Grid container spacing={5}>
            {jsonData.map((data) => (
              <Grid item xs={12} md={4}>
                <BasicCard data={data} />
              </Grid>
            ))}
          </Grid>
      </Layout>
    </FinanceWrapper>
  )
}

export default Finance
