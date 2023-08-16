import React, { useState, useEffect } from 'react';
import { FavProvider } from './components/FavContext'; 
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likes, setLikes] = useState(0);
  const {
    state,
    updateToFavPhotoIds,
    removeFavPhoto,
    setPhotoData,
    setTopicData,
  } = useApplicationData();

  const toggleLike = (photoId) => {
    // Implement your toggle logic here
    // Update the favorite photo ids using updateToFavPhotoIds action
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    document.body.className = `bg--${likes % 2}`;
  }, [likes]);

  useEffect(() => {
    if (likes > 0) {
      const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
      return () => clearTimeout(timeout); 
    }
  }, [likes]);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(photoData => {
        setPhotoData(photoData);
      })
      .catch(error => {
        // Handle error if needed
      });

    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(topicData => {
        setTopicData(topicData);
      })
      .catch(error => {
        // Handle error if needed
      });

    // ... other side effects

  }, [setPhotoData, setTopicData]);

  return (
    <FavProvider>
      <div className="App">
        <TopNavigationBar />
        <div className="home-route__content">
          <TopicList topics={state.topicData} />
          <HomeRoute photoData={state.photoData} topicData={state.topicData} />
          <PhotoList
            photos={state.photoData}
            toggleLike={toggleLike} // Pass the toggleLike function
            openModal={openModal}
          />
        </div>
        {selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={closeModal}
            toggleLike={toggleLike}
          />
        )}
      </div>
    </FavProvider>
  );
};

export default App;
