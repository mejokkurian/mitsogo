"use client";

import React from "react";
import Image from "next/image";

type Accolade = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  text: string;
};

const accolades: Accolade[] = [
  {
    href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
    imgSrc: "/images/about/idc.webp",
    imgAlt: "IDC",
    text: "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
  },
  {
    href: "https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/",
    imgSrc: "/images/about/gartner.webp",
    imgAlt: "Gartner",
    text: "Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.",
  },
  {
    href: "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
    imgSrc: "/images/about/forrester.webp",
    imgAlt: "Forrester",
    text: "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
  },
];

const AccoladesSection: React.FC = () => {
  return (
    <div className="bg-[#1A1C2B] md:py-[30px]">
      <div className="mx-auto w-[88%] max-w-[1300px]">
        <div className="flex flex-col justify-center max-md:items-center md:flex-row md:justify-between">
          {accolades.map((item, index) => (
            <React.Fragment key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group max-w-[340px] flex-[0_0_100%] transform px-[0px] py-[40px] transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:max-w-[27%] md:flex-[0_0_27%] md:px-[10px] md:py-[0px] lg:px-[25px] xl:px-[45px]"
                href={item.href}
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="mb-[15px] flex">
                    <Image
                      alt={item.imgAlt}
                      loading="lazy"
                      width={156}
                      height={25}
                      className="h-[25px] w-full max-w-[156px] object-cover"
                      src={item.imgSrc}
                    />
                  </div>
                  <p className="text-center text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] md:text-left">
                    {item.text}
                  </p>
                </div>
              </a>
              {index < accolades.length - 1 && (
                <div className="w-[107px] basis-[1px] bg-[rgb(255,255,255,20%)] last:hidden md:w-[1px]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccoladesSection;
