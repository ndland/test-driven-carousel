import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<CarouselButton />);
    expect(wrapper.type()).toBe('button');
  });

  // it('passes `children` through the <button>', () => {
  //   const text = 'Button text';
  //   const wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
  //   expect(wrapper.prop('children')).toBe(text);
  // });
});
