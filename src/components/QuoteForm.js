import React from 'react';
import './QuoteForm.css';
const MAX_LENGTH = 30; // Feel free to change the value
class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value.length <= MAX_LENGTH) {
      this.setState({ character: event.target.value });
    }
  }

  render() {
    return (
      <form className="QuoteForm">
        <label htmlFor="character">Character:</label>
        <input
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <p>tu as écris: {this.state.character}</p>
      </form>
    );
  }
}

export default QuoteForm;
