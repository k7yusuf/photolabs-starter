import React from 'react';
import FavBadge from './FavBadge';
import { useFavContext } from './FavContext';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const { favPhotos } = useFavContext();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__nav">
        <FavBadge isFavPhotoExist={favPhotos.length > 0} />
        {favPhotos.length > 0 && (
          <div className="notification-badge">
            <span className="notification-badge__text">You have liked photos</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigationBar;