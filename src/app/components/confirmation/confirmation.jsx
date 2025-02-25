import backgroundImage from "@/app/../../public/assets/images/contact_back.svg";
import { useEffect } from "react";

const Confirmation = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const confirmStyle = {
		fill: "#98A4D7",
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		paddingTop: "50px",
		paddingBottom: "100px",
	};
	return (
		<div>
			<div
				style={confirmStyle}
				className="show d-flex flex-column justify-content-center align-items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					width={100}
					height={100}>
					<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
				</svg>
				<h4 className="thank-you-text mt-3">
					Thank you, we have received your enquiry and will be in contact with
					you shortly.
				</h4>
			</div>
		</div>
	);
};

export default Confirmation;
