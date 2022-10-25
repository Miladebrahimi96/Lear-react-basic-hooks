import React, { useRef, useState } from 'react';
import styles from './Counter.module.css'

const Counter = () => {

    const [number, setNumber] = useState(0)

    const name = useRef(null)

    const increseHandler = () => {
        setNumber(prevNum => prevNum + 1)
    }

    const decreaseHandler = () => {
        setNumber(prevNum => prevNum - 1)
    }

    const resetHandler = () => {
        setNumber(0)
        console.log(name)
    }

    return (
        <div className={styles.container}>
            <p>{number}</p>
            <button onClick={increseHandler}>Increase</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={decreaseHandler}>Decrease</button>
            <p ref={name}>milad</p>
        </div>
    );
};

export default Counter;