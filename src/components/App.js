import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import axios from "axios";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/toys')
    .then((response)=>setToys(response.data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addToy(newToy){
    setToys([...toys,newToy])
  }
  function deleteToy(trashToy){
    const updatedToys=toys.filter((toy)=>toy.id!=trashToy.id)
    setToys(updatedToys)
  }
  function updateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}
      deleteToy={deleteToy}
      updatedToy={updateToy}
      />
    </>
  );
}

export default App;