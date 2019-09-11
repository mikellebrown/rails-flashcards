import React from 'react';
import { Form } from 'semantic-ui-react';


class CardForm extends React.Component {
  state = { front: "", back: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newCard(this.state);
    this.setState({ front: "", back: "", });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  
};
render() {
  return (
   
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          fluid 
          label="Front" 
          placeholder="Front" 
          name="front" 
          value={this.state.front} 
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid 
          label="Back" 
          placeholder="Back" 
          name="back" 
          value={this.state.back} 
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
        
      </Form.Group>
      
    </Form>
  )  
}
}

export default CardForm;