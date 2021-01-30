/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import Themes from "../styles/themes";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={Themes}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
