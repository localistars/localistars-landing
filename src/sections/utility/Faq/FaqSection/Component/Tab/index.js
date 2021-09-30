import React from 'react'
import Tab from './style'
export default function FaqTab({children, ...rest}){
return(
<Tab>
<Tab.List>
  {children}
</Tab.List>
</Tab>
)
}