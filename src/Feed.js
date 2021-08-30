import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-inputcontainer">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOption title="Video" Icon={Subscriptions} color="orange"/>
                    <InputOption title="Event" Icon={EventNote} color="red"/>
                    <InputOption title="Write article" Icon={CalendarViewDay} color="green"/>
                </div>
            </div>
            {/* POSTS */}
            {/* TODO: CREATE Post.js & Post.css */}
            
        </div>
    )
}

export default Feed

