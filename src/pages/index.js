import React from "react";
import Image from "next/image";
import Photo from "../../public/image-equilibrium.jpg";
import Avatar from "../../public/image-avatar.png";

const Nft = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-col bg-[#15273f] p-4 rounded-lg px-4 drop-shadow-2xl">
        {/* container photo */}
        <div className="relative w-64 h-64 group cursor-pointer">
          <Image
            className="w-64 h-64 rounded-lg transition-all duration-300 
                   group-hover:opacity-50"
            src={Photo}
            alt="Photo NFT"
          />

          <div
            className="absolute bg-[#00fff77d] rounded-lg inset-0 flex items-center justify-center opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <span className="text-white font-semibold text-lg pt-3 pb-3 cursor-pointer hover:text-[#00fff7] duration-300">
          Equilibrium#3420
        </span>
        <span className="w-64 text-[#8bacda] font-light pb-4">
          Our Equilibrium collection promotes balance and calm.
        </span>
        <div className="flex w-full justify-between font-semibold text-sm ">
          <div className=" flex text-[#00fff7]">
            <svg
              className="mr-2"
              width="11"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            0.041 ETH
          </div>

          <div className=" flex text-[#8BACD9] pb-4">
            <svg
              className="mr-2"
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9 "
              />
            </svg>
            3 days left
          </div>
        </div>
        <div className="top-1/2 h-[0.5px] w-full -translate-y-1/2 transform bg-[#8BACD9]"></div>
        <div className="flex w-64 pt-4  text-sm">
          <Image
            className="w-7 h-7 mr-2 border border-white rounded-full"
            src={Avatar}
            alt="Avatar"
          />
          <span className="text-[#8bacda] pr-1"> Creation of</span>
          <span className="font-medium text-white cursor-pointer hover:text-[#00fff7] duration-300">
            {" "}
            Jules Wyvern
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nft;
