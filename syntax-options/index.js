import React from 'react';
// ES5 way
export const Classic = React.createClass({
  render() {
    return <div>Hello world from classic component</div>;
  }
});

// ES6 class
export class Classy extends React.Component {
  render() {
    return <div>Hello world from classy component</div>;
  }
}

// ES6 functional stateless
export function Functional() {
  return <div>Hello world from functional component</div>;
}
