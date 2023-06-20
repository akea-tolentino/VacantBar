import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBar, fetchBar } from '../../store/bars';

export default function BarShow () {
    const dispatch = useDispatch();
    const { barId } = useParams();
    const bar = useSelector(getBar(barId));

    useEffect(() => {
        dispatch(fetchBar(barId))
    }, [dispatch, barId])

    return (
        <div>
            <h2>BarShow</h2>
            <div className='bar-show-container'>
                <h1>{bar.name}</h1>
                <ul id='bar-show-info'>
                    <li>address metro component</li> 
                    <li>{bar.barType}</li>
                    <li>{bar.price}</li>
                </ul>
                <p>{bar.description}</p>
                <h2>Photos</h2> {/* Photos */}
                <h2>What people are saying</h2> {/* reviews */}
            </div>
            <div className='side-bar-container'>
                <div className='location-container'>
                    <p>{bar.address}</p>
                </div>
            </div>
        </div>
    )
}