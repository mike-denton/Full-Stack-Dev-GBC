import React from "react";
import { shallow } from "enzyme";

const sum = (x, y) => {
  return x + y;
};

Enzyme.configure({ adapter: new Adapter() });

describe("When testing with Enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(sum(1, 2));
    expect(wrapper.find("h1").length).toBe(1);
  });
});

describe("Testing sum component", () => {
  let result;
  beforeAll(() => {
    result = sum(1, 1);
  });
  it("returns a value", () => {
    expect(result).not.toBeNull();
  });
  it("first element is p", () => {
    expect(result.type).toBe("p");
  });
  it("has children elements", () => {
    expect(result.props.children).toBeTruthy();
  });
});
