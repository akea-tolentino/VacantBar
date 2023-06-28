import { createSelector } from 'reselect';
import csrfFetch from './csrf';

export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';

export const receiveReservation = (reservation) => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

export const receiveReservations = (reservations) => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
}

export const removeReservation = (reservationId) => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
}

export const getReservation = (reservationId) => (state) => (
    state.reservations ? state.reservations[reservationId] : null
)

export const getReservationsForBar = (barId) => createSelector(
    state => state.reservations,
    reservations => reservations ? Object.values(reservations).filter(reservation => reservation.barId === barId) : []
)

export const getReservationsForUser = (userId) => createSelector(
    state => state.reservations,
    reservations => reservations ? Object.values(reservations).filter(reservation => reservation.userId === userId) : []
    )

export const fetchReservation = (reservationId) => async (dispatch) => {
    const res = await fetch(`/api/reservations/${reservationId}`)

    if (res.ok) {
        const reservation = await res.json();
        dispatch(receiveReservation(reservation));
    }
}

export const fetchReservations = () => async (dispatch) => {
    const res = await fetch(`/api/reservations`)

    if (res.ok) {
        const reservations = await res.json();
        dispatch(receiveReservations(reservations));
    }
}

export const createReservation = (reservation) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify(reservation)
    })

    if (res.ok) {
        const newReservation = await res.json();
        dispatch(receiveReservation(newReservation));
    }
}

export const updateReservation = (reservation) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: 'PATCH',
        body: JSON.stringify(reservation)
    })

    if (res.ok) {
        const newReservation = await res.json();
        dispatch(receiveReservation(newReservation));
    }
}

export const deleteReservation = (reservationId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removeReservation(reservationId));
    }
}

export default function reservationsReducer (state = {}, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            newState = {...state}
            const reservationId = action.reservation.id;
            newState[reservationId] = action.reservation;
            return newState;
        case REMOVE_RESERVATION:
            newState = {...state};
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
}