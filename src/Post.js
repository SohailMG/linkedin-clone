import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from "./InputOption";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { ChatBubbleOutline, SendOutlined, ShareOutlined } from '@material-ui/icons';

const Post = ({name,description,message,photoUrl}) => {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar/>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
                
            <InputOption title="Like" Icon={ThumbUpAltIcon} color="gray" />
            <InputOption title="Comment" Icon={ChatBubbleOutline} color="gray" />
            <InputOption title="Share" Icon={ShareOutlined} color="gray" />
            <InputOption title="Send" Icon={SendOutlined} color="gray" />
            </div>
            
        </div>
    )
}

export default Post
