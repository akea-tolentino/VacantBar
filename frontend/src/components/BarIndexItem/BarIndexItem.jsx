import React from 'react';
import './BarIndexItem.css'
import { NavLink } from 'react-router-dom';


export default function BarIndexItem ({ bar }) {


    return (
        <div className='index-item-container'>
            <NavLink to={`/bars/${bar.id}`} className="bar-name">
                <div className='index-item-photo'>
                    {bar.imageUrls !== undefined ? 
                        <img key={bar.imageUrls[0]} src={bar.imageUrls[0]} alt="" /> : null
                    }
                </div>
                <h2>
                    {bar.name}
                </h2>
                    <li>reviews coming soon</li>
                <ul id='index-item-info'>
                    <li>address metro component</li> 
                    <li>{bar.barType}</li>
                    <li>{bar.price}</li>
                </ul>
            </NavLink>
        </div>
    )
}