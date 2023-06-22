import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBar, fetchBar } from '../../store/bars';
import './BarShow.css';
import Map from '../Map/Map.jsx';


export default function BarShow () {
    const dispatch = useDispatch();
    const { barId } = useParams();
    let bar = useSelector(getBar(barId));
    const [geolocation, setGeolocation] = useState(null);
    const geocoder = new window.google.maps.Geocoder();

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
            capacity: '',
            images: []
        }
    }

    useEffect(() => {
        console.log(bar.address);
        console.log("2775 Telegraph Ave, Oakland, CA 94612");
        const address = bar.address;
        geocoder.geocode({ address: address }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
            const location = results[0].geometry.location;
            setGeolocation({
                lat: location.lat(),
                lng: location.lng()
             });
        }});
    }, [bar.address]);


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
                    <h2>Photos</h2> 
                    {/* <ul>
                        {bar.imageUrls.map(imageUrl => (
                            <img key={imageUrl} src={imageUrl} alt="" />
                        ))}
                    </ul> */}
                    <h2>What people are saying</h2> {/* reviews */}
                </div>
                <div className='side-bar-container'>
                    <div className='reservations-container'>Reservations go here</div>
                    <section className='location-container'>
                    <div className='location-container'>
                            { geolocation ? <Map geolocation={geolocation}/> : <p>Loading...</p> }
                    </div>
                        <p id='address'>{bar.address}</p>
                    </section>
            </div>
            </div>
        </>
    )
}