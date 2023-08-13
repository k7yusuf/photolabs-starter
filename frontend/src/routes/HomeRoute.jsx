import React from 'react';
import TopNavigationBar from './TopNavigationBar'; // Import the TopNavigationBar component
import PhotoList from './PhotoList'; // Import the PhotoList component
import TopicList from './TopicList'; // Import the TopicList component
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar /> {/* Use the correct component */}
      <div className="home-route__content">
        <TopicList />
        <PhotoList />
      </div>
    </div>
  );
}

export default HomeRoute;