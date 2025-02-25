import approachGraphic from "@/app/../../public/assets/images/approach-graphic.svg";
import arrowCircle from "@/app/../../public/assets/images/arrow_circle_icon.svg";
import arrowCircleRight from "@/app/../../public/assets/images/arrow_circle_right_icon.svg";
import check from "@/app/../../public/assets/images/check_icon.svg";
import eductionGraphic from "@/app/../../public/assets/images/education-graphic.svg";
import electricCar from "@/app/../../public/assets/images/electric_car_icon.svg";
import fileText from "@/app/../../public/assets/images/file_text_icon.svg";
import fuel from "@/app/../../public/assets/images/fuel_icon.svg";
import investmentGraphic from "@/app/../../public/assets/images/investment-graphic.svg";
import linkedin from "@/app/../../public/assets/images/linkedin_icon.svg";
import linkedin2 from "@/app/../../public/assets/images/linkedin_icon2.svg";
import logo from "@/app/../../public/assets/images/logo.svg";
import memory from "@/app/../../public/assets/images/memory_icon.svg";
import researchGraphic from "@/app/../../public/assets/images/research-graphic.svg";
import telegram from "@/app/../../public/assets/images/telegram_icon.svg";
import twitter from "@/app/../../public/assets/images/twitter_icon.svg";
import twitter2 from "@/app/../../public/assets/images/twitter_icon2.svg";
import wmremoveTransformed from "@/app/../../public/assets/images/wmremove-transformed.svg";
import youtube from "@/app/../../public/assets/images/youtube_icon.svg";
import youtube2 from "@/app/../../public/assets/images/youtube_icon2.svg";
import Image from "next/image";

// Logo
export const Logo = () => <Image width={145} height={47.72} src={logo} alt={logo} />;

// icons
export const LinkedIn = () => <Image width={35} height={36} src={linkedin} alt={linkedin} />;
export const Twitter = () => <Image width={35} height={36} src={twitter} alt={twitter} />;
export const Youtube = () => <Image width={35} height={36} src={youtube} alt={youtube} />;
export const Telegram = () => <Image width={35} height={36} src={telegram} alt={telegram} />;
export const LinkedIn2 = () => <Image width={35} height={36} src={linkedin2} alt={linkedin2} />;
export const Twitter2 = () => <Image width={35} height={36} src={twitter2} alt={twitter2} />;
export const Youtube2 = () => <Image width={35} height={36} src={youtube2} alt={youtube2} />;
export const ArrowCircle = () => <Image width={60} height={60} className="img-fluid" src={arrowCircle} alt={arrowCircle} />;
export const ArrowCircleRight = () => (
	<Image width={35} height={36} src={arrowCircleRight} alt={arrowCircleRight} />
);
export const Memory = () => <Image width={35} height={36} src={memory} alt={memory} />;
export const Fuel = () => <Image width={35} height={36} src={fuel} alt={fuel} />;
export const ElectricCar = () => <Image width={35} height={36} src={electricCar} alt={electricCar} />;
export const FileText = () => <Image width={35} height={36} src={fileText} alt={fileText} />;
export const Check = () => <Image width={35} height={36} src={check} alt={check} />;

// Images
export const WmremoveTransformed = () => (
	<Image width={35} height={36} src={wmremoveTransformed} alt={wmremoveTransformed} className="img-fluid" />
  );
  
  export const ApproachGraphic = () => (
	<Image width={483.75} height={459.75} src={approachGraphic} alt={approachGraphic} className="img-fluid" />
  );
  
  export const EducationGraphic = () => (
	<Image width={461.41} height={461.41} src={eductionGraphic} alt={eductionGraphic} className="img-fluid" />
  );
  
  export const InvestmentGraphic = () => (
	<Image width={480} height={480} src={investmentGraphic} alt={investmentGraphic} className="img-fluid" />
  );
  
  export const ResearchGraphic = () => (
	<Image width={480} height={480} src={researchGraphic} alt={researchGraphic} className="img-fluid" />
  );
  