/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from "react";
import styled from "styled-components";
import Link from "../components/Navigation/Link";

const StyleDiv = styled.div`
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    align:items: center;
    background-color: white;
    margin: 20px;
    color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
`;

const FooterTag = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const Paragryp = styled.p`
        background-color: #ff0101;
        padding: 4px;
        box-sizing: border-box;
        font-size: 0.7em;
        color: black;
`;

const CardListConcursos = ({ data }) => {
	const [concurso, setConcurso] = useState(data);

	return (
		<StyleDiv>
			<div style={{ width: "100%" }}>
				<div>
					<p style={{ marginBottom: "5px", color: "gray" }}>Titulo: {concurso.title}</p>
					<Link href={`${concurso.link}`} target="_blank"><span>link concurso</span></Link>
				</div>
				{ concurso.tag
                    && (
                    	<FooterTag>
                    		<Paragryp style={{ backgroundColor: "red", padding: 4, boxSizing: "border-box" }}>{concurso.tag}</Paragryp>
                    	</FooterTag>
                    )}
			</div>
		</StyleDiv>
	);
};

export default CardListConcursos;
