import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import './Blogs.css';

const Blogs = () => {

    const [blogInfo, setBlogInfo] = useState([]);

    useEffect( () => {
        fetch("blogFakeData.json")
            .then(res => res.json())
            .then(data => setBlogInfo(data))
    }, [])

    return (
        <div className='row pt-4'>
            <div className='col-12 col-md-8 px-2'>
                
                {blogInfo.map( (info) => 
                    <BlogContent 
                     key = {info.id}
                     info = {info}
                    >
                    </BlogContent>
            )}
                
            </div>
            <div className=' col-12 col-md-4 px-2'>
                <h1 className='bg-danger'>Bookmarked Area</h1>
                
            </div>
        </div>
    );
};

export default Blogs;