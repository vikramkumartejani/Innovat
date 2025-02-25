/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
'use client'
import "@/app/styles/terms-conditions.scss";
import { useEffect } from "react";

const Careers = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="other-page icontainer">
			<div className="wrapper-section">
				<div className="row">
					<div className="col-lg-12">
						<div className="">
							<div className="fs-24 fw-900 roboto-black headline pb-3">
								Terms of Use
							</div>
							<div className="fs-16 mt-3 mb-4 roboto-bold">
								Effective Date: January 13, 2025
							</div>
							<div className="fs-16 fw-400 pera">
								These Terms of Use ("Terms") govern your access to and use of
								the website ("Site") of Innovat (UK) Limited ("Innovat", "we",
								"us", or "our"), an investment management and private equity
								firm. By accessing, browsing, or using the Site, you agree to
								comply with and be bound by these Terms. If you do not agree to
								these Terms, you must not use the Site.
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">1. Acceptable Use</div>
								<div className="fs-16 roboto-regular pera mb-4">
									By using this Site, you agree to:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular pera">
										Comply with all applicable laws, rules, and regulations when
										accessing or using the Site.
									</li>
									<li className="fs-16 roboto-regular pera">
										Use the Site only for lawful purposes and in a manner that
										does not infringe the rights of others or restrict or
										inhibit anyone else’s use of the Site.
									</li>
									<li className="fs-16 roboto-regular pera">
										Not engage in any activity that may harm, disrupt, or
										interfere with the functioning of the Site or the servers or
										networks connected to the Site.
									</li>
								</ul>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									2. Ownership and Intellectual Property
								</div>
								<div className="fs-16 roboto-regular pera">
									All content, materials, logos, trademarks, and other
									intellectual property on the Site, including but not limited
									to text, images, graphics, video, and software, are
									theproperty of Innovat (UK) Limited or its licensors and are
									protected by intellectual property laws.
								</div>
								<div className="fs-16 roboto-regular pera">
									You may not copy, reproduce, distribute, or create derivative
									works of any part of the Site without the prior written
									consent of Innovat, except for personal, noncommercial use as
									permitted by these Terms.
								</div>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">3. User Accounts</div>
								<div className="fs-16 mb-4 roboto-bold">
									If the Site requires you to create an account, you agree to:
								</div>
								<ul className="privacy-ul">
									<li className="fs-16 roboto-regular pera">
										Provide accurate, complete, and up-to-date information
										during registration.
									</li>
									<li className="fs-16 roboto-regular pera">
										Maintain the confidentiality of your account information,
										including your password.{" "}
									</li>
									<li className="fs-16 roboto-regular pera">
										Notify Innovat immediately of any unauthorized access to
										your account.{" "}
									</li>
								</ul>
								<div className="fs-16 roboto-bold">
									You are responsible for all activities that occur under your
									account, and Innovat is not liable for any unauthorized use.
								</div>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									4. No Investment Advice or Offer
								</div>
								<div className="fs-16 roboto-regular pera">
									The information provided on the Site is for general
									informational purposes only. Nothing on the Site constitutes
									an offer to sell or the solicitation of an offer to buy any
									securities, investments, or financial products. Innovat does
									not provide personalized investment advice, and any reliance
									on the content of the Site is at your own risk.
								</div>
							</div>

							<div className="privacyPolicyBox">
								<div className="fs-16 my-4 roboto-bold">
									5. Disclaimers and Limitation of Liability
								</div>
								<div className="fs-16 roboto-regular pera">
									The Site is provided on an "as-is" and "as-available" basis.
									Innovat makes no representations or warranties, express or
									implied, regarding the accuracy, reliability,or completeness
									of the content on the Site.
								</div>
								<div className="fs-16 roboto-regular pera">
									Innovat is not liable for any direct, indirect, incidental,
									consequential, or punitive damages arising from your use or
									inability to use the Site, even if Innovat has been advised of
									the possibility of such damages.
								</div>
							</div>

							{termsData.slice(0, 11).map((term, index) => (
								<div key={index} className="privacyPolicyBox">
									<div className="fs-16 my-4 roboto-bold">{term.title}</div>
									<div className="fs-16 roboto-regular pera">
										{term.content}
									</div>
								</div>
							))}

							<div className="privacyPolicyBox">
								<div className="fs-16 mt-4 roboto-bold">
									Innovat (UK) Limited
								</div>
								<div className="fs-16 roboto-regular pera">
									63-66 Hatton Garden
								</div>
								<div className="fs-16 roboto-regular pera">
									Fifth Floor, Suite 23
								</div>

								<div className="fs-16 roboto-regular pera">
									London, United Kingdom EC1N 8LE
								</div>

								<div className="fs-16 roboto-regular pera">
									enquiries@innovat.global
								</div>
								<div className="fs-16 mt-5 roboto-regular pera">
									By using the Site, you acknowledge that you have read,
									understood, and agree to these Terms of Use.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const termsData = [
	{
		title: "6. Privacy and Data Protection",
		content:
			"Your use of the Site is also governed by Innovat’s Privacy Policy, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand how Innovat collects, uses, and protects your personal information.",
	},
	{
		title: "7. External Links",
		content:
			"The Site may contain links to third-party websites that are not operated or controlled by Innovat. Innovat is not responsible for the content, privacy policies, or practices of third-party websites. You access such websites at your own risk.",
	},
	{
		title: "8. Modifications to the Site and Terms",
		content:
			"Innovat reserves the right to modify or discontinue the Site, in whole or in part, at any time without notice. We may also update or revise these Terms at any time. Any changes will be effective immediately upon posting on the Site. It is your responsibility to review these Terms regularly to ensure you are aware of any updates.",
	},
	{
		title: "9. Governing Law",
		content:
			"These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or in connection with these Terms or the use of the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
	},
	{
		title: "10. Termination",
		content:
			"Innovat may, at its sole discretion, suspend or terminate your access to the Site at any time without notice for any reason, including if you violate these Terms. Upon termination, your right to use the Site will immediately cease.",
	},
	{
		title: "11. Contact Information",
		content:
			"If you have any questions about these Terms, please contact us at:",
	},
];

export default Careers;
