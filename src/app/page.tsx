import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col pl-72 pt-28 pr-40 w-screen gap-5">
			<div className=" bg-nav-bg rounded-2xl h-[450px]"></div>
			<div className="flex flex-row justify-evenly w-full">
				<span>hello</span>
				<span>hello</span>
				<span>hello</span>
				<span>hello</span>
				<span>hello</span>
				<span>hello</span>
			</div>
			<div className="flex w-fullrounded-2xl h-[450px] place-items-center gap-5 justify-between ">
				<span className="flex bg-gray-500 rounded-2xl w-96 h-96"></span>
				<span className="flex bg-gray-500 rounded-2xl w-96 h-96"></span>
				<span className="flex bg-gray-500 rounded-2xl w-96 h-96"></span>
				<span className="flex bg-gray-500 rounded-2xl w-96 h-96"></span>
			</div>
		</main>
	);
}
