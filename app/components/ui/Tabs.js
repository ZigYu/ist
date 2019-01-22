import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Animate, { Fade } from '../Animate';
import styles from './Tabs.css';

const cx = classNames.bind(styles);

export default class Tabs extends Component {
  state = { activeTabIndex: -1 };

  toggleTab = activeTabIndex => this.setState({ activeTabIndex });

  render() {
    const { activeTabIndex } = this.state;
    const { children, positionTitles, isOpen } = this.props;
    const position = styles[positionTitles];
    let activeTab;
    const tabTitles = [];
    const tabs = [];
    const childs = [];

    React.Children.toArray(children).forEach((child, i) => {
      if (child.props.isTab) {
        tabs.push(child);
      } else {
        childs.push(<div key={`child ${i}`}>{child}</div>);
      }
    });

    tabs.forEach((tab, i) => {
      tabTitles.push(tab.props.title);
      if (activeTabIndex === i) activeTab = tab;
    });

    return (
      <div className={cx(position, styles.tabs)}>
        <Titles
          {...this.props}
          activeTabIndex={isOpen ? activeTabIndex : -1}
          tabTitles={tabTitles}
          toggleTab={this.toggleTab}
        />
        {childs}
        <Animate>
          <Fade key={activeTabIndex} style={{ height: '100%' }}>
            {activeTab}
          </Fade>
        </Animate>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  isOpen: PropTypes.bool.isRequired,
  positionTitles: PropTypes.oneOf(['left'])
};

Tabs.defaultProps = {
  positionTitles: 'top'
};

const Titles = props => {
  const {
    positionTitles,
    activeTabIndex,
    tabTitles,
    toggleTab,
    tittlesContainer
  } = props;

  const position = styles[positionTitles];

  const content = (
    <div className={cx(position, styles.titles)}>
      {tabTitles.map((title, i) => {
        const isActive = activeTabIndex === i;
        const classNameTitle = cx(position, {
          title: true,
          active: isActive
        });

        return (
          <div key={i} className={classNameTitle} onClick={() => toggleTab(i)}>
            {React.cloneElement(title, { isActive })}
          </div>
        );
      })}
    </div>
  );

  if (tittlesContainer) return ReactDOM.createPortal(content, tittlesContainer);

  return content;
};

Titles.propTypes = {
  positionTitles: PropTypes.oneOf(['left']).isRequired,
  tittlesContainer: PropTypes.instanceOf(Element).isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  tabTitles: PropTypes.arrayOf(PropTypes.element).isRequired,
  toggleTab: PropTypes.func.isRequired
};

export const Tab = ({ children }) => (
  <div className={styles.tab}>{children}</div>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  isTab: PropTypes.bool // eslint-disable-line react/no-unused-prop-types
};

Tab.defaultProps = {
  isTab: true
};
