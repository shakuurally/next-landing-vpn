import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useMemo } from "react";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">

        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
              <Testimoni />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                    loading="lazy"

                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  6 Month Plan
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Support
                  </li>
                  <li className="relative check custom-list my-2">
                   Daily buckup
                  </li>
                  <li className="relative check custom-list my-2">
                    works online an offline
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                  Get New Features                   </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    299/ 6 month
                  </p>
                  <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
                  <ButtonOutline>Select</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6  xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                  loading="lazy"

                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Yearly plan
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                    Support
                  </li>
                  <li className="relative check custom-list my-2">
                   Daily buckup
                  </li>
                  <li className="relative check custom-list my-2">
                    works online an offline
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                  Get New Features                   </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $299 <span className="text-black-500">/ mo</span>
                </p>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
                <ButtonOutline>Select</ButtonOutline>
                </a>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                  loading="lazy"

                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Plan 
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Life time access
                </li>
                <li className="relative check custom-list my-2">
                 Customer support
                </li>
                <li className="relative check custom-list my-2">
                  daily buckup
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware 
                </li>
                <li className="relative check custom-list my-2">
                  Get New Features 
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $1799 <span className="text-black-500">/One time</span>
                </p>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
                <ButtonOutline>Select</ButtonOutline>
                </a>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>

        </div> 
      </div>
    </div>
  );
};

export default Pricing;
