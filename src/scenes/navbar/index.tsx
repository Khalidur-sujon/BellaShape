import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const isAboveMobileScreen = useMediaQuery("(min-width:1060px)");
	const [isMenuToggled, setisMenuToggled] = useState<boolean>(false);
	const navBackground = isTopOfPage ? "" : "bg-primary-100";
	return (
		<nav>
			<div
				className={`${navBackground} fixed top-0 w-full z-30 py-6 flex items-center justify-between`}
			>
				<div className="flex items-center justify-between w-5/6 mx-auto">
					<div className="w-full flex items-center justify-between gap-16">
						{/* left side */}
						<img src={Logo} alt="logo" />
						{/* right side */}

						{isAboveMobileScreen ? (
							<div className="w-full flex items-center justify-between">
								{/* nav icons */}
								<div className="flex items-center justify-between gap-8 text-sm">
									<Link
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Benefits"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Our Classes"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Contact Us"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								{/* buttons */}
								<div className="flex items-center justify-between gap-8">
									<p>Sign In</p>
									<ActionButton
										setSelectedPage={setSelectedPage}
									>
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								className="rounded-full p-2 bg-secondary-500"
								onClick={() => setisMenuToggled(!isMenuToggled)}
							>
								<Bars3Icon className="h-6 w-6 text-white" />
							</button>
						)}
					</div>
				</div>
			</div>

			{/* mobile menu */}
			{!isAboveMobileScreen && isMenuToggled && (
				<motion.div
					className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-lg"
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.2 }}
					variants={{
						hidden: { opacity: 0, right: -50 },
						visible: { opacity: 1, right: 0 },
					}}
				>
					{/* close icon */}
					<div className="flex justify-end p-12">
						<button
							onClick={() => setisMenuToggled(!isMenuToggled)}
						>
							<XMarkIcon className="h-6 w-6 text-gray-600" />
						</button>
					</div>
					{/* menu items */}
					<div className="flex flex-col items-center justify-center gap-8 text-2xl">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Benefits"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Our Classes"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact Us"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
