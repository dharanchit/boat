import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SideBarWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  .blog-link {
    color: black;
    text-decoration: none;
    margin-bottom: 20px;
  }
`

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link to="/">
        <div className="blog-link">Blog</div>
      </Link>
      {SIDEBAR_PROPS.map(item => (
        <Link to={item.route}>
          <div>{item.name}</div>
        </Link>
      ))}
    </SideBarWrapper>
  )
}

const SIDEBAR_PROPS = [
  {
    name: "Finance",
    route: "/finance",
  },
  {
    name: "Software Development",
    route: "/software-development",
  },
]

export default SideBar
