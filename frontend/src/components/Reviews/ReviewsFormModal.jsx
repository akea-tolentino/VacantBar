import React, { useState } from 'react';
import { Modal } from "../../context/Modal";
import ReviewsForm from './ReviewsForm';

export default function ReviewsFormModal ({ barId, reviewId }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <button onClick={() => setShowModal(true)}>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewsForm setShowModal={setShowModal} barId={barId}/>
                </Modal>
            )}
        </>
    );
}