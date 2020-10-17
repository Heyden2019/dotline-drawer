import React, { useState } from 'react';
import { SketchPicker, RGBColor } from 'react-color';
import './App.css';
import { DotType } from './types';
import Canvas from './components/Canvas';
import Reset from './components/Reset';
import NumLinesSelector from './components/NumLinesSelector';

function App() {

  const [color, setColor] = useState<RGBColor>({r: 255, g: 255, b: 255, a: 1})
  const [dots, setDots] = useState<DotType[]>([])
  const [selectedNumLines, setSelectedNumLines] = useState(2)

  return (
    <div className="App">

        <Canvas dotColor={color} 
                dots={dots}
                setDots={setDots}
                selectedNumLines={selectedNumLines} />

        <div className='settings'>
          <Reset setDots={setDots} />
          <NumLinesSelector selectedNumLines={selectedNumLines}
                            setSelectedNumLines={setSelectedNumLines} />
          <SketchPicker color={color}
                        onChange={(color) => {setColor(color.rgb)} } />
        </div>

    </div>
  );
}

export default App;
