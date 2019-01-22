import React from 'react';
import PropTypes from 'prop-types';

export default function IconNext({ className }) {
  return (
    <svg
      className={`icon ${className}`}
      height="72"
      width="72"
      viewBox="0 0 54 54"
    >
      <g>
        <path
          className={`icon ${className}`}
          d="M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0
          C53,41.359,41.359,53,27,53z"
        />
        <path
          className="icon-color-darkest"
          d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2
          C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"
        />
      </g>
      <g>
        <path
          className="icon-color-light"
          d="M36.144,28.017l-15.101,8.719C20.579,37.004,20,36.669,20,36.134V18.696
          c0-0.535,0.579-0.87,1.043-0.602l15.101,8.719C36.608,27.081,36.608,27.75,36.144,28.017z"
        />
        <path
          className="icon-color-light"
          d="M20.697,37.83c-0.936,0-1.697-0.761-1.697-1.696V18.696C19,17.761,19.761,17,20.697,17
          c0.295,0,0.588,0.078,0.846,0.228l15.101,8.719c0.531,0.307,0.848,0.855,0.848,1.469s-0.317,1.162-0.848,1.469l-15.101,8.719
          C21.285,37.752,20.992,37.83,20.697,37.83z M21,19.224v16.383l14.187-8.191L21,19.224z"
        />
      </g>
    </svg>
  );
}

IconNext.propTypes = {
  className: PropTypes.string
};

IconNext.defaultProps = {
  className: ''
};
