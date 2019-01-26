import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import withCards from '../hoc/withCards';
import withConfig from '../hoc/withConfig';
import withRouter from '../hoc/withRouter';
import withLesson from '../hoc/withLesson';
import MainContent from '../components/MainContent';
import routes from '../constants/routes';

import App from '../components/App';
import LeftSidebar from './LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Home from '../components/Home';
import Cards from '../components/cards/Cards';
import LessonColorHouses from '../components/lessons/colorHouses/LessonColorHouses';

const components = {
  Home,
  CardsPage: withCards(Cards),
  LessonColorHouses: withCards(LessonColorHouses)
};

const RightSidebarContainer = withLesson(RightSidebar);

const getStub = componentName => () => <div>{componentName} не реализован</div>;

class AppContainer extends Component {
  componentDidMount() {
    const { update, config } = this.props;
    update(config);
  }

  render() {
    const {
      location: { pathname }
    } = this.props;

    return (
      <App>
        <LeftSidebar />
        <MainContent pathname={pathname}>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route
                exact
                key={path}
                path={path}
                component={components[component] || getStub(component)}
              />
            ))}
          </Switch>
        </MainContent>
        <RightSidebarContainer />
      </App>
    );
  }
}

AppContainer.propTypes = {
  update: PropTypes.func.isRequired,
  config: PropTypes.shape({
    volumeMusic: PropTypes.number.isRequired,
    volumeSound: PropTypes.number.isRequired,
    baseColor: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(withConfig(AppContainer));
