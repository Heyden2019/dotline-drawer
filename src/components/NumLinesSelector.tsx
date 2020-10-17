import React from 'react'

const NumLinesSelector = ({selectedNumLines, setSelectedNumLines}) => {
    return (
        <div>
            <p style={{color: 'white', marginBottom: 0}}>Joining with previous (___) dots:</p>
            {[0,1,2,3,4,5].map(btnNum => (
                <button key={btnNum}
                        className={`num-lines-selector ${btnNum === selectedNumLines ? "active" : ""}`}
                        onClick={() => setSelectedNumLines(btnNum)}>
                    {btnNum}
                </button>
            ))}
        </div>
    )
}

export default NumLinesSelector
