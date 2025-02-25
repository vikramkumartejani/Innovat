import Image from "next/image";

const Hero = () => {
  return (
    <div className="about_hero icontainer position-relative ">
      <div className="about_hero_text position-absolute" style={{ zIndex: 1 }}>
      We identify and invest in companies that are leading the way in the development of new technologies, creating
        new markets, and driving change across industries.
      </div>
      <img
        style={{ zIndex: 0 }}
        className="position-absolute img-fluid "
        src="assets/images/about-hero-bg.png" // Use WebP for better compression
        // src="https://i.ibb.co.com/zHNtTkH8/about-hero-bg.png" // Use WebP for better compression
        alt="Optimized Background"
        fill={true}
        objectFit="cover" // Ensures it scales properly
        priority // Loads image earlier (use for above-the-fold images)
        quality={80} // Adjust quality to reduce file size
      />

    </div>
  );
};

export default Hero;
