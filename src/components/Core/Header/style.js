import styled from "styled-components"

const SiteHeader = styled.div.attrs({
  className: "site-header",
})`
  position: absolute;
  width: 100%;
  z-index: 99;
  top: 0;
  @media(max-width:992px){
    padding-top:13px;
    padding-bottom:13px;
  }
  .hamburgur {
    order: 3;
    border-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.77);
    .navbar-toggler-icon {
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      &:before {
        content: "\f0c9";
        font-family: "Font Awesome 5 Free";
        font-weight: bold;
        color: inherit;
      }
    }
    &:focus{
      outline:none;
      box-shadow: none;
    }
  }
  .site-brand {
    order: 1;
  }
  .header-btns {
    order: 2;
  }
  .site-menu-main {
    .dropdown-menu {
      z-index: 500;
      background-color: #fff;
      padding: 20px 0px;
      transition: opacity 0.5s ease, top 0.5s ease, margin-top 0.5s ease,
        background-color 0.5s ease;
      margin-top: 25px;
      @media (min-width: 992px) {
        box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
        position: absolute;
        opacity: 0;
        visibility: hidden;
        min-width: 227px;
        max-width: 227px;
        top: 115%;
        margin-top: 0;
        visibility: visible;
        opacity: 1;
        z-index: 99;
        pointer-events: visible;
        border-radius: 0px 0px 15px 15px;
        border-top: 3px solid #fbb040;
        display: block !important;
        visibility: hidden;
        opacity: 0;
        z-index: -99;
        font-weight: 400;
        transition:top .4s linear;
      }
      @media (max-width: 992px) {
        border-color: transparent;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    .main-nav-item {
      > .nav-link {
        color: #000;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        /* letter-spacing: -0.6px; */
        position: relative;
        @media (max-width: 992px) {
          border-bottom: 1px solid #ececec;
          padding-left: 20px;
          padding-right: 20px;
        }
        @media (min-width: 992px) {
          color: #fff;
          padding-top: 12px !important;
          padding-bottom: 15px !important;
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
      }
      // &.show,{
      &:hover {
        & > .dropdown-menu {
          @media (min-width: 992px) {
            top: 98%;
            margin-top: 0;
            visibility: visible;
            opacity: 1;
            z-index: 99;
            pointer-events: visible;
            border-radius: 0px 0px 15px 15px;
            border-top: 3px solid #fbb040;
          }
        }
      }
    }
    .drop-menu-item {
      font-size: 16px;
      font-weight: 400;
      padding-top: 0px;
      padding-bottom: 0px;
      @media (min-width: 992px) {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
      
        >a{
          &:hover{
            color:#ff5722 !important;
          }
        }
      }
      > a,
      .dropdown-toggle {
        color: #000 !important;
        text-decoration: none;
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: inherit;
        @media (min-width: 992px) {
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          padding-bottom: 0;
        }
        @media (max-width: 992px) {
          padding-left: 30px;
          padding-right: 20px;
          border-bottom: 1px solid #ececec;
        }
      }
      &:hover{
        a{
          color:red;
        }
      }
    }
    .innerDropdown {
      & > .dropdown-menu {
        @media (min-width: 992px) {
          transform: translate(-107%);
          pointer-events: none;
        }
      }
      & > .dropdown-toggle {
        display: flex !important;
        justify-content: space-between;
        @media (min-width:992px) {
          &:after {
            top: 0px;
            transform: rotate(-90deg);
            margin-left: 0px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
      }
      //&.show, {
      &:hover {
        & > .dropdown-menu {
          @media (min-width: 992px) {
            top: 0%;
            margin-top: 0;
            visibility: visible;
            opacity: 1;
            z-index: 99;
            pointer-events: visible;
            border-radius: 0px 0px 15px 15px;
            border-top: 3px solid #fbb040;
            transition:top .4s linear;
          }
        }
        & > .dropdown-toggle {
          @media (min-width:992px) {
            &:after {
              transform: rotate(0deg);
            }
          }
        }
      }
    }

    .megadropdown {
      transition: 0.4s top;
      @media (min-width: 992px) {
        position: static;
      }
      > .dropdown-menu {
        min-width: 100%;
        max-width: 100%;
        transform: translate(0);
        @media (min-width: 992px) {
          padding: 30px;
          pointer-events: none;
          transition:top .4s linear;
          left:0;
        }
        .row {
          @media (max-width: 992px) {
            display: block;
            padding: 0 0;
            margin-left: 0;
            margin-right: 0;
            .col {
              padding-left: 0;
              padding-right: 0;
            }
          }
        }
      }
      // &.show, {
      &:hover {
        .dropdown-menu {
          @media (min-width: 992px) {
            top: 90%;
            pointer-events: visible;
          }
        }
      }
      .mega-dropdown-menu-block {
        @media (min-width: 992px) {
          justify-content: space-between;
        }
      }
      .megamenu-column-title {
        display: none;
        @media (min-width: 992px) {
          opacity: 0.5;
          color: #0d152e;
          font-size: 15px;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 1.1px;
          line-height: normal;
          text-align: left;
          text-transform: uppercase;
          margin-bottom: 25px;
          display: block;
        }
      }
      .megamenu-nav-item {
        font-size: 16px;
        font-weight: 400;
        transition: 0.4s;
        padding-top: 14px;
        padding-bottom: 14px;
        display: block;
        @media (max-width: 992px) {
          display: block;
          padding-top: 0px;
          padding-bottom: 0px;
        }
        > a {
          color: #000;
          text-decoration: none;
          @media (max-width: 992px) {
            display: block;
            border-bottom: 1px solid #ececec;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
          }
          &:hover {
            color:#ff5722 !important;
          }
        }
        @media (min-width: 992px) {
          padding-left: 0px;
          padding-right: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
  .navbar-collapse {
    @media (max-width: 992px) {
      position: fixed;
      display: block !important;
      position: fixed;
      top: 0;
      background: #fff;
      left: -100%;
      height: 100%;
      transition: left 0.4s;
      z-index: 999999;
      box-shadow: 0 0 87px 0 rgba(0, 0, 0, 0.09);
      padding-top: 45px;
      padding-bottom: 50px;
      width: 250px;
      overflow-y: auto;
      @media (min-width: 380px) {
        width: 300px;
      }
      @media (min-width: 575px) {
        width: 350px;
      }
      &.show {
        left: 0%;
      }
      &.collapsing {
        transition: height 0s;
        height: 100%;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #416ff4;
        outline: 1px solid slategrey;
      }
      .offcanvas-close {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: right;
        border-bottom: 1px solid #ececec;
        padding: 0;
        span {
          border-left: 1px solid #ececec;
          background: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          padding: 20px;
          &:before {
            content: "\f00d";
            color: #000;
            font-family: "Font Awesome 5 free";
            font-weight: 700;
            font-size: 14px;
          }
        }
      }
    }
  }
  .dropdown-toggle {
    @media (max-width: 992px) {
      display: flex !important;
      justify-content: space-between;
      min-width: 50px;
      display: block;
      width: 100%;
    }
    &[aria-expanded="true"]:after {
      @media (max-width: 992px) {
        content: "\f068";
      }
    }
    &:after {
      border: none;
      content: "\f078";
      font-family: "Font Awesome 5 free";
      font-weight: 700;
      font-size: 11px;
      position: relative;
      top: 1px;
      margin-left: 9px;
      transition: 0.4s;
      transform-origin: center;
      transform-box: view-box;
      @media (max-width: 992px) {
        margin-right: 9px;
        content: "\f067";
      }
    }
  }
  .main-nav-item.show {
    > .dropdown-toggle:after {
      @media (min-width: 992px) {
        transform: rotate(-180deg);
      }
    }
  }
  .site-navbar {
    @media (min-width: 992px) {
      position: static;
    }
  }
  .container-fluid {
    .site-navbar {
      @media (min-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
      }

      @media (min-width: 992px) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  .show {
    & > .dropdown-toggle {
      &:after {
        @media (max-width: 992px) {
          content: "\f068";
        }
      }
    }
    & > .dropdown-menu {
      @media (max-width: 992px) {
        display: block;
        margin-top: 0 !important;
      }
    }
  }

  &.site-header--sticky {
    &:not(.mobile-sticky-enable) {
      position: absolute !important;
      top: 0;
      right: 0;
      width: 100%;
      z-index: 999;

      @media (min-width: 992px) {
        position: fixed !important;
        transition: 0.4s;

        &.scrolling {
          transform: translateY(-100%);
          transition: 0.4s;
          .site-navbar {
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        &.reveal-header {
          transform: translateY(0%);
          box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
          z-index: 1000;
        }
      }
      &.reveal-header{
        @media (min-width:992px){
          padding-top: 10px;
          z-index: 999;
          padding-bottom: 10px;
        }
      }
    }

    &.mobile-sticky-enable {
      top: 0;
      right: 0;
      width: 100%;
      z-index: 999;
      position: fixed !important;
      transition: 0.4s;
      &.scrolling {
        transform: translateY(-100%);
        transition: 0.4s;
      }

      &.reveal-header {
        transform: translateY(0%);
        box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
        z-index: 9999;
      }
    }
  }
  /* Light Header */
  &.light-header {
    .main-nav-item > .nav-link {
      color: #000 !important;
    }
    &.reveal-header {
      background: #fff;
    }
    .hamburgur {
      color: #000;
      border-color: #000;
    }
  }
  /* Dark Header */
  &.dark-header {
    &.reveal-header {
        background: #165c66;
    }
    &-2 {
      &.reveal-header {
      background: #416ff4;
      }
    }
  }

  &.site-header--menu-center {
    .navbar-collapse {
      @media (min-width:992px) {
        justify-content: center;
        margin-right: calc(-214px / 2);
      }
    }
  }
  &.site-header--menu-end {
    .navbar-collapse {
      justify-content: flex-end;
    }
  }
  &.site-header--menu-start {
    .container-fluid{
      .navbar-collapse {
        @media (min-width:992px){
          padding-left: 15px;
          margin-left: 3.125rem !important;
        }
      }
    }
  }

  /* Header Buttons */




&.site-header--menu-sep{
    @media (min-width: 992px){
      .navbar-collapse {
          margin-right: 20px;
          padding-right: 10px;
          position:relative;
          &:before {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 26px;
            border-right: 2px solid rgba(130, 130, 136, 0.3);
          } 
      }
    }
  }
  &.site-header--button-sep{
      .header-btn-block{
        display:none;
      @media (min-width:480px){
        display:block;
        margin-left:auto;
        margin-right:20px;
      }
      @media (min-width:992px){
        margin-right:0px;
        margin-left:20px;
        &:before{
          content: "";
          position: absolute;
          left: -18px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 26px;
          border-right: 2px solid rgba(130, 130, 136, 0.3);
        }
      }
    }
  }


&.site-header--with-border{
  .navbar-brand{
    @media (min-width:992px){
      position:relative;
      &:before{
        content: "";
        position: absolute;
        right: -21px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 26px;
        border-left: 2px solid rgba(38, 39, 41, 0.3);
        opacity:0;
      } 
    }
  }
}
&.site-header--services{
  .navbar-collapse{
    @media (min-width:992px){
      margin-right: 55px;
    }
  }
}
  
/* .site-header--service{
  @media (min-width:992px){
    background: #19191b;
  }
} */
  /* &.site-header--startup{
    positon
  } */
`
export default SiteHeader
