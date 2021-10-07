import React from "react"
import Card  from "./style"

export default function PricingCard({backgroundColor, cardTitle, yearlyPackage,amount, ...rest}) {
  return (
    <Card backgroundColor="#fff" {...rest}>
        <Card.Top backgroundColor={backgroundColor}>
            <Card.Title as="h3">{cardTitle}</Card.Title>
            <Card.Text>{yearlyPackage ?"Yearly package":"Monthly package" }</Card.Text>
            <Card.Price>
            <Card.PriceText alignSelf="flex-start">$</Card.PriceText>
            <Card.Amount>{amount}</Card.Amount>
            <Card.PriceTextTwo>/ Month</Card.PriceTextTwo>
            </Card.Price>
        </Card.Top>
        <Card.List pt="40px">
            <Card.ListItem iconColor={backgroundColor}>Unlimited updates &amp; projects</Card.ListItem>
            <Card.ListItem iconColor={backgroundColor}>Custom permissions</Card.ListItem>
            <Card.ListItem iconColor={backgroundColor}>Custom instructors</Card.ListItem>
            <Card.ListItem iconColor={backgroundColor}>Custom designs &amp; features</Card.ListItem>
        </Card.List>
        <Card.Box>
            <Card.Button textColor="#fff" hoverTextColor="#fff" backgroundColor={backgroundColor}  hoverBackgroundColor={backgroundColor} rounded={true} sizeX="180px" sizeY="56px" rounded="true">Get Started</Card.Button>
        </Card.Box>
    </Card>
    
  )
}
