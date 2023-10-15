import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className="fixed flex flex-row top-5 px-7 w-screen justify-between gap-5 ">
			<span className="flex flex-row gap-5">
				{/* Change to Img later when I have logo */}
				<span className="flex bg-white w-16 h-16 rounded-2xl bg-nav-bg  justify-center place-items-center">
					Logo
				</span>
				<h1 className="text-white h-16 justify-center flex place-items-center text-2xl">
					Pokemon wiki
				</h1>
			</span>

			<span className="flex w-1/3 bg-nav-bg  rounded-2xl text-white justify-center place-items-center">
				<h1>Search</h1>
			</span>
			<span className="flex w-1/6 justify-end place-items-center gap-5 ">
				<span className="flex w-1/2 h-full bg-nav-bg  rounded-2xl text-white justify-center place-items-center">
					<h1>Connect</h1>
				</span>
				<span className="rounded-full bg-nav-bg h-16 w-16 "></span>
			</span>
		</div>
	);
};

export default Navbar;
