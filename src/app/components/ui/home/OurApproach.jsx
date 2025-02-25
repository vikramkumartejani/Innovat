import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { ApproachGraphic } from "../../Image";
// import { Link } from "react-router-dom";

const OurApproach = () => {
	return (
		<div className="our-approach icontainer">
			<Row className="d-flex align-items-center rows">
				<Col lg={7}>
					<h3 className="">Our Approach</h3>
					<p style={{fontWeight:"200"}}>
						We have a team of experts specializing in a variety of sectors,
						including clean energy technology, autonomous vehicles, fintech
						solutions, digital infrastructure projects, blockchain technology
						applications, and more.
					</p>
					<p style={{fontWeight:"200"}}>
						We strive to identify companies at the forefront of innovation with
						the potential for long-term growth.
					</p>
					<p style={{fontWeight:"200"}}>
						Our team is committed to providing you with the most up-to-date
						information on emerging trends in disruptive innovation, as well as
						insights into specific sectors, so you can make informed decisions
						about your investments.
					</p>
					<Link href="/about-innovat">
						<button className="outline-btn">Read More</button>
					</Link>
				</Col>
				<Col lg={5} className="d-flex justify-content-end">
					<ApproachGraphic />
				</Col>
			</Row>
		</div>
	);
};

export default OurApproach;
