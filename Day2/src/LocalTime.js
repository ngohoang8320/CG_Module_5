import React from 'react';
import ReactDOM from 'react-dom';

function LocalTime() {

    const container = document.querySelector('#root');
    const ROOT = ReactDOM.createRoot(container);

    setInterval(() => {
        ROOT.render(
            <div>
                <h1>Time:</h1>
                <p>This is: {new Date().toLocaleTimeString('vietnam')}</p>
            </div>
        );
    }, 1000)
}

export default LocalTime;