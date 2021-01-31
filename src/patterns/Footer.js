import React from "react";
import styled from "styled-components";
import Card from "../components/Layout/Card";
import Link from "../components/Navigation/Link";

const StyledFooter = styled(Card)`
    display: flex;
    justify-content: flex-end;
    height: 40px;
    align-items: center;
    font-weight: 100;
    font-size: 14px;
    padding: 15px;
    box-sizing: border-box;

    @media(min-height: 825px){
        bottom: 0;
        position: absolute;
    }
`;

const Footer = () => (
	<StyledFooter>
		<div>
            Desenvolvido por
			<Link href="https://github.com/MTaugusto" target="_blank"> @mtaugusto</Link>
		</div>
	</StyledFooter>
);

export default Footer;
