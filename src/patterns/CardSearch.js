import React from "react";
import styled from "styled-components";

import Input from "../components/Inputs/Input";

import Card from "../components/Layout/Card";
import Icon from "../components/Media/Icon";

const ClassDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    height: 60px;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
    margin: 0px 5px;
    border-radius: 15px;
    box-shadow: 0px 0px 13px 5px rgba(0,0,0,0.7);
`;

const CardSearch = () => (
	<Card flexCenter>
		<ClassDiv>
			<Icon icon="bi-BiSearchAlt" color="black" width="auto" height="25px" />
			<Input type="text" placeholder="Qual concurso busca?" />
		</ClassDiv>
	</Card>
);

export default CardSearch;
