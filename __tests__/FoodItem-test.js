jest.dontMock('../views/FoodItem.js');

import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import FoodItem from '../views/FoodItem'

describe('FoodItem component', () => {

    it('FoodItem should exist', () => {
        expect(shallow(<FoodItem />)).toBeTruthy();
    });

    it('FoodItem should contain <description />', () => {
        expect(mount(<FoodItem />).find('.description')).toBeTruthy();
    });
});
