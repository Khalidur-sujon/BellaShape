type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	return (
		<li className="mx-5 inline-block h-[380px] w-[450px] relative">
			<div className="absolute h-[380px] w-[450px] bg-primary-500 opacity-0 transition duration-500 hover:opacity-90 z-30 text-white flex items-center justify-center text-center flex-col whitespace-normal">
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img src={image} alt={`${image}`} />
		</li>
	);
};

export default Class;
