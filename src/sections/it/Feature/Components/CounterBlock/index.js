import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Wrapper>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">280</span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Project Launched</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">640</span>%</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Happy clients</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">+3500</span>+</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Users Comments</Counter.Text>
    </Counter.Single>
    </Counter.Wrapper>
</Counter>
)
}