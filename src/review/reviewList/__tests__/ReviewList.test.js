import React from "react";
import { mount, shallow } from "enzyme";
import { Link } from "react-router-dom";
import ReviewList from "../ReviewList";

/**
|--------------------------------------------------
| One theory is to test based on how your software is being used and not 
| necessarily implementation details. Thus, avoiding shallow rendering can
| be helpful to prevent failing tests simpy because code changed that didn't
| change the user's experience.
|--------------------------------------------------
*/
const getUserDetails = () => ({
	image: "",
	displayName: "",
});

describe("ReviewList", () => {
	let wrapper;

	describe("reviews", () => {
		// Arrange
		const reviews = [ { _id: 1 }, { _id: 2 }, { _id: 3 } ];
		beforeEach(() => (wrapper = shallow(<ReviewList reviews={reviews} user={getUserDetails()} />)));

		it("should display three detail elements", () => {
			// Assert
			expect(wrapper.find(".ReviewDetails")).toHaveLength(reviews.length);
			expect(wrapper.find(".EmptyList")).toHaveLength(0);
		});

		it("should wrap with three Link components", () => {
			expect(wrapper.find(Link)).toHaveLength(reviews.length);
		});
	});

	it("should display an empty message for no reviews", () => {
		const reviews = [];
		const wrapper = shallow(<ReviewList reviews={reviews} user={getUserDetails()} />);

		expect(wrapper.find(".ReviewDetails")).toHaveLength(0);
		expect(wrapper.find(".EmptyList")).toBeDefined();
	});

	it("should render a Link to /reviewform for an empty list", () => {
		const reviews = [];
		const wrapper = shallow(<ReviewList reviews={reviews} user={getUserDetails()} />);
		const EmptyListWrapper = wrapper.find(".EmptyList");

		expect(EmptyListWrapper.find(Link)).toHaveLength(1);
		expect(EmptyListWrapper.find(Link).prop("to")).toBe("/reviewform");
	});
});
