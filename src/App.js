import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch } from 'react-router-dom';
import { Container }  from 'semantic-ui-react';
import Home from './components/Home';
import About from "./components/About";
import FlashCard from './FlashCard';
import NoMatch from './components/NoMatch';





const App = () => (
  <>
  <Navbar />
  <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcard" component={FlashCard} />
        <Route component={NoMatch} />

      </Switch>
    </Container>
 </>
 
);


export default App;