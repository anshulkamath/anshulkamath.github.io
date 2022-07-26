import React from 'react';
import 'stylesheets/toggleButton.css';
const ToggleButton = ({ toggled, setToggled, title, }) => {
    const onClick = () => setToggled(!toggled);
    const toggleClass = toggled ? 'toggle-on' : 'toggle-off';
    return (React.createElement("button", { className: `toggle-btn ${toggleClass}`, type: 'submit', onClick: onClick }, title));
};
export default ToggleButton;
