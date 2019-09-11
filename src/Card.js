import React from 'react';
import { Button, Segment, Icon }  from "semantic-ui-react";
// import App from './App.css';


const Card = ({ id, front, back, remove }) => (
  
  <div className="card" key={id} >
    
      <div className="center">{front}</div>
      <div className="center">{back}</div>
      <Button color="red" onClick={() => remove(id)}>
          Delete
      </Button>
      
   
    
       
        </div>
)


export default Card;
