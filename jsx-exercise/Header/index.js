import React, { PropTypes } from 'react';

export default function Header(props) {
  const { project, navigationLinks } = props;
  return (
    <nav className="navbar navbar-static-top navbar-dark bg-inverse ">
      <a href="#" className="navbar-brand">{project}</a>
      <ul className="nav navbar-nav">
        {navigationLinks.map(item =>
          <li className="nav-item" key={item.text}>
            <a href={item.href} className="nav-link">{item.text}</a>
          </li>)}
      </ul>
    </nav>
  );
}

Header.propTypes = {
  project: PropTypes.string.isRequired,
  navigationLinks: PropTypes.any
};
