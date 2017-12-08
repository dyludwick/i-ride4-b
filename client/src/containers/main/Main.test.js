import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  it('renders without imploding', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.length).to.equal(1);
  });
});
