import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {NotificationSetting} from './components/notification-setting/notification-setting'
import {OnlineOffline} from './components/online-offline/online-offline'
import {Post} from './components/post/post-list'
import { PostListReducer } from './components/post/post-list-reducer';

function App() {
  return (
    <div className="App">
      <OnlineOffline/>
      <NotificationSetting />
      <Post/>
      <PostListReducer />
    </div>
  );
}

export default App;
