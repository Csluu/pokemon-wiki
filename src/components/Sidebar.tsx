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
	isMenuExpanded: boolean;
	handleClick: (name: string) => void;
	link: string;
}

// Check if the link is external
// ! Double check this code
const isExternal = (url: string) => {
	try {
		let link = new URL(url, window.location.origin);
		return link.origin !== window.location.origin;
	} catch (e) {
		return false;
	}
};

const LinkIcon = ({
	name,
	imgUrl,
	handleClick,
	link,
	isActive,
	isMenuExpanded,
}: LinkIconProps) => (
	<Link
		href={link}
		target={isExternal(link) ? "_blank" : undefined}
		rel={isExternal(link) ? "noopener noreferrer" : undefined}
	>
		<div
			className={`hover:bg-slate-700 min-w-[56px] rounded-md transition duration-75 ease-in-out flex group justify-start hover:scale-[102%]  ${
				isActive && isActive === name && "bg-slate-700"
			}`}
			onClick={() => handleClick(name)}
		>
			{/* ! The animation freaks out if I don't have this span might have to do with how the dimensions width are set up */}
			<span className="flex flex-row   ">
				{/* Icon  */}
				<div className={`w-14 h-14 flex justify-center place-items-center  `}>
					<Image
						className={`${
							isActive && isActive !== name && "opacity-50"
						} opacity-100 group-hover:opacity-100  transition duration-75 `}
						src={imgUrl}
						alt={name}
					/>
				</div>

				{/* Tool Tip */}
				{!isMenuExpanded ? (
					<div className="fixed flex group-hover:visible invisible left-28 text-white bg-slate-700 p-3 w-fit h-fit justify-center place-items-center rounded-md transition duration-75 ease-in-out">
						{name}
						<div className="absolute -z-10 left-0 top-2 bg-slate-700 w-8 h-8 rounded-sm rotate-45 "></div>
					</div>
				) : (
					<div
						className={`opacity-100 group-hover:opacity-100 text-white flex place-items-center w-fit whitespace-nowrap bg text-start ${
							isActive && isActive !== name && "opacity-50"
						}`}
					>
						{name}
					</div>
				)}
			</span>
		</div>
	</Link>
);

const Sidebar: FC<SidebarProps> = () => {
	const [isMenuExpanded, setIsMenuExpanded] = useState(false);
	const [isActive, setIsActive] = useState("Home");

	// rewrite this a few times
	useEffect(() => {
		console.log(isActive);
	}, [isActive]);

	const handleClick = (name: string) => {
		setIsActive(name);
	};

	const handleMenu = () => {
		setIsMenuExpanded((prevState) => !prevState);
	};

	return (
		<div
			id="sidebar"
			className={`flex fixed ${
				isMenuExpanded
					? "w-60 transition-all duration-500"
					: "w-20 transition-all duration-500"
			} top-28 bottom-5 left-5 flex-col p-3 bg-[#1c1c24] border-nav-border border-[1px] transition-all duration-500 ease-in-out rounded-xl gap-6 overflow-hidden justify-between place-items-center`}
		>
			<div className="flex w-full flex-col gap-2">
				<div
					className="flex justify-center place-items-center w-14 h-14 hover:bg-slate-700 rounded-md"
					onClick={handleMenu}
				>
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

				<span className="flex flex-col gap-2 ">
					{/* Practice this again  */}
					{navlinks.map((link) => (
						<LinkIcon
							key={link.name}
							{...link}
							imgUrl={link.imgUrl}
							isMenuExpanded={isMenuExpanded}
							isActive={isActive}
							handleClick={() => handleClick(link.name)}
							link={link.link}
						/>
					))}
				</span>
			</div>
			{/* I have to make sure these links open in a different tab with security  */}
			<div className="flex flex-col bg-black rounded-lg w-full">
				{/* Practice this again  */}
				{socialMediaLinks.map((link) => (
					<LinkIcon
						key={link.name}
						{...link}
						imgUrl={link.imgUrl}
						isMenuExpanded={isMenuExpanded}
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
