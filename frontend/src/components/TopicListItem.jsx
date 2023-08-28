import React from "react";
import axios from "axios";

import "styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title, getTopicPhotos } = props;

  const getPhotos = (id) => {
    axios
      .get(`/api/topics/photos/${id}`)
      .then((res) => {
        getTopicPhotos(res.data);
      })
      .catch((err) =>
        console.log(
          "An unexpected error occured attempting to perform request.",
          err
        )
      );
  };

  return (
    <>
      <div className="topic-list--item">
        {/* Insert React */}
        <a href="#" onClick={(e) => {
          e.preventDefault()
          getPhotos(id)}}>{title}</a>
      </div>
    </>
  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: "Nature",
  link: "link placeholder",
};
export default TopicListItem;