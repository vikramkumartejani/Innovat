const Newsletter = ({ scrollToContact }) => {
	return (
		<div className="icontainer home_newsletter">
			<h4>Stay up to Date </h4>
			<p style={{fontWeight:"200"}}>
				Subscribe to Innovat’s Monthly Research & Insights Newsletter Get
				exclusive updates and notifications on Innovat’s latest research and
				insights to keep you ahead in a fast-changing global economy.
			</p>

			<button onClick={() => scrollToContact()}>Subscribe</button>
		</div>
	);
};

export default Newsletter;
