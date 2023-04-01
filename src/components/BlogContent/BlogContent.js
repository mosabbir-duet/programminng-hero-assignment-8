import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BlogContent.css';
const BlogContent = ({blog, handleToBookmark, handleToMarkAsRead}) => {
    const {authorImage, authorName, blogTitle, coverImage, readTime} = blog;
    const addToBookmark  = handleToBookmark;
    const addToMarkRead  = handleToMarkAsRead;
    return (
        <div className='content-container'>
            <img  src={coverImage} alt="" />
            <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='d-flex align-items-center'>
                    <img style={{borderRadius:  "50%", height: "48px", width: "48px"}} src={authorImage} alt="" />
                    <div className='author-info'>

                    <h4>{authorName}</h4>
                    <p>Mar 14 (4 days ago)</p>
                    </div>
                </div>
                <div style={{color: "rgba(17, 17, 17, 0.6)", fontSize: "20px", fontWeight:"500"}}>
                    <p>{readTime} min read <button onClick={() => {addToBookmark(blog)}} className='ms-2 border-0' ><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <h2>{blogTitle}</h2>
            {
                blog.tags.map( (tag) => <span style={{color: "rgba(17, 17, 17, 0.6)", fontSize: "20px", fontWeight:"500", marginRight: "15px"}}>#{tag}</span>)
            }
            <br />
            <button className='btn btn-primary' onClick={() => addToMarkRead(blog)} style={{fontSize: "20px", fontWeight:"500", display: "block", marginTop: "20px"}} href="*">Mark as read</button>
        </div>
    );
};

export default BlogContent;