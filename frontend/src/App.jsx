import React from 'react';
import { FavProvider } from './components/FavContext'; // Import the FavProvider
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  return (
    <FavProvider> {/* Wrap the components with the FavProvider */}
      <div className="App">
        <TopNavigationBar />
        <div className="home-route__content">
          <TopicList topics={topics} />
          <PhotoList photos={photos} />
        </div>
      </div>
    </FavProvider>
  );
};

export default App;
