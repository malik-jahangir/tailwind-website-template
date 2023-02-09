import Image from "next/image";
const Main = () => {
  return (
    <>
      <main className="pt-32 pb-8 flex pl-10 justify-center overflow-x-hidden overflow-y-clip">
        <div className="left">
          <div className="main-text lg:max-w-xl max-w-none lg:pt-6">
            <h1 className="font-medium tracking-tight text-gray-900 text-[40px]">
              Invest at the perfect time.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 ">
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>
            <div className="button-container flex items-center gap-4 mt-8">
              <a className="" href="#">
                <Image
                  className="bg-gray-800 rounded-lg transition-colors hover:bg-gray-900"
                  width={120}
                  height={40}
                  src="/img/play-store.svg"
                  alt=""
                />
              </a>

              <a
                className="flex items-center px-3 py-2 gap-[10px] border border-gray-300 rounded-lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <Image
                  className="opacity-30"
                  width={24}
                  height={24}
                  src="/img/play-icon.svg"
                  alt=""
                />
                <p className="text-gray-700 text-sm">Watch the video</p>
              </a>
            </div>
          </div>
          <div className="featured-box max-w-xl mt-20">
            <p>As featured in</p>
            <div className="logo-container flex flex-wrap gap-y-8 gap-x-10 mt-8">
              <Image
                className="mx-auto w-fit"
                width={82}
                height={32}
                src="/img/Forbes.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={181}
                height={32}
                src="/img/TechCrunch.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={121}
                height={32}
                src="/img/Wired.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={68}
                height={32}
                src="/img/CNN.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={83}
                height={32}
                src="/img/BBC.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={101}
                height={32}
                src="/img/CBS.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={124}
                height={32}
                src="/img/FastCompany.svg"
                alt=""
              />
              <Image
                className="mx-auto w-fit"
                width={142}
                height={32}
                src="/img/HuffPost.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="phone-container">
            {/* <img className="screenshot" src="/img/img1.png" alt="" /> */}
            <img className="phone-mockup" src="/img/phone.png" alt="" />
            
            <div className="svg1">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                width="1026"
                height="1026"
              >
                <path
                  d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                  stroke="#D4D4D4"
                  strokeOpacity="0.7"
                  fill="none"
                ></path>
                <path
                  d="M513 1025C230.23 1025 1 795.77 1 513"
                  stroke='url("#:R65m:-gradient-1")'
                  strokeLinecap="round"
                  fill="none"
                ></path>
                <defs>
                  <linearGradient
                    id=":R65m:-gradient-1"
                    x1="1"
                    y1="513"
                    x2="1"
                    y2="1025"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#06b6d4"></stop>
                    <stop
                      offset="1"
                      stopColor="#06b6d4"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="svg2">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                width="1026"
                height="1026"
              >
                <path
                  d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                  stroke="#D4D4D4"
                  strokeOpacity="0.7"
                  fill="none"
                ></path>
                <path
                  d="M913 513c0 220.914-179.086 400-400 400"
                  stroke='url("#:R65m:-gradient-2")'
                  strokeLinecap="round"
                  fill="none"
                ></path>
                <defs>
                  <linearGradient
                    id=":R65m:-gradient-2"
                    x1="913"
                    y1="513"
                    x2="913"
                    y2="913"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#06b6d4"></stop>
                    <stop
                      offset="1"
                      stopColor="#06b6d4"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
