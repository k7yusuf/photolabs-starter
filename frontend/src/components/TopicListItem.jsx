import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic }) => {
  return (
    <li className="topic-list__item">
      <span>{topic.label}</span>
    </li>
  );
};

export default TopicListItem;
