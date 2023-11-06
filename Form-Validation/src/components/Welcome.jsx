import React from "react";
import Buttons from "./Button";
const Welcome = () => {
    return(
        <div>
        <h2>Welcome</h2>
        <Buttons name = "logout" variant = "danger" onClick = {() => window.location.href = "/"} />
        </div>
    )
}

export default Welcome;