import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Data = (props) => {
    console.log(props.card)

    const { img, name, role, country, salary } = props.card;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='data-container' >

            <div class="row row-cols-1 row-cols-md-3 g-4 data-cards">
                <div class="col ">
                    <div class="card data-card">
                        <div className='data-img'>
                            <img src={img} class="" alt="" />
                        </div>
                        <div class="card-body">
                            <h3>{name}</h3>
                            <h6>Role : {role}</h6>
                            <h5>Country : {country}</h5>
                            <h4>Rate : $<span style={{color:'orange'}}>{salary}</span></h4>
                            <div className="btn-div text-center">
                                <button className="btn-primary rounded px-2 fs-5" onClick={() => props.handleAddToCart(props.card)}> {element} Hire Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Data;