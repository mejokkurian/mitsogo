"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const KioskModes = () => {
  const tabs = [
    {
      index: 0,
      title: "Single App Kiosk",
      contentTitle: "Powerful Single-App Kiosk solutions for enhanced control",
      content: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
      image: "/images/hero/single-app-kios-image.webp",
    },
    {
      index: 1,
      title: "Multi-App Kiosk",
      contentTitle: "Elevate efficiency with Multi-App Kiosk",
      content: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings, admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
      image: "/images/hero/multi-app-kiosk-image.webp",
    },
    {
      index: 2,
      title: "Web-based Kiosk",
      contentTitle: "Explore the new way to manage web apps and websites",
      content: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
      image: "/images/hero/web-based-kiosk-image.webp",
    },
    {
      index: 3,
      title: "Digital Signages",
      contentTitle: "Capture attention with Digital Signage Kiosks",
      content: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
      image: "/images/hero/digital-signage-kiosk-image.webp",
    },
    {
      index: 4,
      title: "ASAM Kiosk",
      contentTitle: "Unlock the power of Autonomous Single App Mode (ASAM)",
      content: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
      image: "/images/hero/asam-kiosk-image.webp",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="flex flex-col items-center justify-center py-[60px] text-center lg:py-[120px]">
      <div className="mx-auto w-[88%] max-w-[1300px]">
        <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-[1.25] text-[#020a19] antialiased sm:text-[36px]">
          Specific kiosk modes for unique use cases
        </h2>

        <div className="pt-[40px] sm:pt-[60px]">
          {/* Mobile View Placeholder */}
          <div className="flex w-full flex-col justify-between overflow-hidden rounded-[4px] border-b sm:hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i}></div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="relative hidden sm:block">
            <div className="flex justify-center bg-white">
              <div className="w-full overflow-hidden overflow-x-auto scroll-smooth rounded-t-[4px] border border-[#f7f7f7]">
                <div className="relative inline-block w-full overflow-x-scroll">
                  <div
                    className="absolute bottom-0 h-[80px] rounded-[4px] bg-[#020a19] transition-all duration-[600ms] ease-in-out"
                    style={{
                      width: "260px",
                      left: `${activeTab.index * 260}px`,
                    }}
                  ></div>
                  <ul className="flex cursor-pointer items-center whitespace-nowrap duration-300 ease-in">
                    {tabs.map((tab) => (
                      <li
                        key={tab.title}
                        onClick={() => {
                          console.log("hi");
                          setActiveTab(tab);
                        }}
                        className={`duration-400 min-h-[80px] min-w-[260px] flex-1 px-8 text-center transition-all before:absolute before:left-0 before:h-full before:w-[2px] before:bg-[#f7f7f7] before:content-[''] ${
                          activeTab.title === tab.title
                            ? "text-white"
                            : "text-[#020a19]/50"
                        }`}
                      >
                        <p className="z-3 relative flex h-20 items-center justify-center text-lg font-semibold">
                          {tab.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              key={activeTab.index}
              className="overflow-hidden bg-[#f7f7f7] p-[40px]"
            >
              <div className=" flex flex-col-reverse justify-between lg:flex-row">
                {/* Left Section */}
                <div className="mb-[20px] max-w-[760px] flex-1 text-left sm:mx-auto lg:mb-0 lg:pr-[40px]">
                  <h3 className="pb-[15px] text-[20px] font-bold leading-[26px] text-[#020A19] sm:text-[28px] sm:leading-[40px] lg:pb-[40px]">
                    {activeTab.contentTitle}
                  </h3>
                  <ul>
                    {activeTab.content.map((point, index) => (
                      <li
                        key={index}
                        className="relative mb-[10px] last:mb-0 lg:mb-[25px]"
                      >
                        <span className="absolute left-0 top-[8px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.393"
                            height="10.111"
                          >
                            <path
                              fill="none"
                              stroke="#60c458"
                              strokeWidth="2"
                              d="M.697 4.107 5.45 8.718l8.247-8"
                            ></path>
                          </svg>
                        </span>
                        <p className="pl-[25px] text-[16px] leading-[24px] text-[#333333] sm:pl-[30px] sm:text-[18px] sm:leading-[28px]">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Section (Image) */}
                <div className="group mb-[20px] w-full max-w-[308px] flex-1 max-sm:mt-[15px] max-sm:h-[210px] sm:max-w-[460px] lg:mb-0">
                  <div className="overflow-hidden rounded-[10px]">
                    <figure className="relative w-auto max-w-[100%] align-middle max-sm:h-[220px]">
                      <Image
                        alt={`${activeTab.title} Image`}
                        src={activeTab.image}
                        width={570}
                        height={387}
                        layout="responsive"
                        priority
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskModes;
