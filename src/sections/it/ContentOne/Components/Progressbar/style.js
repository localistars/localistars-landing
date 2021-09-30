import styled from 'styled-components'
import { Heading, Box} from '~styled'

const Bar = styled(Box)`
position: relative;
display: inline-block;
width: 100%;
.bar-line{
    width:${props => props.percentage};
    background: ${props => props.barFillColor};
}
.bar-body{
    background: ${props => props.barLineColor};
}
`
Bar.Top = styled(Box).attrs({className:"bar-top"})`
font-size: 18px;
font-weight: 500;
font-style: normal;
letter-spacing: normal;
line-height: 25px;
display:flex;
justify-content:space-between;
align-items:center;

`
Bar.Title = styled(Heading)`
font-size: inherit;
font-weight: inherit;
letter-spacing: normal;
line-height: 1.39;
color:inherit;
margin-bottom: 14px;
`
Bar.Percent = styled(Heading)`
    margin-left:10px;
    margin-bottom: 14px;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: normal;
`
Bar.Body = styled(Box).attrs({className:"bar-body"})`
    height: 2px;
    background-color: rgba(38, 39, 41, 0.1);
    border-radius: 3px;
    position: relative;
`
Bar.Line = styled(Box).attrs({className:"bar-line"})`
    display: inline-block;
    border-radius: 15px;
    position: absolute;
    left: 0;
    top: -1.2px;
    height: 5px;

`
export default Bar;