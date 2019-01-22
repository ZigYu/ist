import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../../app/components/ui/Sidebar';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  position: 'left',
  children: <div>test</div>
};
const sidebar = shallow(<Sidebar {...props} />);
const clickButtonOpen = () => {
  sidebar.find('ButtonOpen').simulate('click', { stopPropagation: () => {} });
};

describe('<Sidebar />', () => {
  it('Структура Sidebar по умолчанию', () => {
    expect(sidebar).toMatchSnapshot();
  });

  it('Sidebar откроется после клика на Button', () => {
    clickButtonOpen();
    expect(sidebar.state().isOpen).toEqual(true);
  });

  it('Sidebar закроется после клика на Button', () => {
    clickButtonOpen();
    expect(sidebar.state().isOpen).toEqual(false);
  });
});
