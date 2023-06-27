import { fetchReviews, getReviewsForBar } from "../../store/reviews";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";

export default function ReviewsIndex ({ bar, currentUser }) {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviewsForBar(bar.id));

    useEffect(() => {
        dispatch(fetchReviews(reviews))
    }, [])

    return (
        <ul>
            {reviews.map(review => <ReviewItem currentUser={currentUser} review={review} key={review.id} />)}
        </ul>
    )
}