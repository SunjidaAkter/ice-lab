import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <p className='heading orange-color mt-5'>Testimonial</p>
            <p className='heading coffy-color mt-1'>What People Say About ICE LAB!!!</p>
            <div className='container reviews-container'>
                {
                    reviews.map(review => <Review
                        review={review}
                        key={review.id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;