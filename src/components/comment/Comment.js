import React from "react";
import moment from "moment";
import "./_comment.scss";
const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;

  return (
    <div className="p-2 comment d-flex">
      <img src={authorProfileImageUrl} alt="" className="mr-3 rounded-circle" />
      <div className="comment__body">
        <p className="mb-2 comment__header">
          {authorDisplayName} •
          <span className="time text-white-50">
            {moment(publishedAt).fromNow()}
          </span>
        </p>
        <p className="mb-0 text-white comment__text">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
