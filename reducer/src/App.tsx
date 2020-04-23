import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Post} from './components/post/post-list'
import { PostListReducer } from './components/post/post-list-reducer';

function App() {
  return (
    <div className="App">
      <Post/>
      <PostListReducer />
    </div>
  );
}

export default App;
