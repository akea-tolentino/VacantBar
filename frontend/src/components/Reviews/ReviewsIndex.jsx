import { fetchReviews, getReviewsForBar } from "../../store/reviews";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";


export default function ReviewsIndex ({ bar, currentUser }) {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviewsForBar(bar.id));
    const [reviewChanged, setReviewChanged] = useState(false);

     const updateReviews = () => {
        if (reviewChanged) {
            setReviewChanged(false)
        } else {
            setReviewChanged(true)
        }
    }

    useEffect(() => {
        dispatch(fetchReviews(reviews))
    }, [reviewChanged])

    return (
        <ul>
            {reviews.map(review => <ReviewItem updateReviews={updateReviews} currentUser={currentUser} review={review} key={review.id} />)}
        </ul>
    )
}