import React, { Component } from "react";
import { withAuth } from "../../AuthContext";

export class Profile extends Component {
    unauthenticate = (event) => {
        event.preventDefault();
        this.props.logOut();
        this.props.navigate("home");
    };

    render() {
        return (
            <p>
                Profile.
                <button onClick={this.unauthenticate}>Log out</button>
            </p>
        );
    }
}

export const ProfileWithAuth = withAuth(Profile);
