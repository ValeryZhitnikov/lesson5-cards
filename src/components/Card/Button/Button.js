import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { link, type } = props;
  return (
    <a href={props.link} className={`btn btn-${props.type}`}>{props.children}</a>
  )
}

Button.defaulProps = {
  link: '#',
  type: 'primary'
}

Button.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string
}

export default Button;
