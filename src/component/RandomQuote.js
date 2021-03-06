import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      data: [],
    };
  }

  componentDidMount() {
    let data = [];
    let quote = '';
    let author = '';

    fetch(
      'https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json',
    )
      .then((data) => data.json())
      .then((d) => {
        data.push(d[Math.floor(Math.random() * Math.ceil(100))]);
        quote = data[0].quote;
        author = data[0].author;
        this.setState({
          quote,
          author,
        });
      });
  }

  handleQuote() {
    let data = [];
    let quote = '';
    let author = '';

    fetch(
      'https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json',
    )
      .then((data) => data.json())
      .then((d) => {
        data.push(d[Math.floor(Math.random() * Math.ceil(100))]);
        quote = data[0].quote;
        author = data[0].author;
        this.setState({
          quote,
          author,
        });
      });
  }

  handleTweet() {
    console.log('ho!');
  }

  render() {
    return (
      <div id='wrapper'>
        <h1 className='title'>Random Quote App</h1>

        <div id='quote-box'>
          <div id='text'>
            <p>{this.state.quote}</p>
          </div>
          <div id='author'>
            <h5>{this.state.author}</h5>
          </div>

          <div id='buttons'>
            <a
              id='tweet-quote'
              href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}`}
              // target='_blank'
              title='Post this quote on twitter!'>
              <span>
                <i className='fab fa-twitter twitter-icon' />
                tweet
              </span>
            </a>
            <button
              id='new-quote'
              className='buttons'
              onClick={this.handleQuote.bind(this)}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomQuote;
