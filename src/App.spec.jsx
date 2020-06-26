import React from "react";
import {render, fireEvent} from '@testing-library/react';
import App from "./App";



jest.mock("./Components/Navbar/Home", () => ({ Home: () => <div>Home content</div> }));
jest.mock("./Components/Navbar/About", () => ({ About: () => <div>About content</div> }));
jest.mock("./Components/Navbar/Profile", () => ({ Profile: () => <div>Profile content</div> }));

describe("App", () => {
    it("renders correctly", () => {
        const { container } = render(<App />);
        expect(container.innerHTML).toMatch("Home content");
    });

    describe("when clicked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const { getByText, container } = render(<App />);
            fireEvent.click(getByText('About'));
            expect(container.innerHTML).toMatch("About content");
            fireEvent.click(getByText('Profile'));
            expect(container.innerHTML).toMatch("Profile content");
        });
    });
});
