import React from "react"
import { Navbar } from "react-bootstrap"
// import siteBrandDark from "./image/logo/logo-black.png"
// import siteBrandLight from "./image/logo/logo-white.png"
import Menu from "./Menu"
import prefix from '~lib/prefix';

const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href={`${prefix}/`}>
          {defaultLogo ? (<img src={defaultLogo} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo} alt="localistars logo" />
          ) : (
            <img src={darkLogo ? `${prefix}/image/logo/logo-black.png` : `${prefix}/image/logo/logo-white.png`} alt="localistars logo"/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu/>
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
