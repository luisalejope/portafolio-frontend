import React, { useEffect, useState } from 'react'
import './style.css'

const CircularProgress = () => {


    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 100) {
            setTimeout(() => {
                setCounter(counter + 1)
            }, 75);
        }
    }, [counter]);

    return (
        <>
            <div className="progress-bar-circle">
                <span className="number">{counter}%</span>
                <svg height="150" width="150" className="circle">
                    <circle
                        cx="75"
                        cy="75"
                        r="65"
                    />
                </svg>
            </div>
        </>
    )
}

export default CircularProgress
