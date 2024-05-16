import React, { useState } from 'react';

/* function Count() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const change1 = () => {
        setCount1(pre => pre + 1)
    }

    const change2 = () => {
        setCount2(pre => pre + 1)
    }

    return (
        <React.Fragment>
            <div className="count1">
                <p>Count1: {count1}</p>
                <button onClick={change1}></button>
            </div>
            <div className="count2">
                <p>Count1: {count2}</p>
                <button onClick={change2}></button>
            </div>
        </React.Fragment>
    )

} */

// export default Count;


// Hàm custom hook useIncrement
function useIncrement(initialValue) {
    const [count, setCount] = useState(initialValue);

    function increase(addAmount) {
        setCount(count + addAmount);
    }

    return [count, increase];
}

// Component Counter
function Counter(props) {
    const [count, increase] = useIncrement(props.count);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increase(1)}>Increase</button>
        </div>
    );
}

// Component Counter 1
function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
            <h2>Counter 1</h2>
            <Counter count={count} increase={increase} />
        </div>
    );
}

// Component Counter 2
function Counter2() {
    const [count, increase] = useIncrement(5);

    return (
        <div>
            <h2>Counter 2</h2>
            <Counter count={count} increase={increase} />
        </div>
    );
}

export default function Count() {
    return (
        <div>
            <Counter1 />
            <Counter2 />
        </div>
    );
}