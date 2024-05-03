import axios from "axios";
import React from "react";

function ToyCard({toy,deleteToy,updateToy}) {

  // const { id, name, image, likes } = toy;// speak of this way too
 function deleteaToy(){
   axios.delete(`http://localhost:3001/toys/${toy.id}`)
   .then((res)=>deleteToy(res.data))
 }
 function likeaToy(){
  const updateLikes = {
    likes: toy.likes + 1,
  };
  axios.patch(`http://localhost:3001/toys/${toy.id}`,updateLikes)
  .then((res)=>updateToy(res.data))
 }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
      alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={likeaToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteaToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;