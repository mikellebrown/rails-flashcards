import React, { Component } from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
// import Card from './Card';
import CardForm from './CardForm';
import FlashCard from './FlashCard';
import Cards from './Cards';
import Card from './Card';


class FlashCards extends Component {
  state = {
  cards: [
  { id: 1, front: "State", back: "State is a plain javascript object that we can store properties in.", toggling: false, },
  { id: 2, front: "Props", back: "Props are properties that can be passed down from parent to child.", toggling: false, },
  ],  
  };
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  newCard = (props) => {
    let card = { id: this.getId(),...props, };
    this.setState({ cards: [card,...this.state.cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card
     
    });
    this.setState({ cards: [...cards], });
    
  };
  toggleCard = (id) => {
    this.setState({
      cards: this.state.cards.map( card => {
        if (card.id === id) {
          return {...card, toggling: !card.toggling }
        }

          return card
        })
      });
    };

  render() {
 
  return (
    <Container style={styles.container}  textAlign="center" >
    <br />
    <Header as="h1">React Flash Cards</Header>
    <br />
    <CardForm newCard={this.newCard} />
    <Cards cards={this.state.cards} remove={this.removeCard} toggle={this.toggleCard} />
    </Container>
  
      );
    };
  };

  const styles = {
    container: {
      marginTop: "25px",

    },
  };
  
  

export default FlashCards;