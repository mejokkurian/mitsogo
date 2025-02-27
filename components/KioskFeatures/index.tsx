"use client";
import { useState } from "react";
import Image from "next/image";

const kioskFeatures = [
  {
    title: "Effortless kiosk deployment & management",
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    image: "/images/features/effortless-kiosk-deployement-image.webp",
    alt: "Device already in kiosk mode with Hexnode App installed before unboxing",
  },
  {
    title: "Customized interface for brand visibility",
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: "/images/features/customized-interface-image.webp",
    alt: "A tablet with a customized interface to boost the brand presence.",
  },
  {
    title: "What more can you do with Hexnode kiosk?",
    description:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    image: "/images/features/power-up-protection-image.webp",
    alt: "Devices in kiosk mode being managed remotely.",
  },
  {
    title: "Secure and update your app ecosystem",
    description:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    image: "/images/features/secure-app-ecosystem.webp",
    alt: "Managing apps on kiosk devices.",
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    description:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    image: "/images/features/easy-to-use-interface-image.webp",
    alt: "A kiosk device with a simple interface that is easy-to-use.",
  },
];

const KioskFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(kioskFeatures[0]);

  return (
    <section className="pb-16 lg:pb-32">
      <div className="mx-auto w-[88%] max-w-[1300px]">
        <h2 className="mx-auto max-w-[340px] pb-5 text-center text-2xl font-bold leading-[40px] text-[#020a19] antialiased sm:max-w-[800px] md:pb-6 md:text-4xl md:leading-[1.3]">
          What additional possibilities does the Kiosk mode offer?
        </h2>

        <div className="flex flex-col items-center justify-between transition-all duration-300 ease-out md:mt-10 md:flex-row">
          {/* Image Section */}
          <div className="relative mr-5 max-h-[545px] transition-all duration-300 ease-out md:w-1/2 md:max-w-[545px]">
            <Image
              src={activeFeature.image}
              alt={activeFeature.alt}
              width={600}
              height={565}
              layout="responsive"
              className="rounded-lg"
            />
          </div>

          {/* Features List */}
          <div className="relative max-w-[725px] md:w-1/2 lg:w-[60%]">
            {kioskFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative cursor-pointer border-b border-[#F7F7F7] py-5 lg:py-6"
                onClick={() => setActiveFeature(feature)}
              >
                <h3
                  className={`text-left text-2xl font-bold text-[#050607] transition-all duration-300 lg:text-[26px] lg:leading-[40px] ${
                    activeFeature.title === feature.title
                      ? "text-[#DD0735]"
                      : ""
                  }`}
                >
                  {feature.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFeature.title === feature.title
                      ? "h-auto pt-4 opacity-100"
                      : "h-0 opacity-0"
                  }`}
                >
                  <p className="text-lg font-normal leading-7 text-[#333333]">
                    {feature.description}
                  </p>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="mt-3 inline-flex items-center justify-start font-semibold uppercase text-[#DD0735]"
                    href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                  >
                    Try for free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.575"
                      height="11.737"
                      className="ml-2 transition-all duration-300 ease-out"
                    >
                      <path
                        fill="none"
                        stroke="#dd0735"
                        strokeLinecap="round"
                        d="m.707.707 5.161 5.161-5.161 5.161"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KioskFeatures;
