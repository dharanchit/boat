import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const StyledWrapper = styled.div`
  height: 100%;
  .left-sidebar {
    left: 0;
    overflow-y: none;
    height: 100vh;

    @media (max-width: 450px) {
      top: 85px;
    }

    @media (min-width: 450px) and (max-width: 550px) {
      top: 90px;
    }

    @media (min-width: 550px) and (max-width: 599px) {
      top: 100px;
    }

    @media (min-width: 600px) and (max-width: 991px) {
      top: 105px;
    }
  }

  .header-link-divider {
    border-bottom: 1px solid "#979797";
    max-width: 250px;
    margin-left: 50px;
  }

  .sidebar-internal-links,
  .sidebar-external-links {
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 50px;
    text-decoration: none;
  }

  .sm-black {
    width: 35px;
    height: 35px;
  }

  .sm-all-icons {
    margin-left: 25px;
  }

  .active {
    border-bottom: 2px solid #464fd0;
  }
`

const SidebarLeft = [
  {
    topLinks: [
      { navLink: "Finance", href: "/finance", color: "black", isAnchor: true },
      {
        navLink: "Stock Tips",
        href: "/stock-tips",
        color: "black",
        isAnchor: true,
      },
      {
        navLink: "Development",
        href: "/software-development",
        color: "black",
        isAnchor: true,
      },
      { navLink: "Reads", href: "/reads", color: "black", isAnchor: true },
    ],
  },
]

const LeftSidebar = ({ setLeftSidebar, leftSidebar }) => {
  return (
    <StyledWrapper>
      <nav className="container-fluid left-sidebar sidebar">
        <div className="row px-4 mt-3">
          {SidebarLeft[0].topLinks.map(link => (
            <div className="col-12 last-child-donate">
              <AnchorLink
                className="sidebar-internal-links"
                to={link.href}
                onAnchorLinkClick={() => setLeftSidebar(!leftSidebar)}
              >
                <p style={{ color: link.color }}>{link.navLink}</p>
              </AnchorLink>
            </div>
          ))}
        </div>
      </nav>
    </StyledWrapper>
  )
}

export default LeftSidebar
