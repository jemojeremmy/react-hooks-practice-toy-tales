import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,deleteToy,updateToy}) {
  const toyCards=toys.map((toy)=>(
    <ToyCard key={toy.id}
    toy={toy}
    deleteToy={deleteToy}
    updateToy={updateToy}
    />
  ))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;