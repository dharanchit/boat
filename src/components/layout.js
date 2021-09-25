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
import SideBar from "./sidebar"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
`

const SideWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
`

const BodyWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

const FooterWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: end;
  padding-right: 20px;
`

const Layout = ({ children }) => {
  const [selectedItem, setSelectedItem] = React.useState("")
  return (
    <>
      <MainWrapper>
        <SideWrapper>
          <SideBar />
        </SideWrapper>
        <BodyWrapper>
          <Header />
          <main>{children}</main>
        </BodyWrapper>
      </MainWrapper>
      <FooterWrapper>
        <p>Last updated on: {new Date().toDateString()}</p>
      </FooterWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
