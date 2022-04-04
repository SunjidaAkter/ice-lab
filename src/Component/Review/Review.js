import React from 'react';
import './Review.css';
import { StarIcon } from '@heroicons/react/solid'

const Review = ({ review }) => {
    const { name, img, ratings, _review } = review;
    let rating4;
    let rating5;

    if (ratings === 4) {
        rating4 = <span className='d-flex justify-content-center'>
            <StarIcon className='star' ></StarIcon>
            <StarIcon className='star' ></StarIcon>
            <StarIcon className='star' ></StarIcon>
            <StarIcon className='star' ></StarIcon>
        </span>
    } else {
        rating5 = <span className='d-flex justify-content-center'>
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
            <StarIcon className='star' />
        </span>
    }
    return (
        <div className='review-container'>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-column justify-content-around align-items-center my-3'>
                    <img className='rounded-circle' src={img} alt="" />
                    <div>
                        <p className='headings coffy-color'>{name}</p>
                        <h6>{rating4 ? rating4 : rating5}</h6>
                    </div>
                </div>
                <div>
                    <p className='normal coffy-color'><small>{_review}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;