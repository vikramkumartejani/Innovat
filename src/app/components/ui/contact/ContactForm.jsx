/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import Confirmation from "../../confirmation/confirmation";
import CountryCodeSelector from "../../Layout/Country_input";
import ContactDetails from "./ContactDetails";

const ContactForm = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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

		// Custom email parameters
		setTimeout(() => {
			const emailParams = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				fullName: formData.fullName,
				user_email: formData.user_email,
				companyName: formData.companyName,
				countryCode: formData.countryCode,
				contactNumber: formData.contactNumber,
				enquiryStatus: formData.enquiryStatus,
				message: formData.message,
			};

			setIsLoading(true);

			// Using emailjs.send instead of sendForm
			emailjs
				.send(
					"service_a24d7lh",
					"template_ox8x4pl",
					emailParams,
					"EW6fWmrHP4OHFbjbZ",
				)
				.then(
					(result) => {
						setIsLoading(false);
						setIsSuccess(true);
					},
					(error) => {
						console.error("EmailJS Error:", error);
						alert("Something went wrong! Try again later.");
						setIsLoading(false);
					},
				);
		}, 2000);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const [selectedCode, setSelectedCode] = useState("USA +1");

	const handleSelect = (eventKey) => {
		setSelectedCode(eventKey);
		setFormData((prev) => ({
			...prev,
			countryCode: eventKey,
		}));
	};
	const [selectedCode2, setSelectedCode2] = useState(
		"Please select your enquiry Option ",
	);

	const handleSelect2 = (code) => {
		setSelectedCode2(code);
		setFormData((prev) => ({
			...prev,
			enquiryStatus: code,
		}));
	};

	const bgStyle = {
		fill: "#98A4D7",
		// backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "contain",
		backgroundPosition: "top",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className="icontainer contactRef">	
		<h3 className="sub-section-header">Contact Us</h3>
			<div style={bgStyle} className="contact-section">
				{!isSuccess && !isLoading ? (
					<Row className="g-5 g-lg-5">
						<Col lg={6}>
							<ContactDetails />
						</Col>

						<Col lg={6} className="d-none d-md-block">
							<div className="enquiry-form">
								<h2 className="text-center text-md-start">Submit an Enquiry</h2>
								<Form
									ref={formRef}
									onSubmit={handleSubmit}
									className="contact-form">
									<Row className="gaps d-none d-md-flex">
										<Col md={6}>
											<Form.Group>
												<Form.Label className="label">First Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="First Name"
													name="firstName"
													value={formData.firstName}
													onChange={handleChange}
													required
												/>
											</Form.Group>
										</Col>
										<Col md={6}>
											<Form.Group>
												<Form.Label className="label">Last Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="Last Name"
													name="lastName"
													value={formData.lastName}
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

									<Form.Group className="d-none d-md-block">
										<Form.Label className="label">Company Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Company Name"
											name="companyName"
											value={formData.companyName}
											onChange={handleChange}
										/>
									</Form.Group>

									<Row className="gaps d-none d-md-flex" >
										<Col md={4}>
											<Form.Group>
												<Form.Label className="label">Country Code</Form.Label>
												<CountryCodeSelector

													name="countryCode"
													handleSelect={handleSelect}
													selectedCode={selectedCode}></CountryCodeSelector>
											</Form.Group>
										</Col>
										<Col md={8}>
											<Form.Group>
												<Form.Label className="label">
													Contact Number
												</Form.Label>
												<Form.Control
													type="tel"
													placeholder="Contact Number"
													name="contactNumber"
													value={formData.contactNumber}
													onChange={handleChange}
													required
												/>
											</Form.Group>
										</Col>
									</Row>

									<Form.Group className="d-none d-md-block">
										<Form.Label className="label">Investor Type</Form.Label>
										<DropdownButton
											style={{ zIndex: '9999' }}
											id="country-code-dropdown2"
											title={` ${selectedCode2}`}
											onSelect={handleSelect2}>
											<Dropdown.Item eventKey="Investor Type">
												Investor Type
											</Dropdown.Item>
											<Dropdown.Item eventKey="Individual Investor">
												Individual Investor
											</Dropdown.Item>
											<Dropdown.Item eventKey="Institutional Investor">
												Institutional Investor
											</Dropdown.Item>
											<Dropdown.Item eventKey="Financial Advisor">
												Financial Advisor
											</Dropdown.Item>
											<Dropdown.Item eventKey="Other">Other</Dropdown.Item>
										</DropdownButton>
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
				) : (
					<Confirmation></Confirmation>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
