import Image from "next/image";
const Section3 = () => {
  return (
    <>
      <section className="section3 sm:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-main-text mx-auto max-w-2xl sm:text-center">
          <h2 className="text-center text-[32px] font-medium tracking-tight text-gray-900">
            Now is the time to build your portfolio.
          </h2>
          <p className="text-center mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon1.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Invest any amount
            </h4>
            <p className="mt-2 text-gray-700">
              Whether it’s $1 or $1,000,000, we can put your money to work for
              you.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon2.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Build a balanced portfolio
            </h4>
            <p className="mt-2 text-gray-700">
              Invest in different industries to find the most opportunities to
              win huge.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon3.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Trade in real-time
            </h4>
            <p className="mt-2 text-gray-700">
              Get insider tips on big stock moves and act on them within
              seconds.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon4.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Profit from your network
            </h4>
            <p className="mt-2 text-gray-700">
              Invite new insiders to get tips faster and beat even other Pocket
              users.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon5.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Encrypted and anonymized
            </h4>
            <p className="mt-2 text-gray-700">
              Cutting-edge security technology that even the NSA doesn’t know
              about keeps you hidden.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <Image width={32} height={32} src="/img/icon6.svg" alt="" />
            <h4 className="mt-6 font-semibold text-gray-900">
              Portfolio tracking
            </h4>
            <p className="mt-2 text-gray-700">
              Watch your investments grow exponentially, leaving other investors
              in the dust.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Section3;
