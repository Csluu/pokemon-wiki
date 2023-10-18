"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks, socialMediaLinks } from "@/constants";

interface SidebarProps {}

interface LinkIconProps {
	name: string;
	imgUrl: string;
	isActive: string;
	handleClick: (name: string) => void;
	link: string;
}

const LinkIcon = ({
	name,
	imgUrl,
	handleClick,
	link,
	isActive,
}: LinkIconProps) => (
	<Link href={link}>
		<div
			className="group w-14 h-14 flex justify-center hover:bg-slate-700 rounded-md transition duration-75 ease-in-out place-items-center"
			onClick={() => handleClick(name)}
		>
			<Image src={imgUrl} alt={name} />
			<div className="fixed group-hover:visible invisible text-white left-28 bg-slate-700 p-3 w-fit h-fit justify-center place-items-center rounded-md border-[1px] border-gray-800 transition duration-75 ease-in-out">
				{name}
			</div>
		</div>
	</Link>
);

const Sidebar: FC<SidebarProps> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isActive, setIsActive] = useState("Home");

	// rewrite this a few times
	useEffect(() => {
		console.log(isActive);
	}, [isActive]);

	const handleClick = (name: string) => {
		setIsActive(name);
	};

	return (
		<div className="flex fixed w-25 top-28 bottom-5 left-5 flex-col py-6 px-3 bg-nav-bg border-nav-border border-[1px] transition-all duration-500 ease-in-out rounded-xl gap-6 overflow-hidden justify-between place-items-center">
			<div className="flex flex-col gap-3">
				{/* Practice this again  */}
				{navlinks.map((link) => (
					<LinkIcon
						key={link.name}
						{...link}
						imgUrl={link.imgUrl}
						isActive={isActive}
						handleClick={() => handleClick(link.name)}
						link={link.link}
					/>
				))}
			</div>
			{/* I have to make sure these links open in a different tab with security  */}
			<div className="flex flex-col bg-black rounded-lg">
				{/* Practice this again  */}
				{socialMediaLinks.map((link) => (
					<LinkIcon
						key={link.name}
						{...link}
						imgUrl={link.imgUrl}
						isActive={isActive}
						handleClick={() => handleClick(link.name)}
						link={link.link}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
