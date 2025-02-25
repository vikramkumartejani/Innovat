import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { ResearchGraphic } from "../../Image";
// import { Link } from "react-router-dom";

const ResearchCenter = () => {
	return (
		<div className="research-center icontainer">
			<Row className="d-flex align-items-center rows">
				<Col lg={6} className="order-lg-1 order-2">
					<ResearchGraphic />
				</Col>
				<Col lg={6} className="order-1 order-lg-2">
					<h3>Research Center</h3>
					<p style={{fontWeight:"200"}}>
						Our team of experienced analysts delivers comprehensive research and
						analysis on the markets and industries we invest in. By combining
						quantitative analysis with fundamental research, we identify
						attractive investment opportunities.
					</p>
					<p style={{fontWeight:"200"}}>
						Stay informed on the latest developments in thematic investing
						through our blog posts and articles written by our experts. Gain
						insights into emerging market trends and receive valuable advice on
						making smart investment decisions for your portfolio.
					</p>

					<Link href="/research">
						<button className="outline-btn">Read More</button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default ResearchCenter;
