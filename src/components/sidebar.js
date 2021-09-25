import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SideBarWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 10px;
  background: #3fa3bb;

  .blog-link {
    color: black;
    margin-bottom: 20px;
  }

  .link-decoration {
    text-decoration: none;
  }

  .link-decoration-bar {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }

  .sidebar-items {
    padding-top: 10px;
  }
`

const SideBar = () => {
  return (
    <SideBarWrapper>
      <Link className="link-decoration" to="/boat">
        <div className="blog-link">Home</div>
      </Link>
      {SIDEBAR_PROPS.map(item => (
        <div className="sidebar-items" key={item.key}>
          <Link className="link-decoration-bar" to={item.route}>
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
    // route: "/finance",
  },
  {
    key: 2,
    name: "Software Development",
    route: "/boat/software-development",
    // route: "/software-development",
  },
]

export default SideBar
