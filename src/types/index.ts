export type LinkIconProps = {
	name: string;
	imgUrl: string;
	isActive: string;
	isMenuExpanded: boolean;
	handleClick: (name: string) => void;
	link: string;
};
