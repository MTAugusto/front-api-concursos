import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const RenderIcon = ({ icon, className }) => {
	const libIcons = {
		ai: AiIcons,
		bi: BiIcons,
	};

	let TypeIcon = AiIcons.AiOutlineQuestionCircle;

	if (icon) {
		const [libary, typeIcon] = icon.split("-");

		TypeIcon = libIcons[libary][typeIcon];
	}

	return (
		<TypeIcon className={className} />
	);
};

const StyleIcon = styled(RenderIcon)`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => (props.color ? props.color : props.theme.colors.primary)}
`;

export default StyleIcon;
