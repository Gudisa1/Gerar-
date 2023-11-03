import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/path5.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Unwind in Style
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Discover Your Way to Comfort
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With our furniture app, navigating the world of interior design
            becomes effortless. Access our extensive catalog even when offline,
            ensuring seamless browsing wherever you are. Share the experience
            with friends and family, guiding them through a journey of
            exploration amidst elegant settings and reaching the pinnacle of
            home décor.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/interior1-min.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          {/* <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          /> */}
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Design Destination</p>
                <p className="bold-16 text-green-50">2 hr</p>
              </div>
              <p className="bold-20 mt-2">Artisanal Haven</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Begin Exploration</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Gerar Furniture
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
