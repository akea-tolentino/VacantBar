import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarIndexItem from "../BarIndexItem/BarIndexItem";
import { getBars, fetchBars } from "../../store/bars";
import './BarIndex.css'

export default function BarIndex () {
    const dispatch = useDispatch();
    const bars = useSelector(getBars);

    useEffect(() => {
        dispatch(fetchBars(bars))
    }, [dispatch])

    return (
        <div className="bar-index-container">
            <h2>Cocktail Bars</h2>
            <ul className="bar-index-container">
                {/* {bars.map(bar => <BarIndexItem key={bar.id} bar={bar} />)} */}
                {bars.filter(bar => bar.barType === 'cocktail').map(bar => <BarIndexItem key={bar.id} bar={bar} />)}
            </ul>
            <h2>Breweries near you</h2>
            <ul className="bar-index-container">
                {/* {bars.map(bar => <BarIndexItem key={bar.id} bar={bar} />)} */}
                {bars.filter(bar => bar.barType === 'brewery').map(bar => <BarIndexItem key={bar.id} bar={bar} />)}
            </ul>
            <h2>Pocha (Korean Bars)</h2>
            <ul className="bar-index-container">
                {/* {bars.map(bar => <BarIndexItem key={bar.id} bar={bar} />)} */}
                {bars.filter(bar => bar.barType === 'korean-eatery').map(bar => <BarIndexItem key={bar.id} bar={bar} />)}
            </ul>
            <h2>With a view</h2>
            <ul className="bar-index-container">
                {/* {bars.map(bar => <BarIndexItem key={bar.id} bar={bar} />)} */}
                {bars.filter(bar => bar.barType === 'rooftop').map(bar => <BarIndexItem key={bar.id} bar={bar} />)}
            </ul>
        </div>
    )
}