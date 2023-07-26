import { fetchReviews, getReviewsForBar } from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";


export default function ReviewsIndex ({ bar, currentUser }) {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviewsForBar(bar.id));
    const [changeReview, setChangeReview] = useState(false);

    const updateReviews = () => {
        if (changeReview) {
            setChangeReview(false)
        } else {
            setChangeReview(true)
        }
    }

    useEffect(() => {
        dispatch(fetchReviews(reviews))
    }, [changeReview])

    return (
        <ul>
            {reviews.map(review => <ReviewItem currentUser={currentUser} review={review} key={review.id} updateReviews={updateReviews} />)}
        </ul>
    )
}