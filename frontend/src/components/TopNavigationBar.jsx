import React from 'react';
import FavBadge from './FavBadge'; // Import the FavBadge component
import { useFavContext } from './FavContext'; // Import the useFavContext hook
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  // Access the context
  const { likedPhotos } = useFavContext();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__nav">
        <FavBadge isFavPhotoExist={likedPhotos.length > 0} /> {/* Pass the condition */}
        {likedPhotos.length > 0 && (
          <div className="notification-badge"> {/* Add a notification badge */}
            <span className="notification-badge__text">You have liked photos</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopNavigationBar;