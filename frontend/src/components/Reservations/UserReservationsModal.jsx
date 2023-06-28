import React, { useState, useEffect } from 'react';
import { Modal } from "../../context/Modal";
import { updateReservation, deleteReservation, getReservationsForUser, fetchReservations } from '../../store/reservations';
import { useDispatch, useSelector } from 'react-redux';

export default function UserReservationsModal ({ user }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const reservations = useSelector(getReservationsForUser(user.id))

    useEffect(() => {
        dispatch(fetchReservations(reservations))
    }, [])

    return (
        <>
            <button onClick={() => setShowModal(true)}>Reservations</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h1>{user.username} 's reservations</h1>
                    <ul>{reservations.map( reservation => <li key={reservation.id}>
                        <p>{reservation.date}</p>
                        <p>{reservation.time}</p>
                        <p>{reservation.numGuests}</p>
                        {/* <button onClick={dispatch(updateReservation(reservation.id))}>Edit</button> */}
                        <button onClick={() => dispatch(deleteReservation(reservation.id))}>Delete</button>
                    </li>)}</ul>
                </Modal>
            )}
        </>
    )
}