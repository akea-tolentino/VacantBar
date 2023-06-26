import { createSelector } from 'reselect';

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const getReview = (reviewId) => (state) => (
    state.reviews ? state.reviews[reviewId] : null
)

export const getReviewsForBar = (barId) => createSelector(
state => state.reviews,
reviews => reviews ? Object.values(reviews).filter(review => review.barId === barId) : []
)

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`)

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review));
    }
}

export const fetchReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews`)

    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews));
    }
}

export const createReviews = (review) => async (dispatch) => {
    const res = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (res.ok) {
        const newReview = await res.json();
        dispatch(receiveReview(newReview));
    }
}

export const updateReviews = (review) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })

    if (res.ok) {
        const newReview = await res.json();
        dispatch(receiveReview(newReview));
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removeReview(reviewId));
    }
}

export default function reviewsReducer (state = {}, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState = {...state}
            const reviewId = action.review.id;
            newState[reviewId] = action.review;
            return newState;
        case REMOVE_REVIEW:
            newState = {...state};
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}