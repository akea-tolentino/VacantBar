import './SearchBar.css';
import { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
// import { AiOutlineCalendar, AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";

export default function SearchBar () {

    // const [date, setDate] = useState(new Date());
    // const [numGuests, setNumGuests] = useState(2);
    // const [time, setTime] = useState("17:00");
    const [search, setSearch] = useState("");

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setRedirect(true);
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                </span>
                <button className='submit-query'>Let's go</button>
            </form>
            {redirect ? <Redirect push
            to={{
                pathname: "/search/bars",
                state: {search}
            }}/> : null }
        </div>
    )
}