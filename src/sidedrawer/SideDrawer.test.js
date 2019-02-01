import React from "react";

import { mount, shallow } from "enzyme";

import SideDrawer from "./SideDrawer";
import Login from "../login/Login";

xdescribe("SideDrawer", () => {
	let mountedSideDrawer;

	const sidedrawer = () => {
		if (!mountedSideDrawer) {
			mountedSideDrawer = shallow(<SideDrawer />);
		}
		return mountedSideDrawer;
	};

	beforeEach(() => {
		mountedSideDrawer: undefined;
	});

	// begin tests

	it("should display Login component", () => {
		const login = sidedrawer().find(Login);
		console.log(sidedrawer().debug());
		expect(login.length).toEqual(1);
	});
});
