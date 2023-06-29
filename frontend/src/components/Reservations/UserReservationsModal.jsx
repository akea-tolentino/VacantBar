import React, { useState, useEffect } from 'react';
import { Modal } from "../../context/Modal";
import { deleteReservation, getReservationsForUser, fetchReservations } from '../../store/reservations';
import { useDispatch, useSelector } from 'react-redux';
import ReservationsForm from './ReservationsForm';
import { useParams } from 'react-router-dom'
import './UserReservations.css';

export default function UserReservationsModal ({ user }) {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const reservations = useSelector(getReservationsForUser(user.id))
    const { barId } = useParams();

    useEffect(() => {
        dispatch(fetchReservations(reservations))
    }, [])

    return (
        <>
            <button onClick={() => setShowModal(true)}>Reservations</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h1 className='reservation-list-header'>{user.username} 's reservations</h1>
                    <ul>{reservations.map( reservation => <li key={reservation.id} className="reservation-list">
                        <p>Party Size: {reservation.numGuests}</p>
                        <time>{reservation.date}</time>
                        <time>{reservation.time}</time>
                        <div className='reservation-list-buttons'>
                            <button onClick={() => setShowForm(true)}>Edit</button>
                            {showForm && (
                                <ReservationsForm reservationId={reservation.id} barId={barId} sessionUser={user} />
                            )}
                            <button onClick={() => dispatch(deleteReservation(reservation.id))}>Delete</button>
                        </div>
                    </li>)}</ul>
                </Modal>
            )}
        </>
    )
}