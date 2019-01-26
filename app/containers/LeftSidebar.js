import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import List from '../components/ui/List';
import IconHamburger from '../components/icons/IconHamburger';
import Sidebar, { ButtonSidebar } from '../components/ui/Sidebar';

// eslint-disable-next-line react/prop-types
const itemRender = ({ path, title }) => <Link to={path}>{title}</Link>;

export default function LeftSidebar() {
  return (
    <Sidebar position="left">
      <ButtonSidebar>
        <IconHamburger />
      </ButtonSidebar>
      <h3>Меню</h3>
      <List values={routes} itemRender={itemRender} />
    </Sidebar>
  );
}
