import React from "react";
import {createButton} from "react-social-login-buttons"; 

// import Styles from "./button.module.css";

const config = {
    text: "OPEN SOURCED ON GITHUB ",
    icon: "github",
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#24292e" },
    activeStyle: { background: "#24292e" }
};
 
const githubButton = createButton(config);
   
export default githubButton;