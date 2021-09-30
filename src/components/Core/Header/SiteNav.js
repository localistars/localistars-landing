import React from "react"
import Image from "next/image"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/logo-black.png"
import siteBrandLight from "~image/logo/logo-white.png"
import Menu from "./Menu"
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
        <Navbar.Brand href="/">

          {defaultLogo ? (<img src={defaultLogo.src} alt="site-brand"/>) : customLogo ? (
            <img src={customLogo.src} alt="site-brand" />
          ) : (
            <img src={darkLogo? siteBrandDark.src : siteBrandLight.src} alt="site-brand"/>
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
