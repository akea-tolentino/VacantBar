import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createReservation, fetchReservation, getReservation, updateReservation } from '../../store/reservations';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ReservationsForm.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom';


export default function ReservationsForm ({ changeShowForm, changeForm, reservationId, sessionUser }) {
    const dispatch = useDispatch();
    let reservation = useSelector(getReservation(reservationId));
    const formType = (reservationId !== undefined ? 'Edit Reservation' : 'Make a Reservation');
    const [showForm, setShowForm] = useState(true);
    const {barId} = useParams();
    const month = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}

    if (formType === 'Make a Reservation') {
        let newResTime = new Date();
        newResTime.setHours(17);
        newResTime.setMinutes(0);
        reservation = {
            numGuests: 1,
            date: new Date(),
            time: newResTime.toUTCString(),
            barId
        }
    }

    useEffect(() => {
        if (formType === 'Edit Reservation') {
            dispatch(fetchReservation(reservationId))
        }
    }, [reservationId, dispatch])

    const [numGuests, setNumGuests] = useState(reservation.numGuests)
    const [date, setDate] = useState(new Date(reservation.date))
    const [time, setTime] = useState(reservation.time)

    const handleSubmit = (e) => {
        e.preventDefault();
        const local = new Date(`${date.getUTCDate()} ${month[date.getUTCMonth() + 1]} ${date.getUTCFullYear()} ${time}`);
    
        const newReservation = {
            ...reservation,
            numGuests,
            date,
            time: `${date.getUTCDate()} ${month[date.getUTCMonth() + 1]} ${date.getUTCFullYear()} ${local.getUTCHours()}:${local.getUTCMinutes()}:00`,
            barId
        }
        
        if (newReservation !== undefined && formType === 'Make a Reservation') {
            dispatch(createReservation(newReservation));
        } else {
            dispatch(updateReservation(newReservation));
        }
        // setShowForm(false);
        if (formType === 'Edit Reservation')
        {
            changeShowForm()
            changeForm();
        }
    }


    return (
        <div>
            {showForm && (
            <form className="reservations-form" onSubmit={handleSubmit}>
                <h2>{formType}</h2>
                <div className='party-size'>
                    <label>Party Size</label>
                    <select name="party-size" onChange={(e)=> setNumGuests(e.target.value)}>
                        {formType === 'Edit Reservation' ? (
                        <option defaultValue={numGuests}>{numGuests}</option>
                        ):
                        <option defaultValue={null}>Party Size</option>
                        }
                        <option value={1}>1 person</option>
                        <option value={2}>2 people</option>
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
                            selected={new Date(date)}
                            minDate={new Date()}
                            onChange={(e) => setDate(e)}
                            />
                    </div>
                    <div className='time'>
                        <label>Time</label>
                        <select name="time" onChange={(e)=> setTime(e.target.value)}>
                        {formType === 'Edit Reservation' ? (
                            <option defaultValue={new Date(time).getHours().toString()}>
                                {new Date(time).getHours() > 12 ? new Date(time).getHours() - 12 : new Date(time).getHours()}:{new Date(time).getMinutes()}
                                    {new Date(time).getMinutes() === 0 ? "0" : null} PM
                            </option> ) : (
                            <option value={null} disabled selected>Choose a time</option>
                            )
                        }
                            <option value={'17:00:00'}>5:00 PM</option>
                            <option value={'17:30:00'}>5:30 PM</option>
                            <option value={'18:00:00'}>6:00 PM</option>
                            <option value={'18:30:00'}>6:30 PM</option>
                            <option value={'19:00:00'}>7:00 PM</option>
                            <option value={'19:30:00'}>7:30 PM</option>
                            <option value={'20:00:00'}>8:00 PM</option>
                            <option value={'20:30:00'}>8:30 PM</option>
                            <option value={'21:00:00'}>9:00 PM</option>
                            <option value={'21:30:00'}>9:30 PM</option>
                            <option value={'22:00:00'}>10:00 PM</option>
                            <option value={'22:30:00'}>10:30 PM</option>
                            <option value={'23:00:00'}>11:00 PM</option>
                            <option value={'23:30:00'}>11:30 PM</option>
                        </select>
                    </div>
                </section>
                <div className='reservation-directive'>
                    {sessionUser ?
                    <button>Submit reservation</button> :
                    <span>Sign in to book reservation</span>
                    }
                </div>
            </form>
            )}
        </div>
        )
    }
