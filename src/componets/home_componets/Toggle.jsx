import { useState } from 'react';
import './Toggle.css';
 // Dine-in/Takeaway
export function Toggle() {
  const [isDineIn, setIsDineIn] = useState(true);

  const handleToggle = () => {
    setIsDineIn(!isDineIn);
  };

  return (
    <div className="toggle-container">
      <span className={`label ${!isDineIn ? 'active' : 'inactive'}`}>DELIVERY</span>
      <div
        className={`switch ${isDineIn ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <div className="slider"></div>
      </div>
      <span className={`label ${isDineIn ? 'active' : 'inactive'}`}>DINE-IN/TAKEAWAY</span>
    </div>
  );
}


