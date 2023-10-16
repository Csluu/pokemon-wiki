"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks, socialMediaLinks } from "@/constants";
import { useState } from "react";

interface SidebarProps {}

interface LinkIconProps {
	name: string;
	imgUrl: string;
	isActive: boolean;
	handleClick: () => void;
	link: string;
}

const LinkIcon = ({
	name,
	imgUrl,
	isActive,
	handleClick,
	link,
}: LinkIconProps) => (
	<Link href={link}>
		<div className="w-10 h-10 flex justify-center" onClick={handleClick}>
			<Image src={imgUrl} alt={name} />
		</div>
	</Link>
);

const Sidebar: FC<SidebarProps> = () => {
	const [isActive, setIsActive] = useState("home");

	// Define handleClick function here or pass it as a prop if necessary
	const handleClick = () => {
		console.log("Link clicked");
	};

	return (
		<div className="flex fixed w-20 top-28 bottom-5 left-5 flex-col py-6 px-3 bg-nav-bg border-nav-border border-[1px] transition-all duration-500 ease-in-out rounded-2xl gap-6 overflow-hidden justify-between place-items-center">
			<div className="flex flex-col gap-6">
				{/* Practice this again  */}
				{navlinks.map((link) => (
					<LinkIcon
						key={link.name}
						{...link}
						imgUrl={link.imgUrl}
						isActive={false}
						handleClick={handleClick}
						link={link.link}
					/>
				))}
			</div>
			<div className="flex flex-col gap-6">
				{/* Practice this again  */}
				{socialMediaLinks.map((link) => (
					<LinkIcon
						key={link.name}
						{...link}
						imgUrl={link.imgUrl}
						isActive={false}
						handleClick={handleClick}
						link={link.link}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
