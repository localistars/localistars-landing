import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { menuItems } from "../../../data/menudata";
import Link from "../Link";


const isObject = function (a) {
  return !!a && a.constructor === Object
}
const Menu = ({...rest}) => {

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav" {...rest}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-lg-none offcanvas-close"/>
            <Nav className="mr-auto site-menu-main">
              {menuItems.map(
                (
                  {
                    label,
                    isExternal = false,
                    name,
                    items,
                    megamenu,
                    col,
                    ...rest
                  },
                  index
                ) => {
                  const hasSubItems = Array.isArray(items)
                  const hasMegaMenu = isObject(items)

                  return (
                    <React.Fragment key={name + index}>
                      {hasMegaMenu && (
                        <NavDropdown
                          title={label}
                          id={name + index}
                          renderMenuOnMount={true}
                          className={`main-nav-item megadropdown `}
                          
                        >
                          <Container>
                          <Row>
                            {items.image && (
                              <Col lg={items.image.col} className="d-none d-lg-block">
                                <img src={items.image.url} alt="menu" className="w-100"/>
                              </Col>
                            )}
                            {col > 0 && (
                              <>
                                <Col
                                  lg={col}
                                  className="mega-dropdown-menu-block row"
                                >
                                  {items.col_1 && (
                                    <Col>
                                      {items.col_1.title && <span className="megamenu-column-title">{items.col_1.title}</span>}
                                      {items.col_1.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" 
                                          key={index + "c1"}>
                                            <Link
                                              to={`/${item.name}`}
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                  {items.col_2 && (
                                    <Col>
                                    {items.col_2.title && <span className="megamenu-column-title">{items.col_2.title}</span>}
                                      {items.col_2.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" 
                                          key={index + "c2"}>
                                            <Link
                                              to={`/${item.name}`}
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                  {items.col_3 && (
                                    <Col>
                                    {items.col_3.title && <span className="megamenu-column-title">{items.col_3.title}</span>}
                                      {items.col_3.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" key={index + "c4"}>
                                            <Link
                                              to={`/${item.name}`}
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                  {items.col_4 && (
                                    <Col>
                                    {items.col_4.title && <span className="megamenu-column-title">{items.col_4.title}</span>}
                                      {items.col_4.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" key={index + "c5"}>
                                            <Link
                                              to={`/${item.name}`}
                                              
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                  {items.col_5 && (
                                    <Col>
                                    {items.col_5.title && <span className="megamenu-column-title">{items.col_5.title}</span>}
                                      {items.col_5.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" key={index + "c6"}>
                                            <Link
                                              to={`/${item.name}`}
                                              
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                  {items.col_6 && (
                                    <Col>
                                    {items.col_6.title && <span className="megamenu-column-title">{items.col_1.title}</span>}
                                      {items.col_6.items.map((item, index) => {
                                        return (
                                          <Nav.Item className="megamenu-nav-item" key={index + "c7"}>
                                            <Link
                                              to={`/${item.name}`}
                                              
                                            >
                                              {item.label}
                                            </Link>
                                          </Nav.Item>
                                        )
                                      })}
                                    </Col>
                                  )}
                                </Col>
                              </>
                            )}
                          </Row>
                          </Container>
                        </NavDropdown>
                      )}
                      {hasSubItems && (
                        <NavDropdown
                          title={label}
                          id={name + index}
                          className="main-dropdown main-nav-item"
                          renderMenuOnMount={true}
                          {...rest}
                        >
                          {items.map((subItem, indexSub) => {
                            const hasInnerSubItems = Array.isArray(
                              subItem.items
                            )
                            return (
                              <React.Fragment key={subItem.name + indexSub}>
                                {hasInnerSubItems ? (
                                  <NavDropdown
                                    title={subItem.label}
                                    id={subItem.name + indexSub}
                                    renderMenuOnMount={true}
                                    className="drop-menu-item innerDropdown"
                                   
                                  >
                                    {subItem.items.map(
                                      (itemInner, indexInnerMost) => (
                                        <Nav.Item
                                          className="drop-menu-item"
                                          key={itemInner.name + indexInnerMost}
                                        >
                                          {itemInner.isExternal ? (
                                            <NavDropdown.Item
                                              href={`${itemInner.name}`}
                                              target="_blank"
                                            >
                                              {itemInner.label}
                                            </NavDropdown.Item>
                                          ) : (
                                            <Link to={`/${itemInner.name}`}>
                                              {itemInner.label}
                                            </Link>
                                          )}
                                        </Nav.Item>
                                      )
                                    )}
                                  </NavDropdown>
                                ) : (
                                  <>
                                    {subItem.isExternal ? (
                                      <Nav.Item className="drop-menu-item">
                                        <NavDropdown.Item
                                          href={`${subItem.name}`}
                                          target="_blank"
                                        >
                                          {subItem.label}
                                        </NavDropdown.Item>
                                      </Nav.Item>
                                    ) : (
                                      <Nav.Item className="drop-menu-item">
                                        <Link to={`/${subItem.name}`}>
                                          {subItem.label}
                                        </Link>
                                      </Nav.Item>
                                    )}
                                  </>
                                )}
                              </React.Fragment>
                            )
                          })}
                        </NavDropdown>
                      )}

                      {(!hasSubItems && !hasMegaMenu) && (
                        <>
                          {isExternal ? (
                            <Nav.Item className="main-nav-item">
                              <Nav.Link
                                className="nav-link"
                                href={`${name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {label}
                              </Nav.Link>
                            </Nav.Item>
                          ) : (
                            <Nav.Item className="main-nav-item">
                              <Link
                                className="nav-link"
                                to={`/${name}`}
                                role="button"
                                aria-expanded="false"
                              >
                                {label}
                              </Link>
                            </Nav.Item>
                          )}
                        </>
                      ) }
                    </React.Fragment>
                  )
                }
              )}
            </Nav>
          </Navbar.Collapse>
          </>
  );
};
export default Menu;
