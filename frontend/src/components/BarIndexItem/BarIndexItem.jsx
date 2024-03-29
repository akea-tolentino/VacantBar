import React from 'react';
import './BarIndexItem.css'
import { NavLink } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";



export default function BarIndexItem ({ bar }) {

    const price = bar.price;

    function printDollar(price) {
        let result = '';
        for (let i = 0; i < price; i++) {
          result += '$';
        }
        return result;
      }

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
                    <li>
                        <div className='review-rating'>
                            <span>
                                <RiStarSFill className={Math.round(bar.averageRating) > 0 ? 'filled' : 'empty'}/>
                                <RiStarSFill className={Math.round(bar.averageRating) > 1 ? 'filled' : 'empty'}/>
                                <RiStarSFill className={Math.round(bar.averageRating) > 2 ? 'filled' : 'empty'}/>
                                <RiStarSFill className={Math.round(bar.averageRating) > 3 ? 'filled' : 'empty'}/>
                                <RiStarSFill className={Math.round(bar.averageRating) > 4 ? 'filled' : 'empty'}/>
                            </span>
                            {bar.numReviews > 1 ?
                                <p>({bar.numReviews} reviews)</p> :
                                <p>({bar.numReviews} review)</p>
                            }
                        </div>
                    </li>
                    <ul className='index-item-info'>
                        <li> {bar.address.split(",")[1]}</li>
                        <li>|</li> 
                        <li>{bar.barType}</li>
                        <li>|</li> 
                        <li>{printDollar(bar.price)}</li>
                    </ul>
                </section>
            </NavLink>
        </div>
    )
}