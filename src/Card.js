import React from 'react';
import { Button }  from "semantic-ui-react";
// import App from './App.css';


const Card = ({ id, front, back, remove, isFlipped, flipCard }) => (
  <div className="card" key={id} >
    { !isFlipped ?
      <div className="center">{front}</div>
      :
      <div className="center">{back}</div>
    }
  <Button color="green" onClick={() => flipCard(id)}>
  Flip
  </Button>
  <Button color="red" onClick={() => remove(id)}>
  Delete
  </Button>
  </div>
  )
  
  
  export default Card;
