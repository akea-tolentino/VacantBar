import React from 'react';


export default function BarIndexItem ({ bar }) {

    return (
        <div className='index-item-container'>
            <h2>{bar.name}</h2>
            <ul>
                <li>{bar.barType}</li>
                <li>{bar.price}</li>
            </ul>
        </div>
    )
}