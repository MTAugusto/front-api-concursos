import styled, { css } from "styled-components";

const Card = styled.div`
${(props) => props.width
    && css`
        width: ${props.width};
    `
}
${(props) => props.maxWidth
    && css`
        max-width: ${props.maxWidth};
    `
}
${(props) => props.height
    && css`
        height: ${props.height};
    `
}
${(props) => props.maxHeight
    && css`
        max-height: ${props.maxHeight};
    `
}

${(props) => props.flexCenter
    && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

${(props) => props.flexFlow
    && css`
        flex-flow: ${props.flexFlow};
    `
}

${(props) => props.marginBottom
    && css`
        margin-bottom: ${props.marginBottom};
    `
}

`;
Card.defaultProps = {
	width: "100%",
};

export default Card;
