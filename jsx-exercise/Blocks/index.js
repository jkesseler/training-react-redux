import React, { PropTypes } from 'react';

import Block from './Block.js';
import Button from '../Button';

export default function Blocks(props) {
  const { heading, body, button } = props;
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{heading}</h1>
        <p>{body}</p>
        <p><Button href={button.href}>{button.text}</Button></p>
      </div>
    </div>
   );
}

Blocks.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.object
};
