import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <div className="home-route__content">
        <TopicList topics={topics} />
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default App;
