import React from "react";

function Post(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.post}</p> 
    </React.Fragment>


  );
}




export default Post;