import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import { useFavContext } from './FavContext';

const PhotoListItem = (props) => {
  const { urls, profile, username, location } = props.data;

  // Access the context
  const { likedPhotos, toggleLike } = useFavContext();

  // Check if the current photo is liked
  const isPhotoLiked = likedPhotos.includes(props.data.id);

  // Function to toggle the favorite status using the context
  const toggleFavorite = () => {
    toggleLike(props.data.id);
  };

  return (
    <div className="photo-item">
      <img src={urls.regular} alt="Photo" className="photo-image" />
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
        selected={isPhotoLiked}
        onClick={toggleFavorite}
      />
    </div>
  );
};

PhotoListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    profile: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;
