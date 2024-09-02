import React from 'react';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <VideoGrid />
    </div>
  );
}

export default App;