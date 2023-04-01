import React from 'react';
import './Bookmark.css';
const Bookmark = ({bookmark, markRead}) => {
    console.log(bookmark);
    let totalReadTime = 0;
    for(const blogInfo of markRead){
        totalReadTime += blogInfo.readTime;
    }
    return (
        <div className='bookmark-container'>
            <div className='time-container'>
                <h4>Spent time on read : {totalReadTime} min</h4>
            </div>
            
            <div className='blog-title-container scrollbar'>
                <h3>Bookmarked Blogs: {bookmark.length}</h3>
                <div >
                    {
                        bookmark.map(blog => <p className='title-area'>{blog.blogTitle}</p>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Bookmark;