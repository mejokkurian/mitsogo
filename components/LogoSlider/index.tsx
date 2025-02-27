"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

const logos = [
  { src: "images/logo/dark-logo/costco.svg", alt: "Costco" },
  { src: "images/logo/dark-logo/saic.svg", alt: "SAIC" },
  { src: "images/logo/dark-logo/hilton.svg", alt: "Hilton" },
  {
    src: "/images/logo/dark-logo/group1-automotive.webp",
    alt: "Group 1 Automotive",
  },
  { src: "images/logo/dark-logo/lowes.svg", alt: "Lowe's" },
  { src: "images/logo/dark-logo/polaris.svg", alt: "Polaris" },
  { src: "images/logo/dark-logo/gorillas.svg", alt: "Gorillas" },
  { src: "images/logo/dark-logo/wolt.svg", alt: "Wolt" },
  { src: "images/logo/dark-logo/marriott-intl.svg", alt: "Marriott" },
  { src: "images/logo/dark-logo/merck.svg", alt: "Merck" },
];

export default function LogoSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 5, spacing: 20 },
  });

  return (
    <section className="bg-[#F7F7F7] pb-[60px] pt-[10px] md:pt-[20px] lg:pb-[120px]">
      <div className="relative mx-auto w-[88%] md:max-w-[1300px]">
        {/* Gradient Fade Effect */}
        <div className="absolute left-0 z-[1] h-[40px] w-[70px] bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-transparent sm:h-[80px] sm:w-[100px]" />
        <div className="absolute right-0 z-[1] h-[40px] w-[70px] bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7] to-transparent sm:h-[80px] sm:w-[100px]" />

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="max-w-[130px] object-contain sm:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
