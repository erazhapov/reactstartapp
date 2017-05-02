import React from 'react';
import { shallow } from 'enzyme';
import Demo from '../Demo';

describe('Demo test', () => {
    it('Component props usage', () => {
        const demo = shallow(<Demo message="123" />);
        expect(demo.find('h1').text()).toEqual('123');
    });

    it('Component rendering (Snapshot)', () => {
        const demo = shallow(<Demo message="Hi!" />);
        expect(demo).toMatchSnapshot();
    })
});