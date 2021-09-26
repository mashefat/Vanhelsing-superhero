import React from 'react';
import './Data.css'

const Data = (props) => {
    console.log(props.card)

    const { img, name, age, country, salary } = props.card;
    return (
        <div className='data-container' >

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col data-card">
                    <div class=" card h-100">
                        <div className='data-img'>
                            <img src={img} class="" alt="" />
                        </div>
                        <div class="card-body">
                            <h2>{name}</h2>
                            <h4>Age : {age}</h4>
                            <h4>Country : {country}</h4>
                            <h4>Salary : $<span style={{color:'orange'}}>{salary}</span></h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Data;