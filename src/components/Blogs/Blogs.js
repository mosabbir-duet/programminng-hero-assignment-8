import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import BlogContent from '../BlogContent/BlogContent';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [markRead, setMarkRead]  = useState([])

    useEffect( () => {
        fetch("blogFakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const handleToBookmark = (blogInfo) => {
        let newBookmark = [];
        if(bookmark.find(blog => blog.id === blogInfo.id)){
            toast("Already bookmarked this blog!!!")
        }
        newBookmark = [...bookmark, blogInfo]
        setBookmark(newBookmark)
        
        
    }

    const handleToMarkAsRead = (blogInfo) => {
        let newMarkRead = [];
        if(markRead.find(blog => blog.id === blogInfo.id)){
            toast("You read this blog again!!!")
        }
        newMarkRead = [...markRead, blogInfo]
        setMarkRead(newMarkRead);

        
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
                     handleToMarkAsRead = {handleToMarkAsRead}
                    >
                    </BlogContent>
            )}
                
            </div>
            <div className=' col-12 col-md-4 px-3'>
                <Bookmark bookmark = {bookmark} markRead = {markRead}></Bookmark>
                
            </div>
        </div>
    );
};

export default Blogs;