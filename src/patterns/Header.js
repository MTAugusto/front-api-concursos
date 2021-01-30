import React from "react";
import PropTypes from "prop-types";

import Header from "../components/Layout/Header";

const IHeader = ({ title }) => (
	<Header>{title}</Header>
);

IHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default IHeader;
