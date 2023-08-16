import React, { useContext } from "react";
import TopicListItem from "./TopicListItem";
import { FavContext } from "./FavContext";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
  // ... other topics
];

const TopicList = ({ setSelectedTopic }) => {
  const { fetchPhotosByTopic } = useContext(FavContext); // Use the context

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Update the selected topic in the state
    fetchPhotosByTopic(topic.id); // Call the function to fetch photos
  };

  return (
    <div className="top-nav-bar__topic-list">
      <ul>
        {sampleDataForTopicList.map((topic) => (
          <TopicListItem
            key={topic.id}
            topic={topic}
            onClick={() => handleTopicClick(topic)} // Attach the onClick handler
          />
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
