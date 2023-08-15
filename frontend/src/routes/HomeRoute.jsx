import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar'; // Import the TopNavigationBar component
import PhotoList from '../components/PhotoList'; // Import the PhotoList component
import TopicList from '../components/TopicList'; // Import the TopicList component
import { FavProvider } from '../components/FavContext'; // Import the FavProvider
import FavBadge from '../components/FavBadge'; // Import the FavBadge component
import '../styles/HomeRoute.scss';

const HomeRoute = () => {



  
  return (
    <FavProvider> {/* Wrap the components with the FavProvider */}
      <div className="home-route">
        <TopNavigationBar />
        <div className="home-route__content">
          <TopicList />
          <PhotoList />
        </div>
        <FavBadge /> {/* Add the FavBadge component */}
      </div>
    </FavProvider>
  );
}

export default HomeRoute;