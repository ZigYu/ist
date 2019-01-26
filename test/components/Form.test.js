import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../../app/components/Form';
import ButtonSubmit from '../../app/components/ui/ButtonSubmit';
import FieldFilterWord from '../../app/components/fields/FieldFilterWord';

Enzyme.configure({ adapter: new Adapter() });

const pause = (delay = 100) =>
  new Promise(resolve => setTimeout(resolve, delay));

const onSubmit = jest.fn();

const defaultValues = {
  filterWord: 'initial word'
};

const form = mount(
  <Form onSubmit={onSubmit} defaultValues={defaultValues}>
    <FieldFilterWord />
    <ButtonSubmit>submit</ButtonSubmit>
  </Form>
);

const input = form.find('FieldFilterWord').find('input');

const clickButtonSubmit = () => {
  form
    .find('ButtonSubmit')
    .find('Button')
    .simulate('click', { stopPropagation: () => {} });
};

describe('<Form />', () => {
  it('должно установиться дефолтное значение для поля', () => {
    form.update();
    expect(input.instance().value).toEqual(defaultValues.filterWord);
  });

  it('функция onSubmit должна получить значение при нажатии на ButtonSubmit', async () => {
    const newWord = 'new word';
    input.simulate('change', {
      target: { value: newWord, name: 'filterWord' }
    });
    await pause();

    form.update();
    expect(input.instance().value).toEqual(newWord);
    expect(form.find('Input').props().value).toEqual(newWord);
    clickButtonSubmit();
    await pause();

    expect(onSubmit.mock.calls.length).toBe(1);
    expect(onSubmit.mock.calls[0]).toEqual([{ filterWord: newWord }]);
  });
});
