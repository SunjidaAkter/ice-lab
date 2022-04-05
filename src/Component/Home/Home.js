import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container'>
            <div className='banner d-flex justify-content-between align-items-center mt-5'>
                <div className='text-container'>
                    <p className='heading coffy-color'>Feel Inside Cold with <br />The Delicious <span className='orange-color'>Ice Cream</span></p>
                    <p className='normal coffy-color'>This is the best ice cream I think I’ve ever had an existence of my life. It’s so creamy and delicious. There’s pieces of chocolate all around it, inside of it.  It’s just divine. It is amazing, everything tastes great you could eat a whole pint without even realizing it.</p>
                    <div className='d-flex justify-content-center'>
                        <button className='px-4 py-2 btn'>EXPLORE</button>
                    </div>
                </div>
                <div className='img-container d-flex '>
                    <div>
                        <img style={{ width: '276px', borderRadius: '10px', marginRight: '25px', marginLeft: '25px' }} src="https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/ice-cream-with-berries-e1634197828229.jpg" alt="" />
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <img style={{ width: '276px', borderRadius: '10px' }} src="https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/homemade-vanilla-ice-cream-scoop-in-waffle-cones-1-800x533.jpg" alt="" />
                        <img style={{ width: '276px', borderRadius: '10px' }} src="https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/10/delicious-coffe-ice-cream-for-dessert-1536x1024.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className='heading orange-color mt-5 mb-3'>Testimonial</p>
                <p className='heading coffy-color'>CUSTOMER REVIEW</p>
            </div>
            <div>
                <div className='container reviews-container'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            review={review}
                            key={review.id}
                        ></Review>)
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/reviews"><button className='px-4 py-2 btn mb-5'>SEE MORE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;