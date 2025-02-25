import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { InvestmentGraphic } from "../../Image";
// import { Link } from "react-router-dom";

const InvestmentFunds = () => {
	return (
		<div className="investment-funds icontainer">
			<Row className="d-flex align-items-center rows">
				<Col lg={6}>
					<InvestmentGraphic />
				</Col>
				<Col lg={6}>
					<h3 className="section-subheader">Investment Funds</h3>
					<p style={{fontWeight:"200"}}>
						We specialize in investing in companies that lead the development of
						new technologies, create new markets, and drive change across
						industries.
					</p>
					<p style={{fontWeight:"200"}}>
						Our funds focus on disruptive innovation and thematic investing,
						offering access to investments in clean energy technology,
						autonomous vehicles, fintech solutions, digital infrastructure
						projects, blockchain technology applications, and more.
					</p>
					<p style={{fontWeight:"200"}}>
						We aim to identify companies at the forefront of innovation with
						strong potential for long-term growth.
					</p>
					<Link href="/investments">
						<button className="outline-btn ">Read More</button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default InvestmentFunds;
