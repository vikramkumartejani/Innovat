"use client"
import EducationSection from "@/app/components/ui/education/EducationSection";
import "@/app/styles/education.scss";
import { useEffect } from "react";
const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<EducationSection />
		</div>
	);
};

export default Education;
