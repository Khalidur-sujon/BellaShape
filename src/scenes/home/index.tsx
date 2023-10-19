import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

	return (
		<section id="home" className="gap-16 bg-gray-20 py-10  md:pb-0 ">
			{/* content and image container*/}
			<motion.div
				className="mx-auto w-5/6 md:flex items-center justify-center md:h-5/6 "
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
			>
				{/* content container*/}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* heading */}
					<motion.div
						className="md:-mt-20"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, x: -70 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:z-[-1] ">
								<img src={HomePageText} alt="home-page-text" />
							</div>
						</div>
						<p className="mt-8 text-sm md:text-start">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Obcaecati voluptate voluptatibus magni et
							officiis nulla earum, repellat dolor possimus,
							dolores voluptas aspernatur provident pariatur!
						</p>
					</motion.div>
					{/* buttons */}
					<motion.div
						className="mt-8 flex items-center gap-8"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						variants={{
							hidden: { opacity: 0, x: -70 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							className="text-sm text-primary-500 hover:text-secondary-500 underline font-bold cursor-pointer"
							onClick={() =>
								setSelectedPage(SelectedPage.ContactUs)
							}
							href={`#${SelectedPage.ContactUs}`}
						>
							Learn More
						</AnchorLink>
					</motion.div>
				</div>
				{/* image container */}
				<div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end md:pb-10">
					<img src={HomePageGraphic} alt="home-page-graphic" />
				</div>
			</motion.div>
			{/* sponsors */}
			{isAboveMediumScreens && (
				<div
					className="h-[150px] w-full bg-primary-100 py-10 
				"
				>
					<div className="mx-auto w-5/6">
						<div className="flex items-center justify-between gap-8 w-3/5">
							<img src={SponsorRedBull} alt="sponsor-redbull" />
							<img src={SponsorForbes} alt="sponsor-forbes" />
							<img src={SponsorFortune} alt="sponsor-fortune" />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
