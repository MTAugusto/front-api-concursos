import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
	type: props.type || "text",
	size: props.size || "1em",
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: 20px;
    padding: 0.5em;
    margin: 0.5em;
    box-sizing: border-box;
    border: none;
    outline: none;

    &:focus{
        border: none;
        border-bottom: 1px solid #e0e0e0;
        outline: none;
    }
`;
Input.defaultProps = {
	width: "100%",
	height: "100%",
};

export default Input;
