import React from "react";
import { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import { CalendarViewDay, EventNote, Subscriptions } from "@material-ui/icons";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { seletUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(seletUser);
  const [posts, setPosts] = useState([]);
  const [postInput, setpostInput] = useState([]);

  // RENDERING ALL POSTS FROM FIREBASE
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  // STORING NEW POST TO db
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: postInput,
      photUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setpostInput("");
  };
  return (
    <div className="feed">
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={postInput}
              onChange={(e) => {
                setpostInput(e.target.value);
              }}
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="orange" />
          <InputOption title="Event" Icon={EventNote} color="red" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDay}
            color="green"
          />
          <InputOption
            title="Write article"
            Icon={CalendarViewDay}
            color="green"
          />
        </div>
      </div>
      {/* POSTS */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
