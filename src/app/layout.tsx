import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Sidebar />
			<Navbar />
			<body
				className={`${inter.className} pl-72 pt-28 pr-40 w-screen gap-20 text-[#808191]`}
			>
				{children}
			</body>
		</html>
	);
}
