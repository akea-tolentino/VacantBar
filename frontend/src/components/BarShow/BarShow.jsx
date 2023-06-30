import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBar, fetchBar } from '../../store/bars';
import './BarShow.css';
import Map from '../Map/Map.jsx';
import { MdLocationOn } from "react-icons/md";
import ReviewsIndex from '../Reviews/ReviewsIndex';
import ReviewsFormModal from '../Reviews/ReviewsFormModal';
import LoginFormModal from '../LoginFormModal';
import ReservationsForm from '../Reservations/ReservationsForm';

export default function BarShow () {
    const dispatch = useDispatch();
    const { barId } = useParams();
    let bar = useSelector(getBar(barId));
    const [geolocation, setGeolocation] = useState(null);
    const geocoder = new window.google.maps.Geocoder();
    const sessionUser = useSelector(state => state.session.user);

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
        <div className='bar-show-page-wrapper'>
            <header className='show-photos-header'>
                {bar.imageUrls !== undefined ? 
                <img key={bar.imageUrls[0]} src={bar.imageUrls[0]} alt="" /> : null
            }
            </header>
            <div className='bar-show-page'>
                <section className='bar-details-container'>
                    <h1 className='bar-header'>{bar.name}</h1>
                    <ul className='bar-show-info'>
                        <li> {bar.address.split(",")[1]} </li> 
                        <li>{bar.barType}</li>
                        <li>{bar.price}</li>
                    </ul>
                    {/* review average goes here */}
                    {/* <div className='show-tags'>tags go here</div> */}
                    <p className='bar-description'>{bar.description}</p>
                    <h2>Photos</h2> 
                            {bar.imageUrls !== undefined ? 
                    <ul className='photos-container'>
                        {Array.from(bar.imageUrls).map((imageUrl, index) => (
                            index === 0 ? null :
                            <img key={imageUrl} src={imageUrl} alt=""/>
                        ))}
                    </ul> 
                            : null }
                    <h2>What people are saying</h2>
                        {sessionUser && barId ? 
                    <section className='reviews-container'>
                        <ReviewsFormModal barId={barId} />
                        <ReviewsIndex currentUser={sessionUser} bar={bar} />
                    </section> :
                    <section className='reviews-container'>
                        <p>Sign in to leave a review.</p>
                        <LoginFormModal />
                        <ReviewsIndex bar={bar} />
                    </section>
                        }
                </section>
                <section className='side-bar-container'>
                    <article className='reservations-container'>
                        <ReservationsForm sessionUser={sessionUser} barId={barId}/>
                    </article>
                    <article className='location-container'>
                        <div className='map-container'>
                                { geolocation ? <Map geolocation={geolocation}/> : <p>Loading...</p> }
                        </div>
                        <p id='address'>
                            <MdLocationOn />
                            {bar.address}
                        </p>
                    </article>
                </section> 
            </div>
        </div>
    )
}