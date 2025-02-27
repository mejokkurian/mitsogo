import Image from "next/image";
import Link from "next/link";

const SignupSection = () => {
  return (
    <section className="flex items-center justify-center bg-[#020a19] py-[50px] md:h-[330px] md:py-0">
      <div className="mx-auto w-[88%] md:max-w-[1300px]">
        <div className="mx-auto w-full max-w-[1000px] text-center">
          <h3 className="mb-[20px] text-center text-[30px] font-bold leading-[38px] text-white md:text-[42px] md:leading-[1.3]">
            Sign up and try Hexnode free for 14 days!
          </h3>
        </div>
        <div className="mx-auto max-w-[580px]">
          <form className="m-0 p-0">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="w-full max-w-[325px] md:mr-[8px]">
                <input
                  placeholder="Your Work Email"
                  type="email"
                  name="email"
                  id="email"
                  className="h-[53px] w-full rounded-[3px] px-[10px] text-[18px] leading-[24px] shadow-none transition-all duration-[0.3s] ease-in-out placeholder:text-[#c6c6c6]"
                />
              </div>
              <div className="mt-[15px] w-full max-w-[325px] md:mt-[0px] md:max-w-[195px]">
                <button
                  type="submit"
                  className="flex h-[53px] w-full cursor-pointer items-center justify-center rounded-[3px] border-0 bg-[#dd0735] text-[17px] font-normal uppercase leading-[24px] text-white transition-all duration-[0.25s] ease-in-out hover:bg-[#bb022a] focus:bg-[#bb022a]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </form>
          <div className="relative pt-[10px]">
            <p className="m-0 pt-[10px] text-center text-[17px] font-medium leading-[24px] text-[#556575]">
              No credit cards required.
              <Link
                href="https://www.hexnode.com/mobile-device-management/request-demo/"
                className="relative inline-block whitespace-nowrap pl-[5px] text-[17px] font-medium leading-[24px] text-[#dd0735] transition-all duration-[0.3s] ease-in-out"
              >
                Request a demo
                <Image
                  src="https://static.hexnode.com/img/home_page/images/icons/arrow-right.svg"
                  alt="Arrow Right"
                  width={6}
                  height={10}
                  className="ml-1 inline"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
