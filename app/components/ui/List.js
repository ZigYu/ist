import React from 'react';
import PropTypes from 'prop-types';
import { createPosed } from '../Animate';
import styles from './List.css';

const ItemBox = createPosed({
  open: {
    opacity: 1,
    x: '0%',
    y: '0%',
    transition: { type: 'tween', duration: 400 }
  },
  closed: {
    opacity: 0,
    x: '-20%',
    y: '-10%',
    transition: { type: 'tween', duration: 1000 }
  }
});

export default class List extends React.PureComponent {
  render() {
    const { values, itemRender } = this.props;

    return (
      <div className={styles.list}>
        {values.map((value, i) => {
          const previous = values[i - 1];
          const previousCategory = previous && previous.category;

          return (
            <ItemBox key={value.id}>
              {previousCategory !== value.category ? (
                <React.Fragment>
                  {previous ? <hr /> : null}
                  <div className={styles.categoryTitle}>
                    {value.categoryTitle}
                  </div>
                </React.Fragment>
              ) : null}
              <div className={styles.listItem}>{itemRender(value)}</div>
            </ItemBox>
          );
        })}
      </div>
    );
  }
}

List.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string,
      categoryTitle: PropTypes.string
    })
  ).isRequired,
  itemRender: PropTypes.func
};

List.defaultProps = {
  itemRender: ({ title }) => title
};
