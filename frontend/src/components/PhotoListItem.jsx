import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";

const PhotoListItem = (props) => {
  const { imageSource, profile, username, location } = props.data;

  // State to track whether the photo is favorited
  const [isFavorited, setIsFavorited] = useState(false);

  // Function to toggle the favorite status
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-item">
      <img src={imageSource} alt="Photo" className="photo-image" />
      <div className="photo-details">
        <div className="user-profile">
          <img src={profile} alt="Profile" className="profile-image" />
          <span className="username">{username}</span>
        </div>
        <div className="location">
          <span className="city">{location.city},</span>
          <span className="country">{location.country}</span>
        </div>
      </div>
      <FavIcon
        selected={isFavorited}
        onClick={toggleFavorite} // Pass the toggleFavorite function as onClick handler
      />
    </div>
  );
};

PhotoListItem.propTypes = {
  data: PropTypes.shape({
    imageSource: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;

