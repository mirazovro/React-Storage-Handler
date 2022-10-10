import React from 'react';
import {addTodb,  removeFormDb } from '../utilities/fakedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const { name, id, price } = props.cosmetic;
    const addTocart=(id)=>{
        addTodb(id);
    }
    const addToCartWithParam = () => {
        addTocart(id);
    }

    const removeFromCart = id=>{
        removeFormDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <p>id:{id}</p>
            <p>Only for:{price}</p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addTocart(id)}>Add to cart:shortcut</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;