import React from 'react';


function QuoteCard({ simpson }) {
  return (
    <div className="QuoteCard">
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <h1 >{simpson.character}</h1>
      <p>{simpson.quote}</p>
      
    </div>
  );
};
/*class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }
  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span
              className={this.state.favorite ? 'is-favorite' : ''}
              onClick={event => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite });
              }}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}*/

export default QuoteCard;
