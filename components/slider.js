// Slider.js
import React from 'react';
import styles from './css/slider.module.css'; // This assumes you have a corresponding CSS file for styles

const Slider = ({ min, max, value, onSliderChange }) => {
  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onSliderChange}
        className={styles.slider}
      />
      <p>Selected Value: {value}</p>
    </div>
  );
};

export default Slider;
