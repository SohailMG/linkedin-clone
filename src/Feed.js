import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'

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
            </div>
            
        </div>
    )
}

export default Feed

