import React from 'react';
import { multiply } from '../utilities/Calculate';

const Shoes = () => {
    const num1 = 55;
    const num2 = 45;
    const Total = multiply(num1,num2)
    return (
        <div>
            <h3>This is my shoes</h3>
            <h2>multiply {Total}</h2>
        </div>
    );
};

export default Shoes;