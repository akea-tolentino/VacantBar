import React from 'react';
import './BarIndexItem.css'
import { NavLink } from 'react-router-dom';


export default function BarIndexItem ({ bar }) {

    return (
        <div className='index-item-container'>
            <p>Photo goes here</p>
            <h2>
                <NavLink to={`/bars/${bar.id}`}>
                {bar.name}
                </NavLink>
            </h2>
                <li>reviews coming soon</li>
            <ul id='index-item-info'>
                <li>address metro component</li> 
                <li>{bar.barType}</li>
                <li>{bar.price}</li>
            </ul>
        </div>
    )
}