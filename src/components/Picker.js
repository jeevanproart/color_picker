import React, { useState } from 'react';
import './styles.css';

export function Picker(props) {
  const [displayColors, setDisplayColors] = useState(false);
  const [bgColor, setBgColor] = useState('pink');

  const handleClick = () => {
    setDisplayColors(true);
  };

  const handleColor = (color) => {
    setBgColor(color);
    setDisplayColors(false);
  };

  return (
    <>
    <h1 className='text-center fw-bolder center-text'>Color Picker</h1>
    <div className='container d-flex flex-column align-items-center justify-content-center'>
      
      <div
        style={{ backgroundColor: bgColor }}
        className='display m-auto'
      >
        <div className='d-flex flex-wrap justify-content-center color-bar'>
          {displayColors &&
            props.colors.map((color, index) => (
              <div
                key={index}
                className='color-box'
                style={{ backgroundColor: color }}
                onClick={() => {
                  handleColor(color);
                }}
              ></div>
            ))}
        </div>
        <div className="boxer">
        <button className='btn btn-success button green-button' onClick={handleClick}>
  <h3>Pick a Color</h3>
</button>
</div>

      </div>
    </div>
    </>
  );
}
