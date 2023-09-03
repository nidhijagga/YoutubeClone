import React from "react";

const commentsData = [
  {
    name: "Alice",
    text: "This is a comment at level 1",
    replies: [
      {
        name: "Bob",
        text: "This is a reply at level 2",
        replies: [
          {
            name: "Charlie",
            text: "This is a reply at level 3",
            replies: [
              {
                name: "David",
                text: "This is a reply at level 4",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Eve",
        text: "Another reply at level 2",
        replies: [],
      },
    ],
  },
  {
    name: "Frank",
    text: "A comment at level 1",
    replies: [
      {
        name: "Grace",
        text: "A reply at level 2",
        replies: [],
      },
    ],
  },
  {
    name: "Hannah",
    text: "Comment at level 1",
    replies: [
      {
        name: "Ivy",
        text: "Reply at level 2",
        replies: [
          {
            name: "Jack",
            text: "Reply at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Kelly",
    text: "Comment at level 1",
    replies: [
      {
        name: "Liam",
        text: "Reply at level 2",
        replies: [],
      },
      {
        name: "Mia",
        text: "Another reply at level 2",
        replies: [],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="mt-2 flex bg-gray-100 p-2 rounded-lg w-3/5">
      <div className="flex">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user-icon"
        />
      </div>
      <div className="ml-2">
        <p className="font-bold h-8">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) =>
  comments.map((comment, i) => {
    return (
      <div key={i}>
        <Comment data={comment} />
        <div className="pl-5 border-l-gray-400 border-l">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
