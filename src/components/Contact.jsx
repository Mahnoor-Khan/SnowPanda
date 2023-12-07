import Arrow from "/images/Arrow.png";
import linkdin from "/images/linkdin.svg";
import logo from "/images/logo.png";
import contactBg from "/images/contact-bg.png";
import mobileImg from "/images/contact-mobile-img.png";

function Contact() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="px-4 sm:px-8 md:px-20 lg:px-24 pt-16 flex flex-col lg:flex-row gap-20 md:gap-40 xl:gap-64 justify-center items-center">
        <div className="flex flex-col gap-4">
          <p className="text-[20px] leading-normal text-white">Companies</p>
          <button className="border border-white justify-center items-center rounded-[10px] px-6 py-4 flex gap-3 blurBg text-sm text-white">
            Let’s Connect <img src={Arrow} alt="arrow" />
          </button>
          <p className="text-[20px] leading-normal text-white">Job Hunters</p>
          <button className="border border-white justify-center items-center rounded-[10px] px-6 py-4 flex gap-3 blurBg text-sm text-white">
            Join Our Talent Network <img src={Arrow} alt="arrow" />
          </button>
        </div>
        <div>
          <img src={mobileImg} alt="_mobile" />
        </div>
      </div>

      {/* footer section  */}
      <div className="flex items-center lg:justify-between lg:flex-nowrap lg:flex-row flex-col justify-center w-full text-black bg-white px-3 py-0 rounded-xl">
        <div className=" flex items-center gap-0">
          <img src={logo} alt="logo image" width={70} height={70} />
          <div className=" font-bold text-[18px] flex items-center gap-0 ml-[-15px]">
            {" "}
            <span className=" text-[#46A1DA]">Snow</span>
            <span className=" text-black">Panda</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-2 lg:mb-0">
          <img src={linkdin} alt="linkdin" />
          <h2>Privacy Policy</h2>
        </div>
        <div className=" text-[16px] text-black">
          Copyright © 2023 Snow Panda Recruiting. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Contact;
