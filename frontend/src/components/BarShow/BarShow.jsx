import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBar, fetchBar } from '../../store/bars';
import './BarShow.css';

export default function BarShow () {
    const dispatch = useDispatch();
    const { barId } = useParams();
    let bar = useSelector(getBar(barId));

    useEffect(() => {
        dispatch(fetchBar(barId))
    }, [dispatch, barId])

    if (bar === undefined) {
        bar = {
            id: '',
            name: '',
            address: '',
            barType: '',
            price: '',
            description: '',
            capacity: ''
        }
    }


    return (
        <>
            <div className='show-photos-header'>Arrangement of Photos here</div>
            <div className='bar-show-container'>
                <div className='bar-show-page'>
                    <h1>{bar.name}</h1>
                    <ul id='bar-show-info'>
                        <li>address metro component</li> 
                        <li>{bar.barType}</li>
                        <li>{bar.price}</li>
                    </ul>
                    <div className='show-tags'>tags go here</div>
                    <p>{bar.description}</p>
                    <h2>Photos</h2> {/* Photos */}
                    <h2>What people are saying</h2> {/* reviews */}
                </div>
                <div className='side-bar-container'> Side-bar Container goes here
                    <div className='location-container'> Map Container goes here
                        <p>{bar.address}</p>
                    </div>
            </div>
            </div>
        </>
    )
}