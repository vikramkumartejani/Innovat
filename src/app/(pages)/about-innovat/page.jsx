'use client'
import CoreValues from "@/app/components/ui/about/CoreValues";
import Hero from "@/app/components/ui/about/Hero";
import InvestmentProcess from "@/app/components/ui/about/InvestmentProcess";
import Mission from "@/app/components/ui/about/Mission";
import Team from "@/app/components/ui/about/Team";
import "@/app/styles/about.scss";
import { useEffect } from "react";

const AboutInnovat = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Hero />
			<Mission />
			<Team />
			<InvestmentProcess />
			<CoreValues />
		</div>
	);
};

export default AboutInnovat;
