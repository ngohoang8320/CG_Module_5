import React, { useState } from 'react';

let carList = ["a", "b", "c"];
let colorList = ["red", "blue", "green"];

function Car() {
    const [selectedCar, setSelectedCar] = useState({ car: carList[0], color: colorList[0] });

    const handleCarChange = (event) => {
        const selectedCarValue = event.target.value;
        setSelectedCar(previousState => {
            return { ...previousState, car: selectedCarValue };
        });
    };

    const handleColorChange = (event) => {
        const selectedColorValue = event.target.value;
        setSelectedCar(previousState => {
            return { ...previousState, color: selectedColorValue };
        });
    };

    return (
        <div>
            <h1>You selected a {selectedCar.color} - {selectedCar.car}</h1>

            <select value={selectedCar.car} onChange={handleCarChange}>
                {carList.map((car, index) => (
                    <option key={index} value={car}>{car}</option>
                ))}
            </select>

            <select value={selectedCar.color} onChange={handleColorChange}>
                {colorList.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                ))}
            </select>
        </div>
    );
}

export default Car;

