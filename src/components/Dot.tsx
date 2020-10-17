import React from 'react'

const Dot = ({dot}) => {
    return (
        <circle cx={dot.x} 
                cy={dot.y} 
                className="dot" 
                fill={dot.fill} 
                fillOpacity={`${dot.fillOpacity}`}/>
    )
}

export default Dot
