// ~ Dependencies ~
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'aos/dist/aos.css';
import "@/styles/globals.css";

// ~ Components ~
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// ~ Font Families ~
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

// ~ Meta Information ~
export const metadata: Metadata = {
	title: "Royal Solutions",
	description: "Royal Solutions",
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico'
	}
};


export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<body className={robotoCondensed.className}>
				<Navbar />
				{children}
				<Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"} />
				<Footer />
			</body>
		</html>
	);
}