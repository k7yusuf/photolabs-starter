import React from 'react';
import FavBadge from './FavBadge'; // Import the FavBadge component
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__nav">
        {/* Insert navigation elements */}
        <FavBadge count={5} /> {/* Example usage of FavBadge */}
      </div>
    </div>
  );
}

export default TopNavigationBar;