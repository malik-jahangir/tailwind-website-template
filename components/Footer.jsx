import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
            <div className="footer-left">
              <div className="logo">
                <img width={106} height={23.33} src="/img/logo.svg" alt="" />
              </div>
              <nav className="mt-11 flex gap-8">
                <a
                  className="-my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="-my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900"
                  href="#"
                >
                  Reviews
                </a>
                <a
                  className="-my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="-my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900"
                  href="#"
                >
                  FAQs
                </a>
              </nav>
            </div>
            <div className="footer-right-mx-4 flex items-center self-stretch p-4 hover:bg-neutral-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <Image width={92} height={92} src="/img/qr-code.svg" alt="" />
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-neutral-900">
                  Download the app
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-700">
                  Scan the QR code to download the app from the App Store.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-neutral-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <form className="flex w-full justify-center md:w-auto" action="">
          <div className="w-60 min-w-0 shrink">
            <input className="block w-full px-3 py-2 appearance-none rounded-lg border border-gray-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" type="email" placeholder="Email address" />
          </div>
          <button className="px-3 py-2 bg-cyan-500 text-white hover:bg-cyan-600 text-sm font-semibold ml-4 rounded-lg">Join our newsletter</button>
        </form>
        <p className="mt-6 text-sm text-neutral-500 md:mt-0">© Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
