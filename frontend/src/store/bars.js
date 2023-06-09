import {createSelector} from 'reselect';
import { receiveReviews } from './reviews';

export const RECEIVE_BAR = 'bars/RECEIVE_BAR';
export const RECEIVE_BARS = 'bars/RECEIVE_BARS';
export const REMOVE_BAR = 'bars/REMOVE_BAR';

export const receiveBar = (bar) => {
    return {
        type: RECEIVE_BAR,
        bar
    }
}

export const receiveBars = (bars) => {
    return {
        type: RECEIVE_BARS,
        bars
    }
}

export const removeBar = (barId) => {
    return {
        type: REMOVE_BAR,
        barId
    }
}

export const getBar = (barId) => (state) => (
    state.bars ? state.bars[barId] : null
)

export const getBars = createSelector (
    state => state.bars,
    bars => (bars ? Object.values(bars) : [])
)

export const fetchBar = (barId) => async (dispatch) => {
    const res = await fetch(`/api/bars/${barId}`)

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveBar(data.bar));
        dispatch(receiveReviews(data.reviews));
    }
}

export const fetchBars = () => async (dispatch) => {
    const res = await fetch(`/api/bars`)

    if (res.ok) {
        const bars = await res.json();
        dispatch(receiveBars(bars));
    }
}

export default function barsReducer (state = {}, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_BARS:
            return action.bars;
        case RECEIVE_BAR:
            newState = {...state};
            const barId = action.bar.id;
            newState[barId] = action.bar;
            return newState;
        case REMOVE_BAR:
            newState = {...state};
            delete newState[action.barId];
            return newState;
        default:
            return state;
    }
}