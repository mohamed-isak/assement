import React from "react";
import PropTypes from "prop-types";

const Show = ({ ifCondition = false, children, elseCondition }) => {
    // If the condition is true, render the children
    if (ifCondition) {
        return <React.Fragment>{children}</React.Fragment>;
    }
    // If there is an elseCondition, render it
    else if (elseCondition) {
        // If the elseCondition is a function, call it and render the result
        return typeof elseCondition === "function"
            ? elseCondition()
            : elseCondition;
    }
    // If there is no elseCondition and the condition is false, don't render anything
    else {
        return null;
    }
};

// Define the prop types for the Show component
Show.propTypes = {
    ifCondition: PropTypes.bool,
    children: PropTypes.node,
    elseCondition: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Show;
