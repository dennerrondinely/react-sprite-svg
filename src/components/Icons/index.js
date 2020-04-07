import React from 'react';
import PropTypes from 'prop-types';

import { SVG } from './styles';
import sprite from '../../assets/sprite.svg';

export default function Icons({ icon, size, color }) {
  return (
    <SVG
      viewBox="0 0 16 16"
      className={`icon icon-${icon}`}
      size={size}
      fill={color}
    >
      <use xlinkHref={`${sprite}#icon-${icon}`} />
    </SVG>
  );
}

Icons.defaultProps = {
  size: '50',
  color: '',
};

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
