import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='banner container d-flex justify-content-between align-items-center mt-5'>
            <div className='text-container'>
                <p className='heading'>Feel Inside Cold with <br /> Our Delicious <span className='orange-color'>Ice Cream</span></p>
                <p className='normal '>Enjoy It Before Melting. Made by Hand with Love. We Serve You the Best. We use natural ingredients. We have Wide range of products.</p>
                <div className='d-flex justify-content-center'>
                    <button className='px-4 py-2 btn'>Learn more</button>
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
    );
};

export default Home;