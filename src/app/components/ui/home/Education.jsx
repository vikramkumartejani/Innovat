import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { EducationGraphic } from "../../Image";
// import { Link } from "react-router-dom";

const Education = () => {
	return (
		<div className="education icontainer">
			<Row className="d-flex align-items-center rows">
				<Col lg={7}>
					<h3>Education</h3>
					<p style={{fontWeight:"200"}}>
						At Innovat, we believe that knowledge is power. That’s why we
						provide you with access to comprehensive educational resources. Our
						materials include insights on exchange-traded funds (ETFs),
						strategies for maximizing ETF investing, and the benefits of
						thematic investing.
					</p>
					<p style={{fontWeight:"200"}}>
						Additionally, we offer educational courses on thematic investing and
						the latest innovations to help you stay ahead of the curve. Our goal
						is to empower you to make informed decisions about your investments
						and take control of your financial future.
					</p>

					<Link href="/education">
						<button className="outline-btn">Read More</button>
					</Link>
				</Col>
				<Col lg={5} className="d-flex justify-content-end">
					<EducationGraphic />
				</Col>
			</Row>
		</div>
	);
};

export default Education;
