import styled from "styled-components";

const Link = styled.a`
    &:link {
        color: inherit;
    }
    &:visited {
        text-decoration: inherit;
        color: inherit;
    }
    &:hover {
        text-decoration: underline;
    }
    text-decoration: inherit;

`;

export default Link;
