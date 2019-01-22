import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidebarBox } from './ui/Sidebar';
import IconSettings from './icons/IconSettings';
import IconQuestionMark from './icons/IconQuestionMark';
import Tabs, { Tab } from './ui/Tabs';
import ButtonClose from './ui/ButtonClose';
import { createPosed } from './Animate';
import styles from './RightSidebar.css';
import SettingsGlobalContainer from '../containers/SettingsGlobalContainer';
import SettingsLessonContainer from '../containers/SettingsLessonContainer';

export default class RightSidebar extends Component {
  state = { isOpen: false };

  componentDidMount() {
    // используется портал для рендера кнопок вне Tabs
    const parentNode = this.rightSidebarRef.current;
    const childNode = this.tittlesContainer;
    childNode.classList.add(styles.titles);
    parentNode.insertBefore(childNode, parentNode.firstChild);
  }

  tittlesContainer = document.createElement('div');

  rightSidebarRef = React.createRef();

  openSidebar = () => this.setState({ isOpen: true });

  closeSidebar = () => this.setState({ isOpen: false });

  render() {
    const {
      lesson: { manual }
    } = this.props;
    const { isOpen } = this.state;
    const pose = isOpen ? 'open' : 'closed';

    return (
      <div className={styles.rightSidebar} ref={this.rightSidebarRef}>
        <SidebarBox
          pose={pose}
          className={styles.sidebarBox}
          onClick={this.openSidebar}
        >
          <Tabs
            isOpen={isOpen}
            positionTitles="left"
            tittlesContainer={this.tittlesContainer}
          >
            <ButtonClose isOpen={isOpen} onClick={this.closeSidebar} />

            <Tab
              title={
                <TitleIcon isOpen={isOpen}>
                  <IconSettings />
                </TitleIcon>
              }
            >
              <SettingsLessonContainer />
              <SettingsGlobalContainer />
            </Tab>

            {manual ? (
              <Tab
                title={
                  <TitleIcon isOpen={isOpen}>
                    <IconQuestionMark />
                  </TitleIcon>
                }
              >
                <div>
                  <h4>Задание</h4>
                  <div dangerouslySetInnerHTML={{ __html: manual }} />
                </div>
              </Tab>
            ) : null}
          </Tabs>
        </SidebarBox>
      </div>
    );
  }
}

RightSidebar.propTypes = {
  lesson: PropTypes.shape({
    manual: PropTypes.string
  }).isRequired
};

const TitleBox = createPosed({
  inactive: {
    scale: 1,
    x: 0
  },
  active: {
    scale: 1.3,
    x: '7px'
  }
});

const TitleIcon = ({ children, isActive, isOpen }) => {
  const pose = isActive && isOpen ? 'active' : 'inactive';
  const className = isActive && isOpen ? 'active' : 'default';

  return (
    <TitleBox pose={pose}>
      {React.cloneElement(children, { className })}
    </TitleBox>
  );
};
TitleIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool
};
TitleIcon.defaultProps = {
  isActive: false
};
