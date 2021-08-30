import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header/>
      {/* Main Body */}
      <div className="app-body">
        {/* SIDEBAR */}
        <Sidebar/>
        {/* FEED */}
        <Feed/>
        {/* RIGHT SIDE */}
        
      </div>
    </div>
  );
}

export default App;
