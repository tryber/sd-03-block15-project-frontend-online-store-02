import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import '../style/rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      comment: '',
    };
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleHandle = this.onHandleHandle.bind(this);
    this.onHandleClean = this.onHandleClean.bind(this);
  }

  onHandleClick(value) {
    this.setState({ rating: value });
  }

  onHandleHandle(e) {
    this.setState({ comment: e.target.value });
  }

  onHandleClean() {
    this.setState({ comment: '', rating: 0 });
  }

  gerarStar() {
    const { rating } = this.state;
    {[...Array(5)].map((_star, i) => {
      const ratingValue = i + 1;
      return (
        <label htmlFor="starts">
          <input
            type="radio"
            name="stars"
            onClick={() => this.onHandleClick(ratingValue)}
          />
          <FaStar
            className="Star"
            color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
            size={30}

          />
        </label>
      );
    })}
  }

  render() {
    const { comment } = this.state;
    return (
      <div className="card border-primary mb-3" style={{ width: '18rem' }}>
        <textarea
          className="card-img-top"
          cols="33"
          data-testid="product-detail-evaluation"
          onChange={this.onHandleHandle}
          rows="5"
          value={comment}
        />
        <div className="card-body">
          <h5 className="card-title">Avaliação</h5>
          {this.gerarStar}
        </div>
        <button className="btn btn-primary" onClick={this.onHandleClean}>Enviar</button>
      </div>
    );
  }
}

export default Rating;
