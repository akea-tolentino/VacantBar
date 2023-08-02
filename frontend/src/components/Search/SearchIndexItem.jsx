import { NavLink } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";
import './Search.css';




export default function SearchIndexItem ({ bar }) {

    const price = bar.price;

    function printDollar(price) {
        let result = '';
        for (let i = 0; i < price; i++) {
          result += '$';
        }
        return result;
      }

    return (
        <div className="search-item-container">
            <NavLink to={`/bars/${bar.id}`} className="bar-search-name">
                {bar.imageUrls !== undefined ? 
                    <img className="search-item-photo" key={bar.imageUrls[0]} src={bar.imageUrls[0]} alt="" /> : null
                }
            </NavLink>
            <section className='search-item-info'>
                <NavLink to={`/bars/${bar.id}`} id='search-bar-name'><h2>{bar.name}</h2></NavLink>
                    <div className='review-rating'>
                        <span>
                            <RiStarSFill className={Math.round(bar.averageRating) > 0 ? 'filled' : 'empty'}/>
                            <RiStarSFill className={Math.round(bar.averageRating) > 1 ? 'filled' : 'empty'}/>
                            <RiStarSFill className={Math.round(bar.averageRating) > 2 ? 'filled' : 'empty'}/>
                            <RiStarSFill className={Math.round(bar.averageRating) > 3 ? 'filled' : 'empty'}/>
                            <RiStarSFill className={Math.round(bar.averageRating) > 4 ? 'filled' : 'empty'}/>
                        </span>
                        <p>({bar.numReviews} reviews)</p>
                    </div>
                <ul className='search-index-item-info'>
                    <li> {bar.address.split(",")[1]}</li>
                    <li>{bar.barType}</li>
                    <li>{printDollar(bar.price)}</li>
                </ul>
            </section>
        </div>
    )
}