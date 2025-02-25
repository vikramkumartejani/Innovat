"use client"
import Hero from "./components/ui/home/Hero";
/* import InvestmentCarousel from "@/app/components/ui/home/InvestmentCarousel"; */
import Education from "@/app/components/ui/home/Education";
import "@/app/styles/home.scss";
import { useRef } from "react";
import ContactHome from "@/app/components/ui/home/Contact";
import InvestmentFunds from "@/app/components/ui/home/InvestmentFunds";
import Newsletter from "@/app/components/ui/home/Newsletter";
import OurApproach from "@/app/components/ui/home/OurApproach";
import ResearchCenter from "@/app/components/ui/home/ResearchCenter";
const Home = () => {
	const contactRef = useRef(null);
	const scrollToContact = () => {
		contactRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<Hero />
			{/* <InvestmentCarousel /> */}
			<OurApproach />
			<InvestmentFunds />
			<Education />
			<ResearchCenter />
			<Newsletter scrollToContact={scrollToContact} />
			<ContactHome contactRef={contactRef} />
		</div>
	);
};

export default Home;
