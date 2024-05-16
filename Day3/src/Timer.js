import { useEffect, useState } from 'react';

function Timer() {

    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(count)
            if (count <= 0) {
                setCount(10);
            } else {
                setCount(prevCount => prevCount - 1);
            }
        }, 500);

        // return () => {
        /* setInterval(() => {
            clearInterval(interval)
        }, 500); */
        // }

        return () => {
            clearInterval(interval);
        }

    }, [count])

    return (
        <div className="timer">
            <p>Count down from: {count}</p>
        </div>
    )

}

export default Timer;