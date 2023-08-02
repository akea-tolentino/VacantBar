import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchIndexItem from "./SearchIndexItem";
import { getBars, fetchBars } from "../../store/bars";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import './Search.css';


export default function SearchIndex () {
    const dispatch = useDispatch();
    const { query } = useParams();
    const bars = useSelector(getBars);

    useEffect(() => {
        dispatch(fetchBars(bars))
    }, [dispatch])

    return (
        <div className="search-index-page">
            <h1 className="query-header">Results for "{query}"</h1>
            <section className="search-index-wrapper">
                <ul className="search-index-container">
                    {bars.filter(bar => bar.barType.toLowerCase() === query.toLowerCase()).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
                    {bars.filter(bar => bar.name.toLowerCase() === query.toLowerCase()).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
                    {bars.filter(bar => bar.address.split(",")[1].toLowerCase() === query.toLowerCase()).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
                </ul>
            </section>
        </div>
    )
}