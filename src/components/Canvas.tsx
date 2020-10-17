import React, { useRef } from 'react'
import Dot from './Dot'
import Lines from './Lines'


const Canvas = ({dotColor, dots, setDots, selectedNumLines}) => {

  const svg = useRef<any>()

  const onSvgClick = (e) => {
    e.persist()
    const {top, left} = svg.current.getBoundingClientRect()
    setDots((prev) => [
        ...prev,
        {
            x: e.clientX - left,
            y: e.clientY - top,
            fill: `rgb(${dotColor.r}, ${dotColor.g}, ${dotColor.b})`,
            fillOpacity: dotColor.a || 0
        }
    ])
  }

    return (
        <svg width="400px" height="400px" viewBox="0 0 400 400" onClick={onSvgClick} ref={svg}>
          {dots.map((dot, i, dots) => {
            const from = Math.max(0, i - selectedNumLines)
            const to = Math.min(Math.min(from + selectedNumLines, i), dots.length - 1)
            const prevDots = dots.slice(from, to)
            return (
                <g key={`${dot.x}:${dot.y}:${i}`}>
                    <Lines dot={dot} prevDots={prevDots} />
                    <Dot dot={dot} />
                </g>
              )
          })}
        </svg>
    )
}

export default Canvas
