import './SearchBar.css';
import { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";

export default function SearchBar () {

    const [date, setDate] = useState(new Date());
    const [numGuests, setNumGuests] = useState(2);
    const [time, setTime] = useState("17:00");

    return(
        <div className="search-container">
            <h1>Find a high-top for any occasion</h1>
            <form className='query-form'>
                <span  id="query">
                    <BiSearch/>
                    <input
                    type="text"
                    placeholder="Bar, Location, or Type" />
                </span>
                <button className='submit-query'>Let's go</button>
            </form>
        </div>
    )
}