import React, { Component } from 'react';
import TableRow from './TableRow';
import { shallow } from "enzyme";


describe("TableRow component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TableRow data={[name:1]}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})