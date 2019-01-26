import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar, { ButtonSidebar } from '../../app/components/ui/Sidebar';

Enzyme.configure({ adapter: new Adapter() });

const ButtonSidebarIcon = () => 'icon label';

const props = {
  position: 'left'
};
const sidebar = mount(
  <Sidebar {...props}>
    <ButtonSidebar>
      <ButtonSidebarIcon />
    </ButtonSidebar>
    <div>Sidebar content 1</div>
    <div>Sidebar content 2</div>
  </Sidebar>
);

const clickButton = component => {
  sidebar
    .find(component)
    .find('Button')
    .simulate('click', { stopPropagation: () => {} });
};

describe('<Sidebar />', () => {
  it('Sidebar откроется после клика на Button', () => {
    clickButton('ButtonSidebar');
    expect(sidebar.state().isOpen).toEqual(true);
    expect(sidebar.find('ButtonSidebarIcon').props().isOpen).toEqual(true);
  });

  it('Sidebar закроется после клика на Button', () => {
    clickButton('ButtonClose');
    expect(sidebar.state().isOpen).toEqual(false);
    expect(sidebar.find('ButtonSidebarIcon').props().isOpen).toEqual(false);
  });
});
