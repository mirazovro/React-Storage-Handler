import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../utilities/Calculate';

const Cosmetics = () => {
    const [Cosmetics, setCosmetics] = useState([])
    useEffect(
        () => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));  
        },[])
    
    return (
        <div>
            <h1>This is my cosmetics</h1>
            {
                Cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;