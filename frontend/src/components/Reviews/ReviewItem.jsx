import './Reviews.css'
import { RiStarSFill } from "react-icons/ri";
import ReviewsFormModal from './ReviewsFormModal';
import { deleteReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';

export default function ReviewItem ({ currentUser, review }) {
    const dispatch = useDispatch();
    
    return (
        <li className="review-item">
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
                    <ReviewsFormModal reviewId={review.id} barId={review.barId} />
                    <button className='delete-review' onClick={()=> dispatch(deleteReview(review.id))}>Delete</button>
                </ul> :
                <div>User: {review.authorId}</div> 
            }
            {/* <div>{review.updatedAt}</div> */}
        </li>
    )
}