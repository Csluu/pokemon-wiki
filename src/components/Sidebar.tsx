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
			<Image
				className="opacity-50 group-hover:opacity-100"
				src={imgUrl}
				alt={name}
			/>

			<div className="fixed group-hover:visible invisible text-white left-28 bg-slate-700 p-3 w-fit h-fit justify-center place-items-center rounded-md border-[1px] border-gray-800 transition duration-75 ease-in-out">
				{name}
				<div className="absolute -z-10 left-0 top-2 bg-slate-700 w-8 h-8 rounded-sm rotate-45"></div>
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

	const handleMenu = () => {};

	return (
		<div className="flex fixed w-25 top-28 bottom-5 left-5 flex-col p-3 bg-[#1c1c24] border-nav-border border-[1px] transition-all duration-500 ease-in-out rounded-xl gap-6 overflow-hidden justify-between place-items-center">
			<div className="flex flex-col gap-2">
				<div className="flex justify-center place-items-center w-14 h-14">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						viewBox="0 0 1024 1024"
					>
						<path
							fill="white"
							d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
						/>
					</svg>
				</div>

				<span className="flex flex-col gap-2">
					{" "}
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
				</span>
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
