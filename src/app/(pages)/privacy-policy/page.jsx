/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
'use client'
import "@/app/styles/privacy.scss";
import { useEffect } from "react";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="other-page icontainer">
			<div className="wrapper-section px-[16px]">
				<div className="row">
					<div className="col-lg-12">
						<div className="">
							<div className="fs-24 fw-900 roboto-black headline pb-3">
								Privacy Policy
							</div>
							<div className="fs-16 mt-3 mb-4 roboto-bold">
								Effective Date: January 13, 2025
							</div>
							<div className="fs-16 fw-400 ">
								Innovat (UK) Limited ("Innovat", "we", "us", or "our") is
								committed to protecting and respecting your privacy. This
								Privacy Policy outlines how we collect, use, disclose, and
								safeguard your personal information when you visit our website
								("Site"). By accessing and using our Site, you agree to the
								collection and use of information in accordance with this
								Privacy Policy.
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									1. Information We Collect
								</div>
								<div className="fs-16 fw-400">
									We may collect the following types of information when you
									interact with our Site:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular my-4">
										Personal Information: This includes information such as your
										name, email address, phone number, and any other information
										you voluntarily provide when youcontact us, register an
										account, or fill out forms on the Site.
									</li>
									<li className="fs-16 roboto-regular">
										Usage Data: This includes information about how you access
										and use the Site, such as your IP address, browser type,
										pages visited, time spent on the Site, andother diagnostic
										data.
									</li>
									<li className="fs-16 roboto-regular my-4">
										Cookies and Tracking Technologies: We use cookies and
										similar technologies to track user activity on our Site and
										improve user experience. For more details onhow we use
										cookies, please refer to our Cookie Policy.
									</li>
								</ul>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									2. How We Use Your Information
								</div>
								<div className="fs-16 roboto-regular mb-4">
									We use the information we collect for the following purposes:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular">
										To respond to inquiries and provide services requested.
									</li>
									<li className="fs-16 roboto-regular">
										To improve, personalize, and optimize user experience.
									</li>
									<li className="fs-16 roboto-regular">
										To send marketing and promotional communications (if you
										have opted in to receive them).
									</li>
									<li className="fs-16 roboto-regular">
										To analyze usage trends and preferences to enhance the
										Site's user experience.
									</li>
									<li className="fs-16 roboto-regular">
										To comply with legal obligations and protect our rights.
									</li>
								</ul>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									3. Legal Basis for Processing Personal Data
								</div>
								<div className="fs-16 roboto-regular mb-4">
									We process personal information based on the following legal
									grounds:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular">
										Consent: When you provide your personal information
										voluntarily (e.g., by submitting a contact form or
										subscribing to newsletters), you consent to the processing
										ofyour information.
									</li>
									<li className="fs-16 roboto-regular">
										Contractual Necessity: To perform services you have
										requested from us or to enter into a contract with you.
									</li>
									<li className="fs-16 roboto-regular">
										Legitimate Interests: To improve our Site, marketing, and
										services, provided that these interests do not override your
										data protection rights.
									</li>
									<li className="fs-16 roboto-regular">
										Legal Obligation: To comply with applicable laws and
										regulations.
									</li>
								</ul>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									4. Sharing Your Information
								</div>
								<div className="fs-16 mb-4 roboto-regular">
									We may share your personal information in the following
									circumstances:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular my-4">
										Service Providers: We may share your information with
										third-party vendors or service providers who assist in
										operating our Site or providing services on our
										behalf.These third parties are obligated to protect your
										information and use it only as necessary to perform their
										functions.
									</li>
									<li className="fs-16 roboto-regular">
										Legal Compliance: We may disclose your information if
										required to do so by law or in response to valid legal
										requests, such as a court order or governmentinvestigation.
									</li>
									<li className="fs-16 roboto-regular mt-4">
										Business Transfers: In the event of a merger, acquisition,
										or sale of assets, your information may be transferred to
										the new owner.
									</li>
								</ul>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									5. Security of Your Information
								</div>
								<div className="fs-16 roboto-regular">
									We take reasonable measures to protect your personal
									information from unauthorized access, disclosure, alteration,
									or destruction. However, no method of transmission over the
									internet or electronic storage is 100% secure, and we cannot
									guarantee absolute security.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									6. Retention of Data
								</div>
								<div className="fs-16 roboto-regular">
									We will retain your personal information only for as long as
									necessary to fulfill the purposes for which it was collected,
									comply with legal obligations, resolve disputes, and enforce
									agreements. When your information is no longer needed, we will
									securely delete or anonymize it.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">7. Your Rights</div>
								<div className="fs-16 roboto-regular per mb-4">
									Depending on your location, you may have the following rights
									regarding your personal data:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular list-none">
										Access: You have the right to request a copy of the personal
										information we hold about you.
									</li>
									<li className="fs-16 roboto-regular list-none">
										Correction: You have the right to request corrections to any
										inaccurate or incomplete information.
									</li>
									<li className="fs-16 roboto-regular list-none">
										Deletion: You may request that we delete your personal
										information, subject to certain exceptions (e.g., legal or
										contractual obligations).
									</li>
									<li className="fs-16 roboto-regular list-none">
										Objection and Restriction: You can object to or request the
										restriction of the processing of your personal data in
										certain circumstances.
									</li>
									<li className="fs-16 roboto-regular list-none">
										Data Portability: You have the right to request a transfer
										of your personal data in a structured, commonly used, and
										machine-readable format.
									</li>
								</ul>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 roboto-regular">
									To exercise any of these rights, please contact us using the
									contact information provided below.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									8. International Data Transfers
								</div>
								<div className="fs-16 roboto-regular">
									If you are located outside the United Kingdom, please note
									that your personal information may be transferred to and
									processed in the UK or other countries. By using our Site, you
									consent to the transfer of your data to these jurisdictions,
									which may have different data protection laws.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									9. Third-Party Links
								</div>
								<div className="fs-16 roboto-regular">
									Our Site may contain links to third-party websites that are
									not operated or controlled by Innovat. We are not responsible
									for the privacy practices or content of such third-party
									websites. We encourage you to review the privacy policies of
									any external websites you visit.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									10. Cookies and Tracking Technologies
								</div>
								<div className="fs-16 roboto-regular">
									We use cookies and other tracking technologies to enhance your
									experience on our Site. For detailed information on how we use
									cookies, please refer to our Cookie Policy.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									11. Changes to This Privacy Policy
								</div>
								<div className="fs-16 roboto-regular">
									We may update this Privacy Policy from time to time to reflect
									changes in our practices, legal requirements, or for other
									operational reasons. Any changes will be posted on this page,
									and the "Effective Date" at the top of this Policy will be
									updated accordingly. Please review this Privacy Policy
									regularly to stay informed about how we are protecting your
									information.
								</div>
							</div>
							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">12. Contact Us</div>
								<div className="fs-16 roboto-regular">
									If you have any questions about this Privacy Policy or how we
									handle your personal information, please contact us at:
								</div>
								<div className="fs-16 mt-4 roboto-bold">
									Innovat (UK) Limited
								</div>
								<div className="fs-16 roboto-regular">
									63-66 Hatton Garden
								</div>
								<div className="fs-16 roboto-regular">
									Fifth Floor, Suite 23
								</div>

								<div className="fs-16 roboto-regular">
									London, United Kingdom EC1N 8LE
								</div>

								<div className="fs-16 roboto-regular">
									enquiries@innovat.global
								</div>
								<div className="fs-16 mt-5 roboto-regular">
									By using our Site, you acknowledge that you have read,
									understood, and agree to the terms of this Privacy Policy.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
