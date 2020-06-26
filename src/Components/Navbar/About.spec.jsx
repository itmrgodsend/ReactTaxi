import React from "react";
import {render} from '@testing-library/react'
import About from "./About";


describe("About", () => {
    it('renders correctly', () => {
    const {container} = render(<About />)
        expect(container.innerHTML).toMatch("About")
    })
})