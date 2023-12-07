import heroBg from "/images/hero-bg.png";
import heroImage from "/images/heroImage.png";

function Hero() {
  return (
    <>
      <div
        className="pt-16 pb-24 px-4 sm:px-8 md:px-20 lg:px-24 flex flex-col lg:flex-row gap-6 md:gap-3 justify-between items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4 max-w-[531px]">
            <p className="text-[44px] leading-normal text-[#673AB7]">
              Great <span className="font-[800] heroText">Companies</span> are{" "}
              <span className="font-[800] heroSecond">built by great</span>
              <span className="font-[800] heoText">teams</span>
            </p>
            <p className="text-[#4A5568] text-lg leading-normal">
              Our team of world-class technical recruiters and innovative hiring
              strategies have a track record of building great teams
            </p>
          </div>
          <button className="w-fit text-sm leading-normal text-white py-4 px-6 rounded-lg bg-[#FA5E5E]">
            Let’s Get Started!
          </button>
        </div>
        <div>
          <img src={heroImage} alt="_hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
