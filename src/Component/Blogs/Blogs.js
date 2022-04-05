import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <p className='heading orange-color mt-4'>Fresh New Blogs</p>
            <div className='my-5 review-container'>
                <p className='headings coffy-color'>What is Semantic Tag?</p>
                <div className='d-flex justify-content-between'>
                    <div >
                        <p className='normal coffy-color'><small><span className='impo'>Semantic Tags, that is Semantic HTML elements are the elements which accurately give the details of their meaning in a human- and machine-readable way.</span> Elements such as <span className='impo'>header , footer and article</span> are all known as semantic because they clearly explain the purpose of the element and the type of content that is inside them as shown in the picture.  Examples of non-semantic elements: div and span - describes nothing about its content. Examples of semantic elements: form , table , and article - Clearly defines its content. <span className='impo'>HTML 5 introduced new semantic elements such as section , article , footer , progress , nav , aside , mark , and time.</span>
                            By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster. So for developing an SEO friendly and accessible website semantic tags are very useful.
                        </small></p>
                    </div>
                    <div>
                        <img style={{ width: '260px' }} src="https://www.w3schools.com/html/img_sem_elements.gif" alt="" />
                    </div>
                </div>
            </div>
            <div className='my-5 review-container'>
                <p className='headings coffy-color my-4'>What is the difference between inline, block & inline-block?</p>
                <div className=''>
                    <p className='points coffy-color'>inline, inline-block & block they all are the value of CSS’s display property. </p>
                    <p className='point orange-color'>inline : </p>
                    <p className='points coffy-color'>Displays an element as an inline element. Any height and width properties will have no effect.Such as, span, a, img etc.</p>
                    <p className='point orange-color'>inline-block : </p>
                    <p className='points coffy-color'>It’s essentially the same thing as inline, except that you can set height and width values.
                    </p>
                    <p className='point orange-color'>block : </p>
                    <p className='points coffy-color'>block is opposite of inline.inline elements appears on the same line. But, block starts on a NEW line and takes up the full width available. Such as, p, h1, div etc.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;