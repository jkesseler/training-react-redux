import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const randomImagePage = ({ imageMp4Url }) => (
  <div>
    <h1>Hello image!</h1>
    {!imageMp4Url
      ? <div>Loading...</div>
      : <video src={imageMp4Url} autoPlay loop />
    }
  </div>
);

randomImagePage.propTypes = {
  imageMp4Url: PropTypes.string,
};

function mapStateToProps(state) {
  return { imageMp4Url: state.randomImage.imageMp4Url };
}

export default connect(mapStateToProps)(randomImagePage);
