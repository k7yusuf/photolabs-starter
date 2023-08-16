import { useReducer, useEffect } from 'react';

// Define action types
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_LIKE: 'TOGGLE_LIKE', // Add the new action type
  // Add more action types as needed
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotoIds: [...state.favPhotoIds, action.payload.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload.photoId),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photoData,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topicData,
      };

    case ACTIONS.TOGGLE_LIKE:
      const updatedPhotoData = state.photoData.map(photo => {
        if (photo.id === action.payload.photoId) {
          return {
            ...photo,
            isLiked: !photo.isLiked,
          };
        }
        return photo;
      });
      return {
        ...state,
        photoData: updatedPhotoData,
      };

    // Handle other action types here

    default:
      return state;
  }
}

export function useApplicationData() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    favPhotoIds: [],
    selectedPhoto: null,
    photoData: [], // Initial photo data
    topicData: [], // Initial topic data
  });

  // Define your actions using the dispatch function
  const updateToFavPhotoIds = (newFavPhotoIds) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId: newFavPhotoIds } });
  };

  const removeFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
  };

  const setPhotoData = (photoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData } });
  };

  const setTopicData = (topicData) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData } });
  };

  const toggleLike = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: { photoId } });
  };

  useEffect(() => {
    // Fetch photo data from the API
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(photoData => {
        setPhotoData(photoData); // Dispatch the fetched photo data to the state
      })
      .catch(error => {
        // Handle error if needed
      });

    // Fetch topic data from the API
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(topicData => {
        setTopicData(topicData); // Dispatch the fetched topic data to the state
      })
      .catch(error => {
        // Handle error if needed
      });

    // ... other side effects

  }, []);

  return {
    state,
    updateToFavPhotoIds,
    removeFavPhoto,
    setPhotoData,
    setTopicData,
    toggleLike, // Add the toggleLike function
    // ... other actions
  };
}
