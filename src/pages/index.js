import React from "react";
import Head from "../infra/component/Head";

import ImageContainer from "../patterns/CardImage";
import SectionMain from "../infra/component/Main";
import Card from "../components/Layout/Card";
import CardSearch from "../patterns/CardSearch";
import Footer from "../patterns/Footer";
import ListContent from "../patterns/ListContent";
import ContentBody from "../infra/component/ContentBody";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Head title="gConcursos" />

				<ContentBody>
					<SectionMain>
						<Card flexCenter flexFlow="column nowrap" marginBottom="20px">
							<ImageContainer />
							<CardSearch />
						</Card>
						<Card flexCenter flexFlow="column nowrap" maxHeigth="300px">
							<ListContent />
						</Card>
					</SectionMain>

					<Footer />
				</ContentBody>
			</>
		);
	}
}

export default Home;
