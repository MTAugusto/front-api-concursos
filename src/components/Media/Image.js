import styled from "styled-components";

const Image = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
Image.defaultProps = {
	width: "auto",
	height: "auto",
};

export default Image;
