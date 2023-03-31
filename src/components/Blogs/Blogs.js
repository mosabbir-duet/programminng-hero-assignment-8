import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='row pt-4'>
            <div className='col-12 col-md-9 px-2'>
                
                <h1 className='bg-warning'>Blog Area</h1>
                
            </div>
            <div className=' col-12 col-md-3 px-2'>
                <h1 className='bg-danger'>Bookmarked Area</h1>
                
            </div>
        </div>
    );
};

export default Blogs;