import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import posed from 'react-pose';

const HouseBox = posed.div({
  roofInstalled: {
    scaleY: 1,
    scaleX: 1,
    y: 1,
    transition: {
      scaleX: ({ to }) => ({
        type: 'keyframes',
        values: [1.1, to],
        times: [0.25, 1]
      }),
      scaleY: ({ to }) => ({
        type: 'keyframes',
        values: [0.9, to],
        times: [0.25, 1]
      }),
      y: ({ to }) => ({
        type: 'keyframes',
        values: [10, to],
        times: [0.25, 1]
      })
    }
  }
});

// 1 крыша 1
// 10 крыша 2
// 4 крыша_конек
// 3 корпус 1
// 11 корпус 2
// 16 корпус_дверь
export default function House({ color, hideRoof, hideCorpus, pose }) {
  const col = Color(color).saturate(-0.3);
  const color1 = col.darken(0.1).hex();
  const color2 = col.darken(0.2).hex();
  const color3 = col.darken(0.3).hex();
  const color5 = col.darken(0.5).hex();

  const fills = {
    roof1: color1,
    roof2: color2,
    roof3: color5,
    corpus1: color1,
    corpus2: color2,
    corpus3: color3,
    door: color3
  };

  return (
    <HouseBox pose={pose}>
      <svg viewBox="0 0 187.02 125.44">
        <defs>
          <clipPath id="clipPathHouse">
            <polygon
              fill={fills.roof1}
              points="140.86 16.2 46.16 16.2 15 52.14 77.32 52.14 172.02 52.14 140.86 16.2"
            />
          </clipPath>
        </defs>

        <g opacity={hideRoof ? '0' : '1'}>
          <rect fill={fills.roof2} height="4.13" width="23.5" x="113.86" />
          <rect
            fill={fills.roof3}
            height="35.62"
            width="20.5"
            x="115.36"
            y="4.14"
          />
          <rect
            fill={fills.roof3}
            height="3.83"
            width="104.5"
            x="41.26"
            y="12.38"
          />
          <polygon
            fill={fills.roof1}
            points="140.86 16.2 46.16 16.2 15 52.14 77.32 52.14 172.02 52.14 140.86 16.2"
          />
          <g clipPath="url(#clipPathHouse)">
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="9.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="12.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="15.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="18.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="21.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="24.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="27.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="30.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="33.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="36.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="39.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="42.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="45.79"
            />
            <rect
              fill={fills.roof2}
              height="1.17"
              width="159.34"
              x="13.84"
              y="48.79"
            />
          </g>
        </g>

        <g opacity={hideCorpus ? '0' : '1'}>
          <rect
            fill={fills.corpus1}
            height="66.47"
            width="146.51"
            x="20.25"
            y="52.13"
          />
          <g opacity="0.5">
            <rect
              fill="#d17b35"
              height="2.55"
              width="146.51"
              x="20.25"
              y="116.05"
            />
          </g>
          <rect
            fill="#d17b35"
            height="2.41"
            opacity="0.5"
            width="146.52"
            x="20.25"
            y="52.13"
          />

          <polygon
            fill={fills.corpus2}
            points="118.68 52.51 118.68 118.73 68.58 118.73 68.58 52.52 93.64 23.63 118.68 52.51"
          />
          <g opacity="0.5">
            <rect
              fill="#d17b35"
              height="2.55"
              width="50.1"
              x="68.58"
              y="116.05"
            />
          </g>
          <polygon
            fill={fills.corpus3}
            points="127.74 62.98 123.48 62.98 118.56 57.31 93.51 28.42 68.46 57.31 63.54 62.98 59.27 62.98 68.46 52.4 93.51 23.5 118.56 52.39 127.74 62.98"
          />
          <rect
            fill="#C0E6FA"
            height="24.59"
            width="24.69"
            x="32.34"
            y="74.4"
          />
          <g opacity="0.4">
            <polygon
              fill="#fff"
              points="57.03 74.39 57.03 75.4 33.48 98.99 32.34 98.99 32.34 92.41 49.79 74.39 57.03 74.39"
            />
            <polygon
              fill="#fff"
              points="57.03 78.38 57.03 80.98 39.58 98.99 36.75 98.99 57.03 78.38"
            />
            <polygon
              fill="#fff"
              points="57.03 74.39 57.03 75.4 33.48 98.99 32.34 98.99 32.34 92.41 49.79 74.39 57.03 74.39"
            />
            <polygon
              fill="#fff"
              points="57.03 78.38 57.03 80.98 39.58 98.99 36.75 98.99 57.03 78.38"
            />
          </g>
          <rect fill="#fff" height="2.35" width="29.26" x="30.05" y="97.81" />
          <rect fill="#fff" height="2.35" width="29.26" x="30.05" y="73.23" />
          <path
            d="M57.54,99.49H31.83V73.9H57.54Zm-24.7-1H56.53V74.91H32.84Z"
            fill="#fff"
          />
          <rect fill="#fff" height="1.01" width="24.69" x="32.34" y="86.19" />
          <rect
            fill="#C0E6FA"
            height="24.59"
            width="24.69"
            x="130.24"
            y="74.4"
          />
          <g opacity="0.4">
            <polygon
              fill="#fff"
              points="154.93 74.39 154.93 75.4 131.38 98.99 130.24 98.99 130.24 92.41 147.69 74.39 154.93 74.39"
            />
            <polygon
              fill="#fff"
              points="154.93 78.38 154.93 80.98 137.48 98.99 134.65 98.99 154.93 78.38"
            />
            <polygon
              fill="#fff"
              points="154.93 74.39 154.93 75.4 131.38 98.99 130.24 98.99 130.24 92.41 147.69 74.39 154.93 74.39"
            />
            <polygon
              fill="#fff"
              points="154.93 78.38 154.93 80.98 137.48 98.99 134.65 98.99 154.93 78.38"
            />
          </g>
          <rect fill="#fff" height="2.35" width="29.26" x="127.95" y="97.81" />
          <rect fill="#fff" height="2.35" width="29.26" x="127.95" y="73.23" />
          <path
            d="M155.44,99.49H129.73V73.9h25.71Zm-24.7-1h23.69V74.91H130.74Z"
            fill="#fff"
          />
          <rect fill="#fff" height="1.01" width="24.69" x="130.24" y="86.19" />
          <rect
            fill="#d17b35"
            height="1.32"
            opacity="0.5"
            width="29.26"
            x="127.74"
            y="100.16"
          />
          <rect
            fill="#d17b35"
            height="1.32"
            opacity="0.5"
            width="29.26"
            x="30.05"
            y="100.16"
          />
          <rect
            fill="#d6c5b2"
            height="27.14"
            transform="translate(191.45 4.18) rotate(90)"
            width="39.08"
            x="74.09"
            y="84.24"
          />
          <rect
            fill={fills.door}
            height="36.27"
            width="24.34"
            x="81.47"
            y="79.68"
          />
          <path
            d="M103.15,113.29h-19v-31h19ZM84.43,113h18.41V82.64H84.43Z"
            fill="#C0E6FA"
          />
          <path
            d="M103.77,97.81a.78.78,0,1,1-1.55,0,.78.78,0,0,1,1.55,0Z"
            fill="#fff"
          />

          <path
            d="M103.9,59.92A10.29,10.29,0,0,0,94,50h-.65a10.3,10.3,0,0,0-10,10h0v.65h0a10.29,10.29,0,0,0,10,9.94v0H94v0a10.28,10.28,0,0,0,9.94-9.94h0v-.65Z"
            fill="#cf802e"
            opacity="0.15"
          />
          <path
            d="M102.16,60.24a8.54,8.54,0,0,1-8.53,8.53,5.55,5.55,0,0,1-.72,0c-.2,0-.41,0-.61-.07a7.23,7.23,0,0,1-1.14-.25,5.89,5.89,0,0,1-.59-.21L90.08,68a4.9,4.9,0,0,1-.78-.42s-.07,0-.12,0c-.21-.13-.4-.27-.6-.41a.23.23,0,0,1-.1-.07l0,0a6.66,6.66,0,0,1-.51-.44h0a6.14,6.14,0,0,1-.45-.43c-.06-.06-.11-.13-.16-.19s-.22-.25-.32-.37a5.12,5.12,0,0,1-.4-.55,2,2,0,0,1-.28-.46,7.71,7.71,0,0,1-.76-1.65c-.07-.24-.14-.48-.2-.73s-.07-.28-.08-.42a4.54,4.54,0,0,1-.1-.74,6.45,6.45,0,0,1,0-.76,8.53,8.53,0,0,1,8.52-8.52,8.27,8.27,0,0,1,1.88.21,8.44,8.44,0,0,1,4.88,3.12,8.55,8.55,0,0,1,1,1.59,8.45,8.45,0,0,1,.8,3.6Z"
            fill="#02121f"
          />
          <path
            d="M102.16,60.24H93.63V51.72a8.27,8.27,0,0,1,1.88.21,8.44,8.44,0,0,1,4.88,3.12,8.55,8.55,0,0,1,1,1.59,8.45,8.45,0,0,1,.8,3.6Z"
            fill="#C0E6FA"
          />
          <path
            d="M93.63,51.72v8.52H85.12A8.52,8.52,0,0,1,93.63,51.72Z"
            fill="#C0E6FA"
          />
          <path
            d="M93.63,60.24v8.53a5.55,5.55,0,0,1-.72,0c-.2,0-.41,0-.61-.07a7.23,7.23,0,0,1-1.14-.25,5.89,5.89,0,0,1-.59-.21L90.08,68a4.9,4.9,0,0,1-.78-.42s-.07,0-.12,0c-.21-.13-.4-.27-.6-.41a.23.23,0,0,1-.1-.07l0,0a6.66,6.66,0,0,1-.51-.44h0a6.14,6.14,0,0,1-.45-.43c-.06-.06-.11-.13-.16-.19s-.22-.25-.32-.37a5.12,5.12,0,0,1-.4-.55,2,2,0,0,1-.28-.46,7.71,7.71,0,0,1-.76-1.65c-.07-.24-.14-.48-.2-.73s-.07-.28-.08-.42a4.54,4.54,0,0,1-.1-.74,6.45,6.45,0,0,1,0-.76Z"
            fill="#C0E6FA"
          />
          <path
            d="M102.15,60.24a8.51,8.51,0,0,1-8.52,8.52V60.24Z"
            fill="#C0E6FA"
          />
          <g opacity="0.4">
            <path
              d="M100.39,55.05l-5.16,5.19-1.6,1.61L88.48,67l0,0a6.66,6.66,0,0,1-.51-.44h0a6.14,6.14,0,0,1-.45-.43c-.06-.06-.11-.13-.16-.19s-.22-.25-.32-.37a5.12,5.12,0,0,1-.4-.55,2,2,0,0,1-.28-.46,7.71,7.71,0,0,1-.76-1.65c-.07-.24-.14-.48-.2-.73l1.91-1.92,6.39-6.44,1.88-1.87A8.44,8.44,0,0,1,100.39,55.05Z"
              fill="#fff"
            />
          </g>
          <g opacity="0.4">
            <path
              d="M102.05,58.87l-1.38,1.37-7,7.07L92.3,68.65a7.23,7.23,0,0,1-1.14-.25,5.89,5.89,0,0,1-.59-.21L90.08,68l3.55-3.58,4.15-4.16,3.58-3.6A8.89,8.89,0,0,1,102.05,58.87Z"
              fill="#fff"
            />
          </g>
          <path
            d="M102.43,60.52H93.36V51.45h.27a8.8,8.8,0,0,1,8.8,8.79ZM93.91,60h8a8.25,8.25,0,0,0-8-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.91,60.52H84.84v-.28a8.8,8.8,0,0,1,8.79-8.79h.28ZM85.4,60h8V52A8.24,8.24,0,0,0,85.4,60Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.91,69h-.28a8.8,8.8,0,0,1-8.79-8.8V60h9.07ZM85.4,60.52a8.25,8.25,0,0,0,8,8v-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.63,69h-.27V60h9.07v.28A8.81,8.81,0,0,1,93.63,69Zm.28-8.52v8a8.26,8.26,0,0,0,8-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M102.43,60.52H93.36V51.45h.27a8.8,8.8,0,0,1,8.8,8.79ZM93.91,60h8a8.25,8.25,0,0,0-8-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.91,60.52H84.84v-.28a8.8,8.8,0,0,1,8.79-8.79h.28ZM85.4,60h8V52A8.24,8.24,0,0,0,85.4,60Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.91,69h-.28a8.8,8.8,0,0,1-8.79-8.8V60h9.07ZM85.4,60.52a8.25,8.25,0,0,0,8,8v-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <path
            d="M93.63,69h-.27V60h9.07v.28A8.81,8.81,0,0,1,93.63,69Zm.28-8.52v8a8.26,8.26,0,0,0,8-8Z"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.5"
          />
          <rect fill="#bdbcbc" height="6.84" width="187.02" y="118.6" />
          <rect
            fill="#e0dfdf"
            height="2.55"
            width="34.5"
            x="76.38"
            y="116.05"
          />

          <rect
            fill={fills.corpus2}
            height="1.5"
            width="26.12"
            x="0.66"
            y="112.66"
          />
          <polygon
            fill={fills.corpus2}
            points="8.16 103.63 8.16 118.6 2.49 118.6 2.49 103.63 5.33 101.02 8.16 103.63"
          />
          <polygon
            fill={fills.corpus2}
            points="16.61 103.63 16.61 118.6 10.94 118.6 10.94 103.63 13.78 101.02 16.61 103.63"
          />
          <polygon
            fill={fills.corpus2}
            points="25.06 103.63 25.06 118.6 19.39 118.6 19.39 103.63 22.22 101.02 25.06 103.63"
          />
          <rect
            fill={fills.corpus2}
            height="1.5"
            width="26.12"
            x="0.72"
            y="106.79"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="2.49"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="10.94"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="19.39"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="2.49"
            y="114.16"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="10.94"
            y="114.16"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="19.39"
            y="114.16"
          />

          <rect
            fill={fills.corpus2}
            height="1.5"
            width="26.12"
            x="160.18"
            y="112.66"
          />
          <polygon
            fill={fills.corpus2}
            points="167.63 103.63 167.63 118.6 161.96 118.6 161.96 103.63 164.79 101.02 167.63 103.63"
          />
          <polygon
            fill={fills.corpus2}
            points="176.07 103.63 176.07 118.6 170.41 118.6 170.41 103.63 173.25 101.02 176.07 103.63"
          />
          <polygon
            fill={fills.corpus2}
            points="184.53 103.63 184.53 118.6 178.85 118.6 178.85 103.63 181.69 101.02 184.53 103.63"
          />
          <rect
            fill={fills.corpus2}
            height="1.5"
            width="26.12"
            x="160.18"
            y="106.79"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="161.95"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="170.4"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="178.85"
            y="108.29"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="161.95"
            y="114.16"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="170.4"
            y="114.16"
          />
          <rect
            fill={fills.corpus3}
            height="1.5"
            width="5.67"
            x="178.85"
            y="114.16"
          />
        </g>
      </svg>
    </HouseBox>
  );
}

House.propTypes = {
  color: PropTypes.string.isRequired,
  hideRoof: PropTypes.bool,
  hideCorpus: PropTypes.bool,
  pose: PropTypes.string
};

House.defaultProps = {
  hideRoof: true,
  hideCorpus: false,
  pose: 'initial'
};
