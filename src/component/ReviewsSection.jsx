import React from 'react';

const ReviewsSection = () => {
    const reviews = [
        { client: 'John Doe', rating: 4, comment: 'Great work, will hire again!' },
        { client: 'Jane Smith', rating: 5, comment: 'Exceeded expectations!' },
    ];

    return (
        <div>
            <h3>Client Reviews</h3>
            {reviews.map((review, idx) => (
                <div key={idx} style={{ marginBottom: '15px' }}>
                    <h4>{review.client}</h4>
                    <div>Rating: {review.rating} / 5</div>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewsSection;