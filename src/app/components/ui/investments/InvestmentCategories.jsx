import Image from "next/image";
import { Col, Row } from "react-bootstrap";
// import photo from "../../../../../public/assets/images/back.jpg";
const InvestmentCategories = () => {
  return (
    <div className="icontainer">
      <h3 className="sub-section-header">Investments</h3>
      <div className="investment-categories ">
        <div className="">
          <p className="header-text">
            We invest in data centers and the energy systems that power them,
            delivering the essential infrastructure driving the AI and digital
            revolution.
          </p>

          {/* <Row className="g-lg-5">
            <Col md={6}>
              {categories.topCategories
                .slice(0, Math.ceil(categories.topCategories.length / 2))
                .map((category, index) => (
                  <div key={index} className="category">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                ))}
            </Col>
            <Col md={6} className="mt-0 mt-md-auto">
              {categories.topCategories
                .slice(Math.ceil(categories.topCategories.length / 2))
                .map((category, index) => (
                  <div key={index} className="category">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                ))}
            </Col>
          </Row> */}

          <div className="categories-grid">
            {categories.topCategories.map((category, index) => (
              <div key={index} className="category">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          width={1280}
          height={771}
          className="img-fluid gap-y"
          src="assets/images/back.jpg"
          alt="back images"
        />
      </div>

      {/* <div className="video-box"> */}
        {/* <video width="100%" height="720" className="d-block" autoPlay loop muted>
            <source src="assets/video/hero-video.mp4" type="video/mp4" />
          </video> */}
       
      {/* </div> */}

      <div className="investment-categories icontainer pt-0 overflow-hidden">
        <div className="transformation-header">TRANSFORMATION</div>

        <Row className="g-lg-5">
          <Col md={6}>
            {categories.transformationCategories
              .slice(
                0,
                Math.ceil(categories.transformationCategories.length / 2)
              )
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
          <Col md={6}>
            {categories.transformationCategories
              .slice(Math.ceil(categories.transformationCategories.length / 2))
              .map((category, index) => (
                <div key={index} className="category">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InvestmentCategories;

const categories = {
  topCategories: [
    {
      title: "Digital Infrastructure & Connectivity",
      description:
        "Investing in the backbone of the digital economy, we target companies building data centers, cloud computing platforms, high-speed connectivity solutions, and advanced cybersecurity systems that enable a connected world.",
    },
    {
      title: "Blockchain & Digital Currencies",
      description:
        "We support businesses leveraging blockchain technology to revolutionize industries, from decentralized finance and supply chain management to digital identity and tokenized assets.",
    },
    {
      title: "Bitcoin Ecosystem",
      description:
        "Our investments focus on the growing Bitcoin ecosystem, including infrastructure development, payment systems, and financial services that facilitate the adoption of Bitcoin as a global store of value and medium of exchange.",
    },
    {
      title: "Sustainable Bitcoin Mining",
      description:
        "We invest in innovative Bitcoin mining operations that prioritize energy efficiency and leverage clean energy sources, ensuring sustainability in blockchain technology.",
    },
    {
      title: "FinTech & Digital Payments",
      description:
        "Investing in companies reshaping the financial landscape, we focus on digital payment systems, decentralized finance platforms, and technologies that enhance financial inclusion and streamline global transactions.",
    },
    {
      title: "Quantum Computing & Advanced Computing",
      description:
        "We support innovators in quantum computing and advanced computing technologies, unlocking unprecedented computational power to solve complex problems across cryptography, materials science, and beyond.",
    },

    {
      title: "Energy Transition & Sustainability",
      description:
        "Accelerating the shift to clean energy, we back companies advancing renewable energy technologies, energy storage systems, and carbon-neutral solutions critical to a sustainable future.",
    },

    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Supporting businesses that harness AI and machine learning to solve complex problems, optimize operations, and create intelligent systems across industries such as healthcare, finance, and manufacturing.",
    },
    {
      title: "Autonomous Systems & Robotics",
      description:
        "We invest in pioneers of autonomous technologies, including self-driving vehicles, drones, and industrial robotics, shaping the future of mobility and automation.",
    },
    {
      title: "EdTech & Digital Learning",
      description:
        "Fostering innovation in education, we invest in companies developing cutting-edge EdTech solutions, including personalized learning platforms, virtual classrooms, and AI-driven educational tools. These technologies empower learners of all ages and bridge global education gaps.",
    },
    {
      title: "Life Sciences & Biotechnology",
      description:
        "Investing in cutting-edge life sciences companies driving advancements in healthcare, biotechnology, and medical devices, addressing critical global health challenges.",
    },

    {
      title: "Space Technology & Exploration",
      description:
        "Backing companies at the forefront of space technology, we focus on satellite communications, space exploration, and commercialization efforts that drive advancements in connectivity, research, and sustainable space operations.",
    },
  ],
  transformationCategories: [
    {
      title: "Technology & Innovation Strategy",
      description:
        "Leveraging emerging technologies to create competitive advantages, we work with portfolio companies to develop and execute innovation strategies that drive growth and market leadership.",
    },
    {
      title: "Operational Excellence & Portfolio Optimization",
      description:
        "Enhancing operational efficiency and optimizing performance, we provide hands-on support to streamline processes, reduce costs, and unlock value across our portfolio.",
    },
    {
      title: "Sustainability & ESG Integration",
      description:
        "We embed environmental, social, and governance (ESG) principles into every investment, ensuring sustainable practices that align with long-term value creation and societal impact.",
    },
    {
      title: "Digital Transformation & Automation",
      description:
        "Helping businesses embrace digital transformation, we enable them to adopt automation technologies, enhance customer experiences, and remain competitive in an evolving digital landscape.",
    },

    {
      title: "Data-Driven Decision Making",
      description:
        "Empowering portfolio companies with actionable insights, we utilize advanced analytics and big data to inform strategic decisions and maximize growth opportunities.",
    },
  ],
};
