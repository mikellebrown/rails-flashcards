import React from "react";
// import { Button, Table, } from "semantic-ui-react";
import Card from './Card.js';
import FlashCard from './FlashCard';
// import App from './App.css';
// import ReactCardFlip from 'react-card-flip';





const Cards = ({ cards, remove, toggle }) => (
   <span>
         { 
          cards.map( card => (
            <Card key={card.id} {...card} remove={remove} toggle={toggle} />
            
            ))
          }
          
          
  </span>
        

  );
  

export default Cards ;