'use client'
import "@/app/styles/legaldisclaimer.scss";
import { useEffect } from "react";

const LegalDisclaimer = () => {
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
								Legal Disclaimer
							</div>
							<div className="fs-16 mt-3 mb-4 roboto-bold">
								Effective Date: January 13, 2025
							</div>
							<div className="fs-16 roboto-regular">
								The information provided on this website ("Site") is for general
								informational purposes only. Innovat (UK) Limited ("Innovat",
								"we", "us", or "our") does not provide investment, financial,
								legal, or tax advice, and the contents of the Site should not be
								construed as such. You should always seek the advice of a
								qualified professional before making any investment decisions or
								taking any action based on the information provided on this
								Site.
							</div>
							{LegalDatas.map((term, index) => (
								<div key={index} className="privacyPolicyBox">
									<div className="fs-16 my-4 roboto-bold">{term.title}</div>
									<div className="fs-16 roboto-regular pera">
										{term.content}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const LegalDatas = [
	{
		title: "1. No Investment Advice or Offer",
		content:
			"The content of this Site is not intended to be, nor should it be construed as, an offer to sell or the solicitation of an offer to buy any securities or investment products. Innovat does not offer personalized investment advice through this Site. Any decision to invest or engage in financial transactions should be based on independent research and personal consideration of your financial circumstances, and we encourage you to consult with a qualified financial advisor before making any investment decisions.",
	},
	{
		title: "2. Accuracy of Information",
		content:
			"While Innovat makes every effort to ensure that the information presented on the Site is accurate, reliable, and up to date, we make no representations or warranties regarding the accuracy, completeness, or timeliness of any content. Innovat is not liable for any errors or omissions on the Site, nor for any actions taken based on the information provided.",
	},
	{
		title: "3. Third-Party Links",
		content:
			"The Site may contain links to third-party websites that are not operated or controlled by Innovat. Innovat does not endorse, guarantee, or assume responsibility for the accuracy, content, privacy practices, or any other aspects of such third-party sites. You access these external sites at your own risk.",
	},
	{
		title: "4. Limitation of Liability",
		content:
			"To the fullest extent permitted by law, Innovat (UK) Limited, its directors, officers, employees, agents, or affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or opportunities arising out of your use of the Site or any content therein, even if Innovat has been advised of the possibility of such damages.",
	},
	{
		title: "5. No Warranties",
		content:
			'The Site and all content provided on it are offered on an "as-is" basis. Innovat makes no representations or warranties of any kind, express or implied, regarding the operation of the Site or the content contained therein, including but not limited to the accuracy, reliability, or availability of the Site. Innovat does not warrant that the Site will be uninterrupted or error-free.',
	},
	{
		title: "6. Changes to Content",
		content:
			"Innovat reserves the right to modify, update, or remove any content on the Site at any time without prior notice. We do not commit to updating or ensuring the accuracy of the content on the Site.",
	},
];

export default LegalDisclaimer;
