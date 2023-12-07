/* eslint-disable react/jsx-key */
import halfCircleBg from "/images/half-circle-bg.svg";
import headingLine from "/images/snow-process-heading-line.svg";
import timeLine from "/images/time-line.svg";
import purpleProcessLine from "/images/process-purple-line.svg";
import blueProcessLine from "/images/process-blue-line.svg";
import vectorImg1 from "/images/process-vector-img-1.svg";
import vectorImg2 from "/images/process-vector-img-2.svg";
import blueBlob from "/images/blue-blob.svg";
import purpleBlob from "/images/purple-blob.svg";
import companyImg from "/images/company-img.svg";
import candidatemg from "/images/candidate-img.svg";

function SnowPandaProcess() {
  const purpleBoxesContent = [
    {
      heading: "Discovery Meeting",
      description:
        "Engage in a thorough discussion to understand your hiring needs, company culture, and specific requirements",
    },
    {
      heading: "Market Analysis",
      description:
        "Craft compelling job listings with our team to ensure competitiveness for top-tier candidate attraction",
    },
    {
      heading: "Candidate Matching",
      description:
        "Utilize a multi-channel approach to source candidates, including our extensive network and job boards",
    },
    {
      heading: "Extensive Interviews",
      description:
        "Conduct multiple rounds of technical and behavioural interviews to find the best fit for your team",
    },
    {
      heading: "Reference Checks",
      description:
        "We will perform reference checks on candidates that you are ready to hire",
    },
  ];

  const blueBoxesContent = [
    {
      heading: "Candidate Sourcing",
      description:
        "Dive into a comprehensive conversation to comprehend your career aspirations, skills, and preferences",
    },
    {
      heading: "Talent Network",
      description:
        "We’ll add you to our talent network and keep your profile ready for when the perfect opportunity arises",
    },
    {
      heading: "Interview Loop",
      description:
        "Our team will conduct multiple rounds of interviews for a given opportunity and you will be tested to ensure good team fit",
    },
    {
      heading: "Repeat (If Needed)",
      description:
        "Sometimes it takes multiple tries to land somewhere great, we’ll keep your resume in mind for any future opportunities if needed",
    },
  ];
  return (
    <>
      <div className="flex flex-col pt-8 pb-8">

        {/* Header */}
        <div className="flex gap-6 justify-between items-center">
          <div className="flex flex-col gap-0 pl-8">
            <p className="text-4xl font-inter font-bold leading-normal text-[#87CEEB]">
              The <span className="text-[#46A1DA]">Snow</span>
              <span className="text-[#000]">Panda</span> Process
            </p>
            <img src={headingLine} alt="_headingLine" className="ml-[-25px]" />
          </div>
          <img src={halfCircleBg} alt="_circle" />
        </div>

        {/* Process Content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center justify-center px-4 sm:px-6 md:px-8 2xl:px-20">
          <div className="hidden lg:flex flex-row xl:flex-col gap-24 md:gap-40 justify-center items-center">
            <img src={companyImg} alt="_company" />
            <img className="xl:w-[90%]" src={vectorImg1} alt="_vector" />
            <img src={blueBlob} alt="_blob" />
          </div>
          <div className="flex gap-5">
            {/* Purple Boxes */}
            <div className="flex flex-col gap-12 pt-16">
              {purpleBoxesContent.map((item) => (
                <div className="flex flex-col gap-2 rounded-lg bg-[#673AB7] p-4 w-[130px] sm:w-[200px] md:w-[244px]">
                  <div className="flex flex-col gap-0">
                    <p className="text-[#45DEFF] text-lg font-assistant leading-normal">
                      {item.heading}
                    </p>

                    {/* Timeline */}
                    <img
                      src={purpleProcessLine}
                      alt="_line"
                      className="absolute mt-[50px] sm:mt-[18px] sm:ml-[-5px] ml-[-2px] sm:ml-[2px] md:ml-[-2px] w-[200px] sm:w-[250px] md:w-[300px]"
                    />
                  </div>
                  <p className="text-[#FFF6F6] text-base font-assistant leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <img
              src={timeLine}
              alt="_timeline"
              className="h-[2062px] sm:h-auto  sm:mt-0 xl:mt-[-122px]"
            />
            {/* Blue Boxes */}
            <div className="flex flex-col gap-12 pt-[139px] sm:pt-[119px]">
              {blueBoxesContent.map((item) => (
                <div className="flex flex-col gap-2 rounded-lg bg-[#46A1DA] p-4 w-[130px] sm:w-[200px]  md:w-[244px]">
                  <div className="flex flex-col gap-0">
                    <p className="text-white text-lg font-assistant leading-normal">
                      {item.heading}
                    </p>
                    <img
                      src={blueProcessLine}
                      alt="_line"
                      className="w-[200px] sm:w-[250px] md:w-[300px] absolute mt-[49px] sm:mt-[18px] ml-[-99px] sm:ml-[-83px] md:ml-[-87px]"
                    />
                  </div>
                  <p className="text-[#FFF6F6] text-base font-assistant leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-row xl:flex-col gap-4  lg:gap-40 justify-center items-center">
            <img src={candidatemg} alt="_candidate" />
            <img src={purpleBlob} alt="_blob" />
            <img className="xl:w-[80%]" src={vectorImg2} alt="_vector" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SnowPandaProcess;
