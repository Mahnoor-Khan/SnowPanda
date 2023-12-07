/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import pandaImg from "/images/panda-img.svg";
import snowPandaBg from "/images/snow-panda-img.svg";

function SnowPanda() {
  const tags = [
    "Talent Network",
    "Technical Interviews",
    "Behavioural Interviews",
    "Panel Review",
  ];
  return (
    <div className="bg-[#673AB7] flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-20 lg:px-24 pt-32 pb-40">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <div className="flex gap-4 items-center justify-start">
          <img src={pandaImg} alt="_panda" />
          <p className="text-[55px] font-bold text-[#46A1DA]">
            Snow<span className="text-black">Panda</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <div className="rounded-full border border-white px-2 text-white text-sm leading-normal">
                {tag}
              </div>
            ))}
          </div>
          <p className="text-white text-[20px] leading-normal">
            <span className="text-[22px] font-bold text-[#46A1DA] leading-normal">
              Snow<span className="tetx-black">Panda</span>
            </span>
            • We're matchmakers forging meaningful connections between top
            technical talent and innovative companies. Rooted in trust and
            technical expertise, we redefine success through relationships that
            go beyond the job search. Join us on a transformative journey, one
            connection at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-1/2">
        <img src={snowPandaBg} alt="bg" />
      </div>
    </div>
  );
}

export default SnowPanda;
