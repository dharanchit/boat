import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LeftSidebar from "./LeftSidebar"

const StyledWrapper = styled.div`

  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 9;

  .hamburger {
    outline: none;
    padding:0px 15px !important;
  }

  .mobile-header {
    padding-top: 15px;
    padding-bottom: 15px;
    @media (min-width: 1092px) {
      display: none;
    }
  }

  .toggle {
    width: 60px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    margin-bottom:0;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after,
  .hamburger-inner::before {
    width: 25px;
    height: 2px;
  }

  .logo-class{
    margin: 10px 0px;
    font-size: 24px;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }
`

const MobileHeader = () => {
  const [leftSidebar, setLeftSidebar] = React.useState(false)

  React.useEffect(() => {
    if (leftSidebar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [leftSidebar])

  return (
    <StyledWrapper>
      <div className="mobile-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 d-flex flex-column justify-content-center">
            {(
                  <div
                      onClick={() => setLeftSidebar(!leftSidebar)}
                      className={leftSidebar ? "open" : "d-block"}
                      id="menu-toggle"
                  >
                    <button
                        className={
                          leftSidebar
                              ? "hamburger hamburger--squeeze is-active justify-content-center"
                              : "hamburger hamburger--squeeze d-flex flex-direction justify-content-center"
                        }
                        type="button"
                    >
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                    </button>
                  </div>
              )}
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <Link to="/" className="logo-class">
                <span>AD NewsLetter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {leftSidebar && (
        <LeftSidebar
          setLeftSidebar={setLeftSidebar}
          leftSidebar={leftSidebar}
        />
      )}
    </StyledWrapper>
  )
}

export default MobileHeader
