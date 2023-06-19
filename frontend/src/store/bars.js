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

export const getBars = (state) => (
    state.bars ? Object.values(state.bars) : []
)

export const fetchBar = (barId) => async (dispatch) => {
    const res = await fetch(`api/bars/${barId}`)

    if (res.ok) {
        const bar = await res.json();
        dispatch(receiveBar(bar));
    }
}

export const fetchBars = () => async (dispatch) => {
    const res = await fetch(`api/bars`)

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