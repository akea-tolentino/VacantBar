import React, { useState, useEffect } from 'react';
import { Modal } from "../../context/Modal";
import { deleteReservation, getReservationsForUser, fetchReservations } from '../../store/reservations';
import { useDispatch, useSelector } from 'react-redux';
import ReservationsForm from './ReservationsForm';
import './UserReservations.css';

export default function UserReservationsModal ({ user, changeModal }) {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const reservations = useSelector(getReservationsForUser(user.id))
    const [resId, setResId] = useState(null);
    let ampm;

    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        dispatch(fetchReservations(reservations))
    }, [dispatch, submitForm])

    const changeForm = () => {
        if (submitForm) {setSubmitForm(false)}
        else {setSubmitForm(true)}
    }
    
    const changeShowForm = () => {
        if (showForm) {setShowForm(false)}
        else {setShowForm(true)}
    }

    const handleClick = (id) => {
        setResId(id);
        changeShowForm()
    }

    return (
        <>
                <Modal onClose={changeModal}>
                    <h1 className='reservation-list-header'>{user.username}'s reservations</h1>
                    <ul>{reservations.map( reservation => <li key={reservation.id} className="reservation-list">
                        <p>{reservation.barName}</p>
                        <p>Party Size: {reservation.numGuests}</p>
                        <div className='date-time'>
                            <time>
                                {new Date(reservation.date).getMonth() + 1}
                                -
                                {new Date(reservation.date).getDate()}
                                -
                                {new Date(reservation.date).getFullYear()}
                            </time>
                            <br/>
                            <time>
                                {new Date(reservation.time).getHours() > 12 ? new Date(reservation.time).getHours() - 12 : new Date(reservation.time).getHours()}
                                :
                                {new Date(reservation.time).getMinutes()}
                                {new Date(reservation.time).getMinutes() === 0 ? "0" : null}
                                {new Date(reservation.time).getHours() <= 11 ? ampm = " AM" : ampm = " PM"}
                            </time>
                        </div>
                        <p>{reservation.barAddress}</p>
                        <div className='reservation-list-buttons'>
                            <button id="edit" onClick={() => handleClick(reservation.id)}>Edit</button>
                            <button onClick={() => dispatch(deleteReservation(reservation.id))}>Delete</button>
                        </div>
                    </li>)}</ul>
                            {showForm && (
                                <ReservationsForm changeShowForm={changeShowForm} changeForm={changeForm} reservationId={resId} sessionUser={user} />
                            )}
                </Modal>

        </>
    )
}