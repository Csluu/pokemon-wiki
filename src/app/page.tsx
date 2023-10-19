import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col pl-72 pt-28 pr-40 w-screen gap-20 bg-[#13131a] text-[#808191]">
			<div className="flex flex-col w-full rounded-2xl gap-5 ">
				<h2 className="">Top Trending Cryptocurrency</h2>
				<li className="flex flex-row gap-7">
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p className="">Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
				</li>
			</div>

			<div className="flex flex-row w-full gap-20">
				{/* Crypto Market Cap List */}
				<span className="flex flex-col w-1/2 gap-10">
					<div className="text-2xl">Top Crypto Market Cap</div>
					<span className="flex flex-col gap-5 w-full">
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
					</span>
				</span>
				{/* Crypto Market Cap List */}
				<span className="flex flex-col w-1/2 gap-10">
					<div className="text-2xl">Top Crypto Market Cap</div>
					<span className="flex flex-col gap-5 w-full">
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
						<hr />
						<div className="flex flex-row place-items-center gap-5 w-full">
							<span className="w-10 h-10 rounded-full bg-[#1c1c24]"></span>
							<span className="flex flex-row justify-between w-full place-items-center">
								<h3 className="text-xl text-white">Bitcoin</h3>
								<p>Market Cap 528.54B</p>
								<span>
									<div className="text-[#b2b3bd]">23124.41 USD</div>
									<div className="flex justify-end">-2.99%</div>
								</span>
							</span>
						</div>
					</span>
				</span>
			</div>

			{/* NFTS SECTION  */}
			<div className="flex flex-col w-full rounded-2xl gap-5 ">
				<h2 className="">Top NFTs</h2>
				<li className="flex flex-row gap-7">
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
				</li>
			</div>
			<div className="flex flex-col w-full rounded-2xl gap-5 ">
				<h2 className="">Top NFTs</h2>
				<li className="flex flex-row gap-7">
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
				</li>
			</div>
			<div className="flex flex-col w-full rounded-2xl gap-5 ">
				<h2 className="">Top NFTs</h2>
				<li className="flex flex-row gap-7">
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
				</li>
			</div>
			<div className="flex flex-col w-full rounded-2xl gap-5 ">
				<h2 className="">Top NFTs</h2>
				<li className="flex flex-row gap-7">
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
					<ul className="flex flex-col w-96 h-72 bg-[#1c1c24] rounded-2xl ">
						<div className="w-full h-2/3 bg-white rounded-tr-2xl rounded-tl-2xl"></div>
						<div className="flex flex-col p-5 gap-3">
							<h3 className="text-2xl">Bored Ape Yacht Club</h3>
							<div className="flex flex-row gap-5">
								<p>Floor: 25.20 ETH</p>
								<p>Volume: 450 ETH</p>
							</div>
						</div>
					</ul>
				</li>
			</div>
		</main>
	);
}
