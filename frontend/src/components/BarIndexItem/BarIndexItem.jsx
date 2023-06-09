import React from 'react';
import './BarIndexItem.css'
import { NavLink } from 'react-router-dom';


export default function BarIndexItem ({ bar }) {


    return (
        <div className='index-item-wrapper'>
            <NavLink to={`/bars/${bar.id}`} className="bar-name">
                <div className='index-item-photo'>
                    {bar.imageUrls !== undefined ? 
                        <img key={bar.imageUrls[0]} src={bar.imageUrls[0]} alt="" /> : null
                    }
                </div>
                <section className='index-item-container'>
                    <h2 id='bar-name'>{bar.name}</h2>
                    {/* <li>reviews coming soon</li> */}
                    <ul className='index-item-info'>
                        <li> {bar.address.split(",")[1]}</li>
                        <li>|</li> 
                        <li>{bar.barType}</li>
                        <li>|</li> 
                        <li>{bar.price}</li>
                    </ul>
                </section>
            </NavLink>
        </div>
    )
}