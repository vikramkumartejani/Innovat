'use client'
import InvestmentCategories from "@/app/components/ui/investments/InvestmentCategories";
import "@/app/styles/investments.scss";
import { useEffect } from "react";

const Investments = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<InvestmentCategories />
		</div>
	);
};

export default Investments;
