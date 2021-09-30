import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">53</span>K</Counter.Title>
        <Counter.Text>Layout Done</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">10</span>K</Counter.Title>
        <Counter.Text>Projects Done</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">120</span></Counter.Title>
        <Counter.Text>Get Awards</Counter.Text>
    </Counter.Single>
</Counter>

)
}