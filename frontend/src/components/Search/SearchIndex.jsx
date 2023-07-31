import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchIndexItem from "./SearchIndexItem";
import { getBars, fetchBars } from "../../store/bars";


export default function SearchIndex ({ query }) {
    const dispatch = useDispatch();
    const bars = useSelector(getBars);

    useEffect(() => {
        dispatch(fetchBars(bars))
    }, [dispatch])

    return (
        <div>
            <h1>Results for "{query}"</h1>
            <ul className="search-index-container">
                {bars.filter(bar => bar.barType === query).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
                {bars.filter(bar => bar.name === query).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
                {bars.filter(bar => bar.address.split(",")[1] === query).map(bar => <SearchIndexItem key={bar.id} bar={bar}/>)}
            </ul>
        </div>
    )
}