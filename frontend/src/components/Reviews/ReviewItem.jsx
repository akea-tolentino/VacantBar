import './Reviews.css'
import { RiStarSFill } from "react-icons/ri";

export default function ReviewItem ({ review }) {
    
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
            <div>User: {review.authorId}</div>
            {/* <div>{review.updatedAt}</div> */}
        </li>
    )
}