import React from 'react';
import PropTypes from 'prop-types';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({ text, onClick, backgroundColor }) => (
  <div className="rmdb-loadmorebtn" style={{backgroundColor:backgroundColor}} onClick={onClick}>
    <p>{text}</p>
  </div>
)

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default LoadMoreBtn;