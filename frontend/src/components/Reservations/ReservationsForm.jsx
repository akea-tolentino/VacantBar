import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createReservation } from '../../store/reservations';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ReservationsForm.css';


export default function ReservationsForm ({ barId ,sessionUser }) {
    const dispatch = useDispatch();
    let reservation = {
        numGuests: 0,
        date: new Date(),
        time: "17:00",
        barId
    }

    const [numGuests, setNumGuests] = useState(reservation.numGuests)
    const [date, setDate] = useState(reservation.date)
    const [time, setTime] = useState(reservation.time)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReservation = {
            ...reservation,
            numGuests,
            date,
            time,
            barId
        }
    
        dispatch(createReservation(newReservation));
    
    }

    return (
        <form className="reservations-form" onSubmit={handleSubmit}>
            <h2>Make a reservation</h2>
            <div className='party-size'>
                <label>Party Size</label>
                <select name="party-size" onChange={(e)=> setNumGuests(e.target.value)}>
                    <option value={1}>1 people</option>
                    <option defaultValue={2}>2 people</option>
                    <option value={3}>3 people</option>
                    <option value={4}>4 people</option>
                    <option value={5}>5 people</option>
                    <option value={6}>6 people</option>
                    <option value={7}>7 people</option>
                    <option value={8}>8 people</option>
                    <option value={9}>9 people</option>
                    <option value={10}>10 people</option>
                    <option value={11}>11 people</option>
                    <option value={12}>12 people</option>
                </select>
            </div>
            <section className='date-time-container'>
                <div className='date'>
                    <label>Date</label>
                    <DatePicker
                        todayButton="Back to Today"
                        selected={date}
                        minDate={new Date()}
                        onChange={(e) => setDate(e)}
                        />
                </div>
                <div className='time'>
                    <label>Time</label>
                    <select name="time" onChange={(e)=> setTime(e.target.value)}>
                        <option value='17:00'>5:00 PM</option>
                        <option value='17:30'>5:30 PM</option>
                        <option value='18:00'>6:00 PM</option>
                        <option value='18:30'>6:30 PM</option>
                        <option value='19:00'>7:00 PM</option>
                        <option value='19:30'>7:30 PM</option>
                        <option value='20:00'>8:00 PM</option>
                        <option value='20:30'>8:30 PM</option>
                        <option value='21:00'>9:00 PM</option>
                        <option value='21:30'>9:30 PM</option>
                        <option value='22:00'>10:00 PM</option>
                        <option value='22:30'>10:30 PM</option>
                        <option value='23:00'>11:00 PM</option>
                        <option value='23:30'>11:30 PM</option>
                    </select>
                </div>
            </section>
            <div className='reservation-directive'>
                {sessionUser ?
                <button>Book a reservation</button> :
                <span>Sign in to book reservation</span>
                }
            </div>
        </form>
    )
}