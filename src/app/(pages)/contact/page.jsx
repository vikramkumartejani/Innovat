'use client'
import ContactForm from "@/app/components/ui/contact/ContactForm";
import ContactHome from "@/app/components/ui/home/Contact";
import "@/app/styles/contact.scss";
import { useEffect, useState } from "react";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [show, setShow] = useState(false);

	return (
		<div>
			{!show && <ContactForm />}
			<ContactHome setShow={setShow} />
		</div>
	);
};

export default Contact;
