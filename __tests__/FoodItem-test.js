jest.dontMock('../views/FoodItem.js');

import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import FoodItem from '../views/FoodItem'

describe('FoodItem component', () => {

    let wrapper = null;

    beforeEach( () => {
      wrapper = mount(<FoodItem />);
    });

    it('FoodItem should exist', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('FoodItem should contain <description />', () => {
        let desc = wrapper.find('.description');
        console.log(desc);
        expect(desc.length).toEqual(1);
    });
});
