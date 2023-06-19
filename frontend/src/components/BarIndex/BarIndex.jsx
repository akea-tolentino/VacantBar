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
        <>
            <h2>Bars Index</h2>
            <ul>
                {bars.map(bar => <BarIndexItem key={bar.id} bar={bar} />)}
            </ul>
        </>
    )
}