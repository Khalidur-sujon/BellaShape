import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benifits from "./scenes/benifits";

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopOfPage, setisTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setisTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setisTopOfPage(false);
		};

		window.addEventListener("scroll", handleScroll);

		//clean
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app bg-gray-20">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benifits setSelectedPage={setSelectedPage} />
		</div>
	);
}

export default App;
