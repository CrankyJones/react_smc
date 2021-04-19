import React from "react";
import Post from "./Post";


const masterPostList = [
  {
    name: 'Bill Harrison' ,
    post: 'I got a new turtle today.'
  },
  {
    name: 'Joe Black' ,
    post: 'Nice to meet you!'
  },
  {
    name: 'Cathy Ford' ,
    post: 'It\'s my kid\'s birthday!.'
  }
];


function PostList(){
  return (
    <React.Fragment>
      <hr/>
      <input value="What's happening?"/>
      {masterPostList.map((post, index) =>
        <Post name={post.name}
              post={post.post}
              key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;