import { About } from "$/components/about";
import { Funnel } from "$/components/funnel";
import { Skills } from "$/components/skills";

export default async function Home() {
	return (
		<main>
			<Funnel />
			<About />
			<Skills />
			{/*<Contact />*/}
		</main>
	);
}
