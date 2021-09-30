import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion, usePresence, AnimatePresence } from 'framer-motion'
import { Images } from '~data'
import PortfolioCard from './Components/Card'
import Portfolio from "./style"


const portfolioData = [
    {
        image:Images.DigiTalagency.portFolioImg1,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"1",
        tagi: ["all","development"]
    },
    {
        image:Images.DigiTalagency.portFolioImg2,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"2",
        tagi: ["all"]
    },
    {
        image:Images.DigiTalagency.portFolioImg3,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"3",
        tagi: ["all"]
    },
    {
        image:Images.DigiTalagency.portFolioImg3,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"4",
        tagi: ["seo"],
    },
    {
        image:Images.DigiTalagency.portFolioImg3,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"5",
        tagi: ["development"],
    },
    {
        image:Images.DigiTalagency.portFolioImg3,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"6",
        tagi: ["work"],
    },
    {
        image:Images.DigiTalagency.portFolioImg1,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"7",
        tagi: ["marketing"],
    },
    {
        image:Images.DigiTalagency.portFolioImg1,
        titleSmall:"KAKTUS",
        title:"Candy Store",
        id:"7",
        tagi: ["work"],
    }
]

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

export default function PortfolioSection({...rest}){
    
  const [tag, setTag] = React.useState("all")
  const [filteredImages, setFilteredImages] = React.useState([])


  React.useEffect(() => {
    tag === "all"
      ? setFilteredImages(portfolioData)
      : setFilteredImages(portfolioData.filter(image => image.tagi.find((item) => item === tag)))
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
          <FilterButton name="work" tagActive={tag} handleSetTag={setTag}>Design</FilterButton>
          <FilterButton name="development" tagActive={tag} handleSetTag={setTag}> Development</FilterButton>
          <FilterButton name="marketing" tagActive={tag} handleSetTag={setTag}> Marketing</FilterButton>
          <FilterButton name="seo" tagActive={tag} handleSetTag={setTag}>SEO</FilterButton>
        </Portfolio.Nav>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs="12" className="col-md-12 col-xs-10">
            <Row className="justify-content-center">
            <AnimatePresence>
            {filteredImages.slice(0,3).map(
                    ({ image, titleSmall, title,tagi,id }, index) => {
                      return (
                <ItemCol className={`col-lg-4 col-md-6 col-sm-10 ${tagi.find((item) => item === tag) | tag === "all" ?  "is-animated" :""} `}  key={index + "pm-c4"}>
                    <PortfolioCard image={image} title="Agency Brand guide & Development" text="UX and UI, Design, Development" mt="25px"/>
                </ItemCol>
                )
                }
            )}
                </AnimatePresence>
            </Row>
      </Col>
    </Row>
  </Container>
</Portfolio>

)
}


const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

function ItemCol({ children, onClick, color,...rest }) {
  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: true,
    initial: 'out',
    style: {
      position: isPresent ? 'static' : 'absolute'
    },
    animate: isPresent ? 'in' : 'out',
    whileTap: 'tapped',
    variants: {
      in: { scale: 1, opacity: 1 },
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


{/* <ItemCol className={`col-lg-4 col-md-6 col-sm-10 ${tagi === tag | tag === "all" ?  "is-animated" :""} `}  key={index + "pm-c4"}> */}