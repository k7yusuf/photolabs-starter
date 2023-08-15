import React, { useState } from 'react';
import { FavProvider } from './components/FavContext'; 
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import topics from './mocks/topics';
import photos from './mocks/photos';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleLike = (photoId) => {
    // Implement your toggle logic here
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <FavProvider>
      <div className="App">
        <TopNavigationBar />
        <div className="home-route__content">
          <TopicList topics={topics} />
          <PhotoList photos={photos} toggleLike={toggleLike} openModal={openModal} />
        </div>
        {selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={closeModal}
          />
        )}
      </div>
    </FavProvider>
  );
};

export default App;
