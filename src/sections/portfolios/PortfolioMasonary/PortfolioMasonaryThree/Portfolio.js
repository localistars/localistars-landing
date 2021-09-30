import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Masonry from "react-masonry-css"
import { motion, usePresence, AnimatePresence } from 'framer-motion'
import PortfolioCard from './Components/Card'
import Portfolio from "./style"
import portfolioData from "./data"

 const FilterButton = ({ name, handleSetTag, tagActive, children }) => {
  return (
    <Portfolio.NavItem
      className={`btn-reset ${tagActive === name ? "active" : ""}`}
      onClick={() => handleSetTag(name)}
    >
      {children}
    </Portfolio.NavItem>
  )
}
const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  992: 2,
  768: 1,
  576: 1,
}
  export default function PortfolioSection({masonryItems=breakpointColumnsObj,gutters,containerFluid,...rest}){
      

    const [tag, setTag] = React.useState("all")
    const [filteredImages, setFilteredImages] = React.useState([])
  
  
    React.useEffect(() => {
      tag === "all"
        ? setFilteredImages(portfolioData)
        : setFilteredImages(portfolioData.filter(image => image.tagName.find((item) => item === tag)))
    }, [tag])
  return(
  <Portfolio {...rest}>
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col xs="12" className="col-xl-6 col-lg-5 col-md-8 col-xs-9">
          <Portfolio.Box mbLG="45px" mb="10px">
            <Portfolio.Subtitle as="h4" fontColor="#fd346e" mb="13px">Portfolio</Portfolio.Subtitle>
            <Portfolio.Title as="h2">Works we are proud of</Portfolio.Title>
          </Portfolio.Box>
        </Col>
        <Col xs="12" className="col-xl-6 col-lg-7 col-md-8">
          <Portfolio.Nav className="mb-5 mb-lg-0">
            <FilterButton className="is-checked" name="all" tagActive={tag} handleSetTag={setTag}>All</FilterButton>
            <FilterButton name="design" tagActive={tag} handleSetTag={setTag}>Design</FilterButton>
            <FilterButton name="development" tagActive={tag} handleSetTag={setTag}> Development</FilterButton>
            <FilterButton name="marketing" tagActive={tag} handleSetTag={setTag}> Marketing</FilterButton>
            <FilterButton name="seo" tagActive={tag} handleSetTag={setTag}>SEO</FilterButton>
          </Portfolio.Nav>
        </Col>
      </Row>
      </Container>
    <Container fluid={containerFluid}>
      <Row className="justify-content-center">
        <Col xs="12" className="col-md-12 col-xs-10">
            <AnimatePresence>
              <Portfolio.MasonryWrapper>
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={`masonry-grid ${!gutters ?"no-gutter":null}`}
                    columnClassName="masonry-grid_column"
                    >
                    {filteredImages.map(
                          ({ image, titleSmall, title,tagName,id }, index) => {
                            return (
                          <ItemCol key={index + "pm-c4"}>
                            <PortfolioCard image={image} title="Agency Brand guide & Development" text="UX and UI, Design, Development"/>
                          </ItemCol>
                      )
                      }
                    )}
                  </Masonry>
              </Portfolio.MasonryWrapper>
            </AnimatePresence>
        </Col>
      </Row>
      <Portfolio.Box className="text-center" mt="30px">
        <Portfolio.Button className="btn-primary">
          Load More
        </Portfolio.Button>
      </Portfolio.Box>
    </Container>
  </Portfolio>
  
  )
  }
  
  
  const transition = { type: 'spring', stiffness:300, damping: 50, mass: 1 }
  
  function ItemCol({ children, onClick, color,...rest }) {
    const [isPresent, safeToRemove] = usePresence()
  
    const animations = {
      layout: true,
      initial: 'out',
      style: {
        position: isPresent ? 'static' : 'absolute',
        originX:0.5

      },
      animate: isPresent ? 'in' : 'out',
      whileTap: 'tapped',
      variants: {
        in: { scale: 1, opacity: 1,  },
        out: { scale: 0, opacity: 0, zIndex: -1 },
        // tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
      },
      onAnimationComplete: () => !isPresent && safeToRemove(),
      transition
    }
  
    return (
      <motion.div {...animations} {...rest}>
        {children}
      </motion.div>
    )
  }