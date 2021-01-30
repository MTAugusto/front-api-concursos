import React from "react";
import styled from "styled-components";

import Image from "../components/Media/Image";
import ImageCenter from "../assets/imgs/general/campaign_launch_monochromatic.svg";
import Card from "../components/Layout/Card";

const ClassDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 500px;
    background-color: #fff;
    border-radius: 30px;
    padding: 10px;
    box-sizing: border-box;
`;

const CardImage = () => (
	<Card height="300px" flexCenter>
		<ClassDiv>
			<Image src={ImageCenter} />
		</ClassDiv>
	</Card>
);

export default CardImage;
