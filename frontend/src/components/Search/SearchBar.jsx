import './SearchBar.css';
import { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
// import { AiOutlineCalendar, AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";

export default function SearchBar () {

    // const [date, setDate] = useState(new Date());
    // const [numGuests, setNumGuests] = useState(2);
    // const [time, setTime] = useState("17:00");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="search-container">
            <h1>Find a high-top for any occasion</h1>
            <form className='query-form' onSubmit={handleSubmit}>
                <span  id="query">
                    <BiSearch/>
                    <input
                    type="text"
                    placeholder="Bar, Location, or Type"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                </span>
                <NavLink to={`/bars/search/${query}`} className='query-link'>
                    <button className='submit-query'>Let's go</button>
                </NavLink>
            </form>
        </div>
    )
}