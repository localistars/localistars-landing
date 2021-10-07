import React from 'react'
import FeatureWidget from '../FeatureWidget'
import featureSectionData from "~data/project/features"

const FeatureWidgetsBlock = ({widgetData}) => {
return(
<>
<div className="feature-area--l2-widgets">
    {featureSectionData.tabWidget1.map(({icon,iconBackground,title,text},index)=>{return(
        <FeatureWidget key={"pmftw" + index} icon={icon} iconBackground={iconBackground} title={title} text={text}/>
    )})}
</div>
</>
)
}
 
export default FeatureWidgetsBlock

