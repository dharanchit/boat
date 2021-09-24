import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Grid } from "@mui/material"

const HeaderWrapper = styled.div``

const Header = () => (
  <HeaderWrapper>
    <Grid container>
      <Grid item xs={12}>
        Header
      </Grid>
    </Grid>
  </HeaderWrapper>
)

export default Header
