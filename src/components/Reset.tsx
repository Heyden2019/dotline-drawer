import React from 'react'

const Reset = ({setDots}) => {
    return (
        <button onClick={() => setDots([])}>
            Reset
        </button>
    )
}

export default Reset
