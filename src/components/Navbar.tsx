"use client";
import { FC } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className="fixed z-50 flex flex-row top-0 py-5 px-7 w-screen justify-between gap-5 bg-[#13131a]">
			<span className="flex flex-row gap-5">
				{/* Change to Img later when I have logo */}
				<Link
					href={"/"}
					className="flex w-16 h-16 justify-center place-items-center "
				>
					<Image src={logo} alt="vega logo" className="rounded-xl" />
				</Link>
				<h1 className="text-white h-16 justify-center flex place-items-center text-4xl">
					Vomma
				</h1>
			</span>

			<span className="flex w-1/4 bg-nav-bg m-1 rounded-full text-white justify-between px-3 place-items-center  ">
				<h1 className="flex pl-2 text-gray-500">
					Search ticker, company, pairs
				</h1>
				<span className="bg-green-500 rounded-full py-2 px-4">
					<svg
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_2290_2179)">
							<path
								d="M16.9702 16.5L13.2202 12.75M15.0952 8.0625C15.0952 8.9243 14.9255 9.77766 14.5957 10.5739C14.2659 11.3701 13.7825 12.0935 13.1731 12.7029C12.5637 13.3123 11.8403 13.7957 11.0441 14.1255C10.2479 14.4553 9.39451 14.625 8.53271 14.625C7.67092 14.625 6.81755 14.4553 6.02135 14.1255C5.22516 13.7957 4.50171 13.3123 3.89233 12.7029C3.28294 12.0935 2.79955 11.3701 2.46976 10.5739C2.13996 9.77766 1.97021 8.9243 1.97021 8.0625C1.97021 6.32202 2.66162 4.65282 3.89233 3.42211C5.12303 2.1914 6.79223 1.5 8.53271 1.5C10.2732 1.5 11.9424 2.1914 13.1731 3.42211C14.4038 4.65282 15.0952 6.32202 15.0952 8.0625Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_2290_2179">
								<rect
									width="18"
									height="18"
									fill="white"
									transform="translate(0.470215)"
								/>
							</clipPath>
						</defs>
					</svg>
				</span>
			</span>
			<span className="flex w-1/6 justify-end place-items-center gap-5 ">
				<span className="flex w-1/2 p-4 bg-nav-bg rounded-2xl text-white justify-center place-items-center">
					<h1>Connect</h1>
				</span>
				<span className="rounded-full bg-nav-bg h-14 w-14 "></span>
			</span>
		</div>
	);
};

export default Navbar;
