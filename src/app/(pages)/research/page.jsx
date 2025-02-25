'use client'
import ResearchSection from "@/app/components/ui/research/ResearchSection";
import "@/app/styles/research.scss";
import { useEffect } from "react";

const Research = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ResearchSection />
		</div>
	);
};

export default Research;
