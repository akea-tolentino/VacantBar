import './Reviews.css'
import { RiStarSFill } from "react-icons/ri";
import ReviewsFormModal from './ReviewsFormModal';
import { deleteReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';

export default function ReviewItem ({ currentUser, review, updateReviews }) {
    const dispatch = useDispatch();
    
    return (
        <li className="review-item">
            <div>{review.authorUsername}</div> 
            <div className='review-rating'>
                <RiStarSFill className={review.rating > 0 ? 'filled' : 'empty'}/>
                <RiStarSFill className={review.rating > 1 ? 'filled' : 'empty'}/>
                <RiStarSFill className={review.rating > 2 ? 'filled' : 'empty'}/>
                <RiStarSFill className={review.rating > 3 ? 'filled' : 'empty'}/>
                <RiStarSFill className={review.rating > 4 ? 'filled' : 'empty'}/>
            </div>
            <div>{review.body}</div>
            {currentUser && currentUser.id === review.authorId ?
                <ul className='review-buttons-container'>
                    <ReviewsFormModal reviewId={review.id} barId={review.barId} updateReviews={updateReviews} />
                    <button className='delete-review' onClick={()=> dispatch(deleteReview(review.id))}>Delete</button>
                </ul> : null
            }
        </li>
    )
}