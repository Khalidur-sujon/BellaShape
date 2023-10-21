import Htext from "@/shared/Htext";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description:
			"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description:
			"Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description:
			"Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
	},
];

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benifits = ({ setSelectedPage }: Props) => {
	return (
		<section id="benifits" className="mx-auto py-10 min-h-full w-5/6">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
			>
				{/* header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					variants={{
						hidden: { opacity: 0, x: -70 },
						visible: { opacity: 1, x: 0 },
					}}
					className="md:my-5 md:w-3/5"
				>
					<Htext>MORE THAN JUST A GYM.</Htext>
					<p className="text-sm my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tempore id porro adipisci sint quae voluptates est odit?
						Ipsam, obcaecati quo?
					</p>
				</motion.div>
				{/* benifits */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
					className="mt-5 items-center justify-between gap-8 md:flex"
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
				{/* graphics and description */}
				<div className="mt-16 items-center justify-between gap-8 md:mt-28 md:flex">
					{/* graphics */}
					<img
						src={BenefitsPageGraphic}
						alt="benefits_page_graphic"
						className="mx-auto"
					/>
					{/* description */}
					<div>
						{/* title */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									transition={{ duration: 0.6 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<Htext>
										MILLIONS OF HAPPY MEMBERS GETTING{" "}
										<span className="text-primary-500">
											FIT.
										</span>
									</Htext>
								</motion.div>
							</div>
						</div>
						{/* description */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="my-5">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nesciunt praesentium adipisci
								excepturi dignissimos quae voluptatibus cum,
								magni itaque ullam repudiandae sit laudantium
								dolorum modi delectus sint magnam? Consequatur,
								beatae. Ipsam.
							</p>
							<p className="my-5">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Recusandae, officia ducimus
								dolor et doloremque incidunt quam quo veniam
								amet illum in facilis, ipsum voluptas expedita!
							</p>
						</motion.div>
						{/* button */}
						<div className="relative my-16">
							<div className="before:absolute before:-top-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
export default Benifits;
