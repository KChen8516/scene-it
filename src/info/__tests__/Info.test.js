import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Info from "../Info";

describe("Info Component", () => {
	/**
	|--------------------------------------------------
	| This is a standard snapshot test combining Jest & Enzyme.
	| Serializing the output from shallow() helps accelerate diffing.
	|--------------------------------------------------
	*/
	it("should render properly", () => {
		// Arrange
		const wrapper = shallow(<Info />);
		// Assert
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
