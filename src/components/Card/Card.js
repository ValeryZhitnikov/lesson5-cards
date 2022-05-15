import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Button from './Button/Button';

function Card(props) {
  const { title, text, buttonText, buttonType, buttonLink } = props;

  return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {text && <p className="card-text">{text}</p>}
        <Button type={buttonType} link={buttonLink}>{buttonText}</Button>
      </div>
    </div>
  )
}

Card.defaultProps = {
  buttonType: 'primary',
  buttonText: 'Go somewhere',
  buttonLink: '#'
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttonType: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

export default Card;
