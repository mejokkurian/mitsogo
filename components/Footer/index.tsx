"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]">
          <div className="mx-auto w-[88%] md:max-w-[1300px]">
            <div className="flex w-full flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-between">
              <div className="flex flex-col sm:flex-row">
                <div className="order-1 m-[0_0_20px] sm:order-2 sm:m-0">
                  <ul className="m-0 flex flex-row flex-wrap p-0">
                    <li className="inline-block list-none after:inline-flex after:px-[5px] after:text-[14px] after:opacity-80 after:content-['-'] last:after:hidden">
                      <Link
                        href="https://www.hexnode.com/legal/terms-of-use/"
                        className="text-text-default text-[12px] font-medium leading-[24px] transition-all duration-300 ease-in-out hover:text-[#020a19]"
                      >
                        Terms of Use
                      </Link>
                    </li>
                    <li className="inline-block list-none after:inline-flex after:px-[5px] after:text-[14px] after:opacity-80 after:content-['-'] last:after:hidden">
                      <Link
                        href="https://www.hexnode.com/legal/privacy-policy/"
                        className="text-text-default text-[12px] font-medium leading-[24px] transition-all duration-300 ease-in-out hover:text-[#020a19]"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li className="inline-block list-none after:inline-flex after:px-[5px] after:text-[14px] after:opacity-80 after:content-['-'] last:after:hidden">
                      <Link
                        href="https://www.hexnode.com/legal/cookies-policy/"
                        className="text-text-default text-[12px] font-medium leading-[24px] transition-all duration-300 ease-in-out hover:text-[#020a19]"
                      >
                        Cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-3 flex">
                <p className="text-text-default m-0 text-[12px] font-medium leading-[24px]">
                  Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
