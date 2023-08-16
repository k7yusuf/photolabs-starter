import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import { FavProvider } from '../components/FavContext';
import FavBadge from '../components/FavBadge';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photoData, topicData }) => {
  return (
    <FavProvider>
      <div className="home-route">
        <TopNavigationBar />
        <div className="home-route__content">
          <TopicList topics={topicData} /> 
          <PhotoList photoData={photoData} />
        </div>
        <FavBadge />
      </div>
    </FavProvider>
  );
}

export default HomeRoute;
