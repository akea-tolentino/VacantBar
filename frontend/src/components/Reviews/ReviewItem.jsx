import './Reviews.css'

export default function ReviewItem ({ review }) {
    
    return (
        <li className="review-item">
            <div>Rating: {review.rating}</div>
            <div>{review.body}</div>
            <div>User: {review.authorId}</div>
            {/* <div>{review.updatedAt}</div> */}
        </li>
    )
}