import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {

    const recentItem = (topic )=>(
        <div className="sidebar-recentitem">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className="sidebar">
      {/* SIDEBAR TOP */}
      <div className="sidebar-top"> 
        <img
          src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Sohail Gsais</h2>
        <h4>gsaissohail@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you </p>
          <p className="sidebar-statNumber">2,444</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post </p>
          <p className="sidebar-statNumber">2,444</p>
        </div>
      </div>
      
      {/* SIDEBAR BOTTOM */}
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('Vuejs')}
        {recentItem('Programming')}
        {recentItem('Web Development')}
      </div>
    </div>
  );
};

export default Sidebar;
