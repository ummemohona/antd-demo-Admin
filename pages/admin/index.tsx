import React from "react";
import LayoutPage from "@components/layout";
import Landing from "@containers/landing";
import Protected from "@components/layout/protected";

const LandingPage = () => {
    return (
        <Protected>
                <Landing />
        </Protected>

    )
}

export default LandingPage;