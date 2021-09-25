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
      <Link to="/boat">
        <div className="blog-link">Blog</div>
      </Link>
      {SIDEBAR_PROPS.map(item => (
        <div key={item.key}>
          <Link to={item.route}>
            <div>{item.name}</div>
          </Link>
        </div>
      ))}
    </SideBarWrapper>
  )
}

const SIDEBAR_PROPS = [
  {
    key: 1,
    name: "Finance",
    route: "/boat/finance",
  },
  {
    key: 2,
    name: "Software Development",
    route: "/boat/software-development",
  },
]

export default SideBar
