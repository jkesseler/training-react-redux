import React, { Component, PropTypes } from 'react';
import { searchGiphy } from './giphy-search-service.js';

const GiphyListView = ({
  message,
  giphyList,
}) => {
  if (message) {
    return <p>{message}</p>;
  }

  return (<div>{
    giphyList.map(({
      id,
      images: {
        original: {
          mp4,
        },
      },
    }) => <p key={id}><video src={mp4} autoPlay loop /></p>)
  }</div>);
};

GiphyListView.propTypes = {
  message: PropTypes.string,
  giphyList: PropTypes.array,
};

class GiphySearchPage extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };

    this.onChange = e => this.setState({
      name: e.target.value,
    });

    this.onSubmit = (e) => {
      this.setState({
        loading: true
      });

      e.preventDefault();
      searchGiphy(this.state.name)
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
          loading: false
        });
      });
    };
  }

  render() {
    return (
      <div>
        {this.state.loading && <h1>Loading ..</h1>}
        <form onSubmit={this.onSubmit}>
          <p>
            Search:
            <input name="searchTerm" onChange={this.onChange} />
          </p>
        </form>
        <GiphyListView giphyList={this.state.data} message={this.state.message} />
        <pre>state = {JSON.stringify(this.state, null, ' ')}</pre>
      </div>
    );
  }
}

export default GiphySearchPage;
