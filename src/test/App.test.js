import React from 'react';
import { shallow } from "enzyme";
import { App } from "../App";

describe('Test App Entry point', function () {
  it('should have a header tag with Home Component ', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h2").text()).toEqual(" Home Component ");
  });
});