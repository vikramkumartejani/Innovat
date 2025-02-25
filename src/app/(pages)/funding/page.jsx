'use client'
import "@/app//styles/funds.scss";
import FundingSection from "@/app/components/ui/funds/Funding";
import { useEffect } from "react";

const Funding = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<FundingSection />
		</div>
	);
};

export default Funding;
