import styled from "styled-components";
import Card from "../components/Layout/Card";
import { useRquestSWR } from "../core/effectSWR";
import CardListConcursos from "./CardListConcursos";

const CarListConcursos = styled(Card)`
    padding: 20px;
    overflow: auto;
    box-sizing: border-box;
    margin: 20px;
    max-width: 90%;
    max-height: 400px;
`;

const ListContent = () => {
	const { concursos, error, isLoading } = useRquestSWR("https://api-concursos.herokuapp.com/api/concursos");

	if (isLoading) { return (<div>carregando....</div>); }

	if (!concursos) {
		return (
			<div>Não foi possivel carregar o conteudo</div>
		);
	}

	if (error) { return (<div>{error.message}</div>); }

	return (
		<CarListConcursos flexFlow="column nowrap">
			{concursos && concursos.length
	            && concursos.map((concurso, key) => (
	            	<CardListConcursos data={concurso} key={`${concurso.title}_${key}`} />
	            ))}
		</CarListConcursos>
	);
};

export default ListContent;
