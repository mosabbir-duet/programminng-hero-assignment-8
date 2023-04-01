import React from 'react';
import './Bookmark.css';
const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    let totalReadTime = 0;
    for(const blogInfo of bookmark){
        totalReadTime += blogInfo.readTime;
    }
    return (
        <div className='bookmark-container'>
            <div className='time-container'>
                <h4>Spent time on read : {totalReadTime} min</h4>
            </div>
            
            
        </div>
    );
};

export default Bookmark;