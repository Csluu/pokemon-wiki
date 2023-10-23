import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className="pl-72 pr-40 p-5 mt-20">
			<ul className="flex flex-row gap-5 justify-center w-full">
				<li>Home</li>
				<li>Home</li>
				<li>Home</li>
				<li>Home</li>
				<li>Home</li>
			</ul>
		</div>
	);
};

export default Footer;
