// import { Link } from "react-router-dom";
import "@/app/styles/footer.scss";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { LinkedIn, Logo, Telegram, Twitter2, Youtube } from "../Image";

const Footer = () => {
	return (
		<div className="footer icontainer d-grid gap-4">
			<div className="">
				<div className="footer-area">
					<Row>
						<Col lg={3}>
							<div className="footer-item text-center text-lg-start">
								<Link href="/">
									<Logo />
								</Link>
							</div>
							<p className="copyright">© 2024 Innovat. All rights reserved.</p>
						</Col>
						<Col lg={9} className="footer-weget">
							<Row className="footerLinks">
								<Col lg={4} className="d-none d-lg-block">
									<ul>
										<li>
											<Link href="/terms">Terms of Use</Link>
										</li>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/legal-disclaimer">Legal Disclaimer</Link>
										</li>
									</ul>
								</Col>
								<Col lg={4} className="d-none d-lg-block">
									<ul>
										<li>
											<Link href="/about-innovat">About Innovat</Link>
										</li>
										<li>
											<Link href="/careers">Careers</Link>
										</li>
										<li>
											<Link href="/contact">Contact Us</Link>
										</li>
									</ul>
								</Col>
								<Col className="footer-list-phone-show d-lg-none">
									<div className="d-flex justify-content-center gap-lg-3">
										<Link href="/terms">Terms of Use</Link>
										<Link href="/privacy-policy">Privacy Policy</Link>
										<Link href="/legal-disclaimer">Legal Disclaimer</Link>
									</div>
								</Col>
								<Col lg={4}>
									<div className="footer-item connect-icon">
										<h6 className="text-center">Connect with Us </h6>
										<ul>
											<li>
												<a
													target="_blank"
													rel="noreferrer"
													href="https://www.linkedin.com/company/innovat-official"
													className="footerIcon">
													<LinkedIn />
												</a>
											</li>
											<li>
												<a
													target="_blank"
													rel="noreferrer"
													href="https://x.com/InnovatOfficial"
													className="footerIcon">
													<Twitter2 />
												</a>
											</li>

											<li>
												<a
													target="_blank"
													rel="noreferrer"
													href="https://www.youtube.com/@InnovatOfficial"
													className="footerIcon">
													<Youtube />
												</a>
											</li>

											<li>
												<a
													target="_blank"
													rel="noreferrer"
													href="https://telegram.org/"
													className="footerIcon">
													<Telegram />
												</a>
											</li>
										</ul>
									</div>
								</Col>
							</Row>
						</Col>
						{/* <Col lg={5}>
              <div className="footer-weget">
                <div className="footer-item d-none d-lg-block">
                  <div className="footerLinks">
                    <div>
                      <ul>
                        <li>
                          <Link to="/">About Innovat</Link>
                        </li>
                        <li>
                          <Link to="/">Careers</Link>
                        </li>
                        <li>
                          <Link to="/">privacy policy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="middleRow">
                      <ul>
                        <li>
                          <Link to="/">Our Funds</Link>
                        </li>
                        <li>
                          <Link to="/">education</Link>
                        </li>
                        <li>
                          <Link to="/">Research center</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-list-phone-show d-lg-none">
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/terms">Terms of Use</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/legal-disclaimer">Legal Disclaimer</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-item connect-icon">
                <h6>Connect with us </h6>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                      className="footerIcon"
                    >
                      <Telegram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col> */}
					</Row>
				</div>

				<div className="footer-bottom">
					<p className="disclaimer mb-2">Disclaimer</p>
					<p className="fs-12 mb-2">
						Disclaimer The information provided on this website is for general
						informational purposes only and does not constitute financial,
						legal, or professional advice. It has been prepared without
						considering your personal objectives, financial situation, or needs.
						You should not rely solely on the information provided here to make
						financial decisions.
					</p>
					<p className="fs-12 mb-2">
						Before acting on any information, consider its appropriateness in
						light of your circumstances. If applicable, review any relevant
						offer documents thoroughly and seek independent financial advice
						from a qualified professional.
					</p>
					<p className="fs-12">
						Please note that all financial products and investments carry
						inherent risks, and past performance is not indicative of future
						results. This website does not endorse or guarantee the performance
						of any product, service, or investment mentioned.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
