import Image from "next/image";

const platforms = [
  {
    name: "Android",
    src: "images/logo/platforms/android.svg",
  },
  {
    name: "Windows",
    src: "images/logo/platforms/windows.svg",
  },
  {
    name: "iOS",
    src: "images/logo/platforms/ios.svg",
  },
  {
    name: "Android TV",
    src: "images/logo/platforms/android-tv.svg",
  },
  {
    name: "Apple TV",
    src: "images/logo/platforms/apple-tv.svg",
  },
  {
    name: "Amazon Fire",
    src: "/images/logo/platforms/amazon-fire.webp",
  },
];

const PlatformsSupported = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-[60px] pt-[60px] text-center lg:pb-[120px] lg:pt-[120px]">
      <div className="mx-auto w-[88%] max-w-[1300px]">
        <h2 className="mb-[40px] text-center text-[32px] font-[700] leading-[40px] text-[#020a19] antialiased sm:text-[40px] sm:leading-[1.3] md:mb-[60px]">
          Platforms Supported
        </h2>
        <div className="flex flex-wrap items-center">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="mb-[25px] block shrink-0 basis-1/2 rounded-[10px] px-[12px] transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none sm:mb-[15px] md:basis-1/3 lg:basis-[calc(100%_/_6)]"
            >
              <div className="relative mx-auto flex h-[60px] max-w-[150px] shrink-0 items-center justify-center rounded-[10px] sm:h-[72px] sm:max-w-[190px]">
                <Image
                  alt={platform.name}
                  src={platform.src}
                  width={190}
                  height={72}
                  className="block w-full object-contain"
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSupported;
