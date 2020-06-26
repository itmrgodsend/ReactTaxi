import React from "react";
import {render} from "@testing-library/react";
import Profile from "./Profile";
import Home from "./Home";

describe("Home", () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(<Home/>)

        expect( getByLabelText('Email:')).toHaveAttribute('name', 'email')
        expect( getByLabelText('Password:')).toHaveAttribute('name', 'password')
    })
})