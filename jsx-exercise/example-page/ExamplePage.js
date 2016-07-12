import React, { PropTypes } from 'react';

import Header from '../Header';
import Jumbotron from '../Jumbotron';

const ExamplePage = ({
  project,
  navigationLinks,
  jumbotron
}) => (
  <div>
    <Header project={project} navigationLinks={navigationLinks} />
    <Jumbotron {...jumbotron} />
  </div>
);

ExamplePage.propTypes = {
  project: PropTypes.string.isRequired,
  navigationLinks: PropTypes.array.isRequired,
  jumbotron: PropTypes.object.isRequired
};

export default ExamplePage;
