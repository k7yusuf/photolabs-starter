import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "New York",
      country: "USA",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Jane Doe",
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Paris",
      country: "France",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "John Smith",
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  },
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <div className="photo-list">
        {photos.map(photo => (
          <PhotoListItem key={photo.id} data={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
