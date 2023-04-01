import React, { useEffect, useState } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect( () => {
        fetch("blogFakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const handleToBookmark = (blogInfo) => {
        let newBookmark = [];
        newBookmark = [...bookmark, blogInfo]
        setBookmark(newBookmark)
        
    }
    console.log(bookmark)
    return (
        <div className='row pt-4'>
            <div className='col-12 col-md-8 px-3'>
                
                {blogs.map( (blog) => 
                    <BlogContent 
                     key = {blog.id}
                     blog = {blog}
                     handleToBookmark = {handleToBookmark}
                    >
                    </BlogContent>
            )}
                
            </div>
            <div className=' col-12 col-md-4 px-3'>
                <Bookmark bookmark = {bookmark}></Bookmark>
                
            </div>
        </div>
    );
};

export default Blogs;