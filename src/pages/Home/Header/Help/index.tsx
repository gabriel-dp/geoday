import { HelpContainer } from "./styles";

export default function Help() {
	return (
		<HelpContainer>
			<h1>Are you lost?</h1>
			<p>Your mission is to guess the country of the day using the data provided by your attempts</p>
			<p>Enter any country in the input by typing its name</p>
			<img src="" alt="IMAGE-INPUT" />
			<p>Analyze the attempt, the colors identify how close you are to discovering the correct country</p>
			<img src="" alt="IMAGE-ATTEMPT" />
			<p>Consult the world map at any time</p>
			<img src="" alt="IMAGE-MAP" />
			<p>Have fun!</p>
			<hr />
			<p>
				Made by&nbsp;
				<a className="link" href="https://gabriel-dp.github.io/" target="_blank">
					gabriel-dp
				</a>
			</p>
		</HelpContainer>
	);
}
