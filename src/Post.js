import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import {
  ChatBubbleOutline,
  SendOutlined,
  ShareOutlined,
} from "@material-ui/icons";

const Post = forwardRef(
  ({ name, description, message, photoUrl, timestamp }, ref) => {
    // const getDate = (timestamp) => {
    //   return new Date(timestamp.seconds * 1000).toString();
    // };
    return (
      <div ref={ref} className="post">
        <div className="post-header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <small style={{ fontSize: "10px" }}>{Math.floor(Math.random() * 10)}d</small>
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
    );
  }
);

export default Post;
