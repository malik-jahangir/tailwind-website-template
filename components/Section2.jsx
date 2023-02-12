import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Section2 = () => {
  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };
  return (
    <>
      <section className="section2 py-20 sm:py-32 bg-neutral-900">
        <div className="inner-section max-w-7xl m-auto">
          <div className="features-top-text mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl lg:px-8 px-6">
            <h2 className="text-[32px] font-medium tracking-tight text-white">
              Every feature you need to win. Try it for yourself.
            </h2>
            <p className="mt-2 text-lg text-neutral-400">
              Pocket was built for investors like you who play by their own
              rules and aren’t going to let SEC regulations get in the way of
              their dreams. If other investing tools are afraid to build it,
              Pocket has it.
            </p>
          </div>
          <div className="features-main max-w-7xl mt-20 hidden md:flex justify-center md:justify-between gap-8 lg:gap-0 lg:px-8 px-6">
            <div className="features-left">
              <div className="features-phone-container relative w-[360px] lg:w-[560px] flex justify-center">
                <Image
                  className="z-10"
                  width={360}
                  height={727}
                  src="/img/phone.png"
                  alt=""
                />
                <div className="features-svg-container">
                  <div className="features-svg ">
                    <svg
                      viewBox="0 0 558 558"
                      width="558"
                      height="558"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id=":R3b9m:"
                          x1="79"
                          y1="16"
                          x2="105"
                          y2="237"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#13B5C8"></stop>
                          <stop
                            offset="1"
                            stopColor="#13B5C8"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        opacity=".2"
                        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                        stroke="#13B5C8"
                        fill="none"
                      ></path>
                      <path
                        d="M1 279C1 125.465 125.465 1 279 1"
                        stroke='url("#:R3b9m:")'
                        strokeLinecap="round"
                        fill="none"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-right max-w-[556px] flex flex-col gap-6 justify-center">
              <div className="feature active">
                <Image
                  width={32}
                  height={32}
                  src="/img/phone-user.svg"
                  alt=""
                />
                <h3 className="mt-6 text-sm sm:text-lg font-semibold text-white">
                  Invite friends for better returns
                </h3>
                <p className="mt-2 leading-6 text-sm text-gray-400">
                  For every friend you invite to Pocket, you get insider
                  notifications 5 seconds sooner. And it’s 10 seconds if you
                  invite an insider.
                </p>
              </div>
              <div className="feature">
                <Image
                  width={32}
                  height={32}
                  src="/img/phone-notification.svg"
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Notification on stock dips
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Get a push notification every time we find out something
                  that’s going to lower the share price on your holdings so you
                  can sell before the information hits the public markets.
                </p>
              </div>
              <div className="feature">
                <Image
                  width={32}
                  height={32}
                  src="/img/phone-click.svg"
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Invest what you want
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  We hide your stock purchases behind thousands of anonymous
                  trading accounts, so suspicious activity can never be traced
                  back to you.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-main-mobile-container relative mx-6">
            <Swiper
              pagination={pagination}
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mb-10">

                
                <div className="feature-main-mobile mt-16 md:hidden relative overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
                  <div className="features-phone-container relative w-full m-auto flex justify-center">
                    <Image
                      className="z-10"
                      width={360}
                      height={727}
                      src="/img/phone.png"
                      alt=""
                    />
                    <div className="features-svg-container-mobile">
                      <div className="features-svg-mobile">
                        <svg
                          viewBox="0 0 558 558"
                          width="558"
                          height="558"
                          fill="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient
                              id=":R3b9m:"
                              x1="79"
                              y1="16"
                              x2="105"
                              y2="237"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#13B5C8"></stop>
                              <stop
                                offset="1"
                                stopColor="#13B5C8"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            opacity=".2"
                            d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                            stroke="#13B5C8"
                            fill="none"
                          ></path>
                          <path
                            d="M1 279C1 125.465 125.465 1 279 1"
                            stroke='url("#:R3b9m:")'
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="feature-mobile active absolute inset-x-0 bottom-0 z-10 backdrop-blur p-10">
                    <Image
                      width={32}
                      height={32}
                      src="/img/phone-user.svg"
                      alt=""
                    />
                    <h3 className="mt-6 text-sm sm:text-lg font-semibold text-white">
                      Invite friends for better returns
                    </h3>
                    <p className="mt-2 leading-6 text-sm text-gray-400">
                      For every friend you invite to Pocket, you get insider
                      notifications 5 seconds sooner. And it’s 10 seconds if you
                      invite an insider.
                    </p>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10">
                <div className="feature-main-mobile mt-16 md:hidden relative overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
                  <div className="features-phone-container relative w-full m-auto flex justify-center">
                    <Image
                      className="z-10"
                      width={360}
                      height={727}
                      src="/img/phone.png"
                      alt=""
                    />
                    <div className="features-svg-container-mobile">
                      <div className="features-svg-mobile">
                        <svg
                          viewBox="0 0 558 558"
                          width="558"
                          height="558"
                          fill="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient
                              id=":R3b9m:"
                              x1="79"
                              y1="16"
                              x2="105"
                              y2="237"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#13B5C8"></stop>
                              <stop
                                offset="1"
                                stopColor="#13B5C8"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            opacity=".2"
                            d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                            stroke="#13B5C8"
                            fill="none"
                          ></path>
                          <path
                            d="M1 279C1 125.465 125.465 1 279 1"
                            stroke='url("#:R3b9m:")'
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="feature-mobile active absolute inset-x-0 bottom-0 z-10 backdrop-blur p-10">
                    <Image
                      width={32}
                      height={32}
                      src="/img/phone-notification.svg"
                      alt=""
                    />
                    <h3 className="mt-6 text-sm sm:text-lg font-semibold text-white">
                    Notification on stock dips
                    </h3>
                    <p className="mt-2 leading-6 text-sm text-gray-400">
                    Get a push notification every time we find out something
                  that’s going to lower the share price on your holdings so you
                  can sell before the information hits the public markets.
                    </p>
                  </div>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-10">
                <div className="feature-main-mobile mt-16 md:hidden relative overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
                  <div className="features-phone-container relative w-full m-auto flex justify-center">
                    <Image
                      className="z-10"
                      width={360}
                      height={727}
                      src="/img/phone.png"
                      alt=""
                    />
                    <div className="features-svg-container-mobile">
                      <div className="features-svg-mobile">
                        <svg
                          viewBox="0 0 558 558"
                          width="558"
                          height="558"
                          fill="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient
                              id=":R3b9m:"
                              x1="79"
                              y1="16"
                              x2="105"
                              y2="237"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#13B5C8"></stop>
                              <stop
                                offset="1"
                                stopColor="#13B5C8"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            opacity=".2"
                            d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                            stroke="#13B5C8"
                            fill="none"
                          ></path>
                          <path
                            d="M1 279C1 125.465 125.465 1 279 1"
                            stroke='url("#:R3b9m:")'
                            strokeLinecap="round"
                            fill="none"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="feature-mobile active absolute inset-x-0 bottom-0 z-10 backdrop-blur p-10">
                    <Image
                      width={32}
                      height={32}
                      src="/img/phone-click.svg"
                      alt=""
                    />
                    <h3 className="mt-6 text-sm sm:text-lg font-semibold text-white">
                    Invest what you want
                    </h3>
                    <p className="mt-2 leading-6 text-sm text-gray-400">
                    We hide your stock purchases behind thousands of anonymous
                  trading accounts, so suspicious activity can never be traced
                  back to you.
                    </p>
                  </div>
                </div>
                </div>
              </SwiperSlide>

            <div className="swiper-pagination absolute -bottom-2"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
