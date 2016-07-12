import React, { PropTypes } from 'react';


export default function Jumbotron(props) {
  const { heading, body } = props;
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{heading}</h1>
        <p>{body}</p>
        <p></p>
      </div>
    </div>
   );
}

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.object
};
