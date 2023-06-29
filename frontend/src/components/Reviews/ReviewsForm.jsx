import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchReview, getReview, updateReview } from "../../store/reviews";
import './Reviews.css';


export default function ReviewsForm ({ reviewId, barId, setShowModal }) {
    const dispatch = useDispatch();
    let review = useSelector(getReview(reviewId))
    const formType = (reviewId !== undefined ? 'Edit Review' : 'Create Review')

    if (formType === 'Create Review') {
        review = {
            rating: 3,
            body: "",
            barId: barId
        }
    }

    useEffect(() => {
        if (formType === 'Edit Review') {
            dispatch(fetchReview(reviewId))
        }
    }, [reviewId, dispatch])

    const [rating, setRating] = useState(review.rating);
    const [body, setBody] = useState(review.body);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            ...review,
            rating,
            body,
            barId: barId
        }

        if (formType === 'Create Review') {
            dispatch(createReview(newReview))
        } else {
            dispatch(updateReview(newReview));
        }
        setShowModal(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="review-form-content">
                <h1>{formType}</h1>
                <label>Rating: <br/> <br/>
                    <input 
                        type="number"
                        value={rating}
                        min="1"
                        max="5"
                        onChange={(e)=> setRating(e.target.value)}
                        />
                </label>
                <label>Body: <br/> <br/>
                    <textarea 
                        value={body}
                        placeholder="Leave review here"
                        rows="5"
                        cols="40"
                        onChange={(e)=> setBody(e.target.value)}
                        />
                </label>
                <button className="submit-review">{formType}</button>
            </div>
        </form>
    )
}