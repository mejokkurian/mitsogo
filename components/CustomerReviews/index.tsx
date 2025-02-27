"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

const reviews = [
  {
    name: "Justin Modrak",
    position: "Technology Coordinator",
    company: "East Troy Community School District",
    review: "Hexnode is of great value. Works great with Android and iOS!",
    image: "/images/testimonials/justin-modrak.webp",
  },
  {
    name: "Dalibor Kruljac",
    position: "",
    company: "KAMELEYA LTD",
    review:
      "Most complete MDM solution I found, and I tested many of them, including major names.",
    image: "/images/testimonials/dalibor-kruljac.webp",
  },
  {
    name: "Chris Robinson",
    position: "Executive Account Manager",
    company: "NCS",
    review: "It seemed to be in-line with everything we were looking at.",
    image: "/images/testimonials/chris-robinson.webp",
  },
];

export default function CustomerReviews() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <section className="bg-[#F7F7F7] pb-8 pt-16 md:pb-16 lg:pt-32">
      <div className="mx-auto w-[88%] max-w-[1300px]">
        <h2 className="text-center text-2xl font-bold leading-10 text-[#020a19] antialiased md:text-4xl">
          Why should you choose Hexnode?
        </h2>

        {/* Slider Container */}
        <div ref={sliderRef} className="keen-slider mt-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-lg bg-white p-6 shadow-md"
            >
              <div className="flex flex-col items-center md:flex-row">
                {/* Customer Image */}
                <div className="h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="mt-4 flex-1 divide-y-2 divide-[#F7F7F7] px-[20px] text-center md:ml-6 md:mt-0 md:pl-[60px] md:pr-[55px] md:text-left">
                  <h4 className=" pb-[25px] pt-[20px] text-center text-[16px] font-bold leading-[24px] text-[#020a19] antialiased sm:text-[20px] sm:leading-[32px] md:mb-[20px] md:mt-[40px] md:max-h-[125px] md:overflow-scroll md:py-0  md:text-left md:text-[24px]">
                    “{review.review}”
                  </h4>
                  <div>
                    <p className="mt-2 text-sm font-bold text-[#020a19]">
                      {review.name}
                    </p>
                    {review.position && (
                      <p className="text-xs text-[#020a19] opacity-70">
                        {review.position}
                      </p>
                    )}
                    <p className="text-xs text-[#020a19] opacity-70">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ⬅️
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ➡️
          </button>
        </div>
      </div>
    </section>
  );
}
