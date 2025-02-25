/* import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "@/app/../Image"; */
import electricCar from "../../../../../public/assets/images/electric_car_icon.svg";
import fuel from "../../../../../public/assets/images/fuel_icon.svg";
import memory from "../../../../../public/assets/images/memory_icon.svg";

const InvestmentCarousel = () => {
	/* const swiperRef = useRef(null); */

	return (
		<>
			<div className="investment-slider icontainer">
				{/* <Swiper
					ref={swiperRef}
					modules={[Navigation]}
					grabCursor={false}
					spaceBetween={17}
					slidesPerView={1.1}
					slidesPerGroup={3}
					breakpoints={{
						320: {
							slidesPerGroup: 1,
							slidesPerView: 1.1,
						},
						640: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
					}}>
					{investmentCategories.map((category) => (
						<div key={category.id} className="slider-card-wrapper">
							<div className="slider-card">
								<div className="card-header">
									<img src={category.icon} alt="" className="icon" />

									<div className="icon-box">
										<img src={category.icon} alt="" className="icon-mobile" />
									</div>

									<div className="card-content-box">
										<div>
											<h3>{category.title}</h3>
											<p className="card-content">{category.description}</p>
										</div>
										<button className="find-out-more">Find Out More</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</Swiper> */}

				{/* <button
					onClick={() => swiperRef.current.swiper.slideNext()}
					className="custom-nav-button"
					aria-label="Next slide">
					<ArrowCircleRight />
				</button> */}

				{investmentCategories
					.map((category) => (
						<div key={category.id} className="slider-card-wrapper">
							<div className="slider-card">
								<div className="card-header">
									<img src={category.icon} alt="" className="icon" />

									<div className="icon-box">
										<img src={category.icon} alt="" className="icon-mobile" />
									</div>

									<div className="card-content-box">
										<div>
											<h3>{category.title}</h3>
											<p className="card-content">{category.description}</p>
										</div>
										<button className="find-out-more">Find Out More</button>
									</div>
								</div>
							</div>
						</div>
					))
					.slice(0, 3)}
			</div>
		</>
	);
};

export default InvestmentCarousel;

const investmentCategories = [
	{
		id: 2,
		title: "Innovat™ Digital Infrastructure",
		icon: memory,
		description:
			"Invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
	},
	{
		id: 1,
		title: "Innovat™ Clean Energy",
		icon: fuel,
		description:
			"Invest in companies that are leading the way in the development of clean energy technologies, such as solar, nuclear, wind, and geothermal",
	},

	{
		id: 3,
		title: "Innovat™ Autonomous Tech",
		icon: electricCar,
		description:
			"Invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 4,
		title: "Innovat™ Fintech",
		icon: fuel,
		description:
			"Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
	},
	{
		id: 5,
		title: "Innovat™ Blockchain Technology",
		icon: memory,
		description:
			"This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
	},
	{
		id: 6,
		title: "Innovat™ Space Tech & Exploration",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 7,
		title: "Innovat™ China Innovation",
		icon: fuel,
		description:
			"Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
	},
	{
		id: 8,
		title: "Innovat™ US Innovation",
		icon: memory,
		description:
			"This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
	},
	{
		id: 9,
		title: "Innovat™ Diversified Technology",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 10,
		title: "Innovat™ Cybersecurity",
		icon: fuel,
		description:
			"Invest in companies that are leading the way in the development of clean energy technologies, such as solar, wind, and geothermal.",
	},
	{
		id: 11,
		title: "Innovat™ Internet of Things",
		icon: memory,
		description:
			"This fund invests in companies that are developing digital infrastructure solutions such as cloud computing platforms, data storage systems, network security solutions etc.",
	},
	{
		id: 12,
		title: "Innovat™ Mobility & Transportation",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 13,
		title: "Innovat™ Bitcoin Mining",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 14,
		title: "Innovat™ Digital Health",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 15,
		title: "Innovat™ Media & Entertainment",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 16,
		title: "Innovat™ Sustainable Agriculture",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 17,
		title: "Innovat™ Digital Assets",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 18,
		title: "Innovat™ Artificial Intelligence",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 19,
		title: "Innovat™ Robotics & Automation",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
	{
		id: 20,
		title: "Innovat™ Digital Assets",
		icon: electricCar,
		description:
			"This fund invests in companies that are developing autonomous technologies such as self-driving cars, drones, robots, and artificial intelligence (AI).",
	},
];
