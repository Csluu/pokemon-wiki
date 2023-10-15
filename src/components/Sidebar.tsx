import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {}

interface linkIconProps {
	name: string;
	imgUrl: string;
	isActive: boolean;
	handleClick: () => void;
	link: string;
}

const linkIcons = ({
	name,
	imgUrl,
	isActive,
	handleClick,
	link,
}: linkIconProps) => (
	<Link href={link}>
		<a className="w-10 h-10" onClick={handleClick}>
			<Image src={imgUrl} alt={name} />
		</a>
	</Link>
);

const Sidebar: FC<SidebarProps> = ({}) => {
	return (
		<div className="flex fixed w-20 top-28 bottom-5 left-5 flex-col p-3 bg-nav-bg border-nav-border border-[1px] transition-all duration-500 ease-in-out rounded-2xl gap-5 overflow-hidden place-items-center">
			<div className="w-12 h-12 rounded-lg bg-white"></div>
			<div className="w-12 h-12 rounded-lg bg-white"></div>
			<div className="w-12 h-12 rounded-lg bg-white"></div>
			<div className="w-12 h-12 rounded-lg bg-white"></div>
			<div className="bg-white w-12 h-12  rounded-lg "></div>
		</div>
	);
};

export default Sidebar;
