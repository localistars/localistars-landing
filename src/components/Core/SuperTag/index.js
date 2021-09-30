import React from 'react'

const SuperTag = ({value,...rest})=>{
    return(
        <span dangerouslySetInnerHTML={{__html: value}} {...rest}/>
    )
}

export default SuperTag;