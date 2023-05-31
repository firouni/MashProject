import React, { useState } from 'react';
import './App.css';
import Navbar from './compos/Navbar';
import Home from './compos/Home';
import Posts from './compos/Posts';
import { Routes, Route } from "react-router-dom";
import { PostsData } from './endPoint'
    console.log(PostsData);

function App() {
  const [posts, setPosts] = useState(PostsData);
    console.log(setPosts);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Posts posts={posts} />
      {/*<NavbarDropdown placeHolder="Style..." options={options} />*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
