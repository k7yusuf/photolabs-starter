import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { urls, user, location } = props.data;
  const { favPhotos } = props;

  const isPhotoLiked = favPhotos.includes(props.data.id);
  const toggleFavorite = () => {
    props.toggleLike(props.data.id);
  };

  return (
    <div className="photo-item" onClick={props.onClick}>
      <img src={urls.regular} alt="Photo" className="photo-image" />
      <div className="photo-details">
        <div className="user-profile">
          <img src={user.profile} alt="Profile" className="profile-image" />
          <span className="username">{user.username}</span>
        </div>
        <div className="location">
          <span className="city">{location.city},</span>
          <span className="country">{location.country}</span>
        </div>
      </div>
      <div className="like-button">
        <button onClick={toggleFavorite}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG heart code here */}
          </svg>
        </button>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      profile: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  favPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleLike: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoListItem;
