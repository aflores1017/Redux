import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Add this line

  const incrementValue = Number(incrementAmount) || 0;

  const updateBackgroundColor = () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[randomIndex]);
  };

  return (
    <div style={{ backgroundColor }}> {/* Add this line */}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(incrementValue));
            updateBackgroundColor(); // Add this line
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            dispatch(incrementAsync(incrementValue));
            updateBackgroundColor(); // Add this line
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
            updateBackgroundColor(); // Add this line
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

