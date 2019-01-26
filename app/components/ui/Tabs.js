import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TabsContext = React.createContext();

export default class Tabs extends Component {
  state = { activeTabId: null };

  toggleTab = activeTabId => this.setState({ activeTabId });

  render() {
    const { activeTabId } = this.state;
    const { children } = this.props;

    return (
      <TabsContext.Provider
        value={{
          activeTabId,
          toggleTab: this.toggleTab
        }}
      >
        {children}
      </TabsContext.Provider>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export const Tab = ({ children, tabId }) => (
  <TabsContext.Consumer>
    {({ activeTabId }) => (activeTabId === tabId ? children : null)}
  </TabsContext.Consumer>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  tabId: PropTypes.string.isRequired
};

export const TabTitle = ({ children, tabId, ...restProps }) => (
  <TabsContext.Consumer>
    {({ activeTabId, toggleTab }) => {
      const isActive = activeTabId === tabId;
      return React.cloneElement(children, {
        isActive,
        onClick: () => toggleTab(tabId),
        ...restProps
      });
    }}
  </TabsContext.Consumer>
);

TabTitle.propTypes = {
  children: PropTypes.element.isRequired,
  tabId: PropTypes.string.isRequired
};
