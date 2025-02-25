"use client"
/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import backgroundImage from "@/app/../../../public/assets/images/contact_back.svg";

const ContactHome = ({ contactRef, setShow }) => {
	const formRef = useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		fullName: "",
		user_email: "",
		companyName: "",
		countryCode: "",
		contactNumber: "",
		enquiryStatus: "",
		message: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("submitting form")
		setIsLoading(false);
		if (formRef.current) {
			emailjs
				.sendForm(
					"service_a24d7lh",
					"template_ox8x4pl",
					formRef.current,
					"EW6fWmrHP4OHFbjbZ",
				)
				.then(
					(result) => {
						console.log("result", result.text);
						setIsLoading(false);
						setIsSuccess(true);
						setShow(true);
					},
					(error) => {
						console.log(error);
						alert("Something went wrong!  Try again later.");
						setIsLoading(false);
					},
				);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const confirmStyle = {
		fill: "#98A4D7",
		// backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		paddingTop: "50px",
		paddingBottom: "100px",
	};

	return (
		<div
			ref={contactRef}
			id="subscribe"
			className="icontainer d-md-none d-block">
			<div className="contact-section">
				<Row
					className={`g-5 g-lg-5 ${(!isSuccess && !isLoading && "d-block") || "d-none"
						}`}>
					<Col lg={6}>
						<div className="enquiry-form">
							<h2 className="text-center md:text-start">Submit an Enquiry</h2>
							<Form
								ref={formRef}
								onSubmit={handleSubmit}
								className="contact-form">
								<Row className="gaps">
									<Col md={12}>
										<Form.Group>
											<Form.Label className="label">Full Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Full Name"
												name="fullName"
												value={formData.fullName}
												onChange={handleChange}
												required
											/>
										</Form.Group>
									</Col>
								</Row>

								<Form.Group>
									<Form.Label className="label">Email Address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email Address"
										name="user_email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label className="label">Message</Form.Label>
									<Form.Control
										as="textarea"
										rows={4}
										placeholder="Message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</Form.Group>

								<div className="text-center">
									<Button
										type="submit"
										className="btn-submit"
										disabled={isLoading}>
										Submit
									</Button>
								</div>
							</Form>
						</div>
					</Col>
				</Row>

				<div
					style={confirmStyle}
					className={`confirmation flex-column justify-content-center align-items-center ${(!isSuccess && !isLoading && "d-none") || "tv-show h-full d-flex"
						}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						width={80}
						height={80}>
						<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
					</svg>
					<h4 className="thank-you-text mt-3">
						Thank you, we have received your enquiry and will be in contact with
						you shortly.
					</h4>
				</div>
			</div>
		</div>
	);
};

export default ContactHome;
