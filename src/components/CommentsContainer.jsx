import React from "react";

const commentsData = [
  {
    name: "Yeshwant Thota",
    text: "Lorem ipsum dolor sit amet, consectetur ",
    replies: [],
  },
  {
    name: "Yeshwant Thota",
    text: "Lorem ipsum dolor sit amet, consectetur ",
    replies: [
      {
        name: "Yeshwant Thota",
        text: "Lorem ipsum dolor sit amet, consectetur ",
        replies: [
          {
            name: "Yeshwant Thota",
            text: "Lorem ipsum dolor sit amet, consectetur ",
            replies: [
              {
                name: "Yeshwant Thota",
                text: "Lorem ipsum dolor sit amet, consectetur ",
                replies: [],
              },
            ],
          },
          {
            name: "Yeshwant Thota",
            text: "Lorem ipsum dolor sit amet, consectetur ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Yeshwant Thota",
    text: "Lorem ipsum dolor sit amet, consectetur ",
    replies: [],
  },
  {
    name: "Yeshwant Thota",
    text: "Lorem ipsum dolor sit amet, consectetur ",
    replies: [
      {
        name: "Yeshwant Thota",
        text: "Lorem ipsum dolor sit amet, consectetur ",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 m-2 p-2 rounded-sm">
      <img
        className="h-9  m-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxanQgIy3Zk9wjYXsmjihLPdQ7vHN7eBw00wePYQdfA&s"
        alt="user"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text} </p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-4 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-semibold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
