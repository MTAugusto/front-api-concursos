import React from "react";
import Head from "../infra/component/Head";

import ImageContainer from "../patterns/CardImage";
import SectionMain from "../infra/component/Main";
import Card from "../components/Layout/Card";
import CardSearch from "../patterns/CardSearch";
import Footer from "../patterns/Footer";
import ListContent from "../patterns/ListContent";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<Head title="gConcursos" />
				<div>
					<SectionMain>
						<Card flexCenter flexFlow="column nowrap">
							<ImageContainer />
							<CardSearch />
						</Card>
					</SectionMain>
					<Card flexCenter flexFlow="column nowrap" maxHeigth="300px">
						<ListContent concursos={this.props} />
					</Card>
					<Footer />
				</div>
			</>
		);
	}
}

export default Home;
