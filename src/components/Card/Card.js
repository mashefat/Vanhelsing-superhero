import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import './Card.css';


const Card = () => {
    const [cards, setCard] = useState([])
    useEffect(()=>{
        fetch('./cast.JSON')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className='cards-container'>
            <div className='card-div'>
                <div className="card-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">      
                        {
                            cards.map(card => <Data 
                                key={card.role}
                                card={card}></Data>)
                        }       
                    </div>
                </div>     
            </div>
            <div className='side-cart'>
                <h2>This is side cart</h2>
            </div>
        </div>
    )
};

export default Card;