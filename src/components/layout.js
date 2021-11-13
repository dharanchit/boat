/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import MobileHeader from "./MobileHeader"

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;

  .blog-body{
    @media(min-width: 992px){
      margin-top: 100px;
    }
    padding: 20px 50px;
    overflow-y: auto;
  }
`

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <BodyWrapper>
          <Header />
          <MobileHeader />
          <main className="blog-body">{children}</main>
        </BodyWrapper>
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
