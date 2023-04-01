import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BlogContent.css';
const BlogContent = ({info}) => {
    const {authorImage, authorName, blogTitle, coverImage, readTime} = info;
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
                    <p>{readTime} min read <a className='ms-2' href=""><FontAwesomeIcon icon={faBookmark} /></a></p>
                </div>
            </div>
            <h2>{blogTitle}</h2>
            {
                info.tags.map( (tag) => <span style={{color: "rgba(17, 17, 17, 0.6)", fontSize: "20px", fontWeight:"500", marginRight: "15px"}}>#{tag}</span>)
            }
            <br />
            <a style={{fontSize: "20px", fontWeight:"500", display: "block", marginTop: "20px"}} href="">Mark as read</a>
        </div>
    );
};

export default BlogContent;