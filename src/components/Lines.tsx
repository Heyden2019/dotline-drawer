import React from 'react'

const Lines = ({prevDots, dot}) => {
    return (
        <>
        {prevDots.map((prevDot, i) => (
            <line key={`${dot.x}:${dot.y}|${prevDot.x}:${prevDot.y}:${i}`}
                x1={dot.x} 
                y1={dot.y} 
                x2={prevDot.x} 
                y2={prevDot.y} 
                style={{stroke: dot.fill, strokeWidth:'2', strokeOpacity: dot.fillOpacity}} 
                className="line" />
        ))}
        </>
    )
}

export default Lines
