import React, { useState } from 'react';
import { Modal } from "../../context/Modal";
import ReviewsForm from './ReviewsForm';

export default function ReviewsFormModal ({ barId, reviewId, updateReviews }) {
    const [showModal, setShowModal] = useState(false);
    const formType = ( reviewId ? 'Edit' : 'Leave a Review');

    return (
        <>
            <button onClick={() => setShowModal(true)}>{formType}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewsForm setShowModal={setShowModal} barId={barId} reviewId={reviewId} updateReviews={updateReviews} />
                </Modal>
            )}
        </>
    );
}