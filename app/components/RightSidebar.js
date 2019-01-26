import React from 'react';
import PropTypes from 'prop-types';
import { createPosed } from './Animate';
import Tabs, { Tab, TabTitle } from './ui/Tabs';
import Sidebar, { ButtonSidebar } from './ui/Sidebar';
import SettingsGlobalContainer from '../containers/SettingsGlobalContainer';
import SettingsLessonContainer from '../containers/SettingsLessonContainer';
import IconSettings from './icons/IconSettings';
import IconQuestionMark from './icons/IconQuestionMark';

export default function RightSidebar({ lesson: { manual } }) {
  return (
    <Sidebar position="right">
      <Tabs>
        <ButtonSidebar>
          <TabTitle tabId="settings">
            <TitleIcon>
              <IconSettings />
            </TitleIcon>
          </TabTitle>

          {manual ? (
            <TabTitle tabId="manual">
              <TitleIcon>
                <IconQuestionMark />
              </TitleIcon>
            </TabTitle>
          ) : null}
        </ButtonSidebar>

        <Tab tabId="settings">
          <SettingsLessonContainer />
          <SettingsGlobalContainer />
        </Tab>

        {manual ? (
          <Tab tabId="manual">
            <h4>Задание</h4>
            <div dangerouslySetInnerHTML={{ __html: manual }} />
          </Tab>
        ) : null}
      </Tabs>
    </Sidebar>
  );
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

const TitleIcon = ({ children, isActive, isOpen, onClick }) => {
  const pose = isActive && isOpen ? 'active' : 'inactive';
  const className = isActive && isOpen ? 'active' : 'default';

  return (
    <TitleBox pose={pose} onClick={onClick}>
      {React.cloneElement(children, { className })}
    </TitleBox>
  );
};

TitleIcon.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool
};
TitleIcon.defaultProps = {
  onClick: () => {},
  isOpen: false,
  isActive: false
};
