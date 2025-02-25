import "@/app/styles/index.scss";

import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Layout/Footer";
import NavigationBar from "./components/Layout/Navbar";
import ScrollToTop from "./components/Layout/ScrollToTop";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Innovat",
	description: "Innovat is a modern and sleek landing page template designed for startups and mobile apps.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div id="BG">
					<header style={{ zIndex: 999999999999 }}>
						<NavigationBar />
					</header>
					{/* className="main-content" */}
					<main className="overflow-hidden main">{children}</main>
					<footer>
						<Footer />
					</footer>
					<ScrollToTop />
				</div>
			</body>
		</html>
	);
}
