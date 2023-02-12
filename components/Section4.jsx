import Image from "next/image";
const Section4 = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 py-20 sm:py-28">

        <div className="inner-section mx-auto max-w-lg sm:text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-[40px]">
            Get your first tips today
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p>
          <div className="btn-container mt-8 flex justify-center">
            <a className="rounded-lg bg-white text-gray-900 hover:bg-gray-50" href="#">
              <Image
              className="z-10"
                width={120}
                height={40}
                src="/img/play-store-black.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="absolute section4-svg-container">
        <svg className="section4-svg" viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true"><defs><linearGradient id=":R1hm:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#fff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R1hm:)" strokeLinecap="round"></path></svg>
        </div>
      </section>
    </>
  );
};

export default Section4;
