import React from "react";
// import { Button, Table, } from "semantic-ui-react";
import Card from './Card.js';
// import App from './App.css';
// import ReactCardFlip from 'react-card-flip';





const Cards = ({ cards, remove, flipCard }) => (
   <span>
         { 
          cards.map( card => (
            <Card key={card.id} {...card} remove={remove} flipCard={flipCard} />
            
            ))
          }
          
          
  </span>
        

  );
  

export default Cards ;