import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Data from '../Data/Data';
import './Card.css';



const Card = () => {
    const [cards, setCard] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./cast.JSON')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    const handleAddToCart= card=>{
        const newCart =[...cart, card];
        setCart(newCart);
    }
    return (
        <div className='cards-container'>
            <div className='card-div'>
                <div className="card-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">      
                        {
                            cards.map(card => <Data 
                                key={card.role}
                                card={card}
                                handleAddToCart= {handleAddToCart}
                                ></Data>)
                        }
                    </div>
                </div>     
            </div>
            <div className='side-cart'>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    )
};

export default Card;