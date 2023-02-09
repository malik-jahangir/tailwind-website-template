import Image from "next/image";
const Header = () => {
  return (<>
  <header className="flex items-center justify-between py-8 px-8 max-w-7xl mx-auto">
    <div className="left flex gap-16 items-center">
        <div className="logo">
            <Image width={106} height={40} src="/img/logo.svg" alt="" />
        </div>
        <nav>
            <ul className="hidden lg:flex lg:gap-10 text-sm text-gray-700">
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                <a href="#">Reviews</a>
                </li>
                <li>
                <a href="#">Pricing</a>
                </li>
                <li>
                <a href="#">FAQs</a>
                </li>
            </ul>
        </nav>
    </div>
    <div className="right flex items-center gap-6 text-sm font-semibold">
        <a className="text-sm py-2 px-3 border border-lg-gray-700 rounded-lg" href="#">Login</a>
        <a className="text-sm py-2 px-3 bg-zinc-800 text-white border rounded-lg" href="#">Download</a>
    </div>
    </header>
  </>);
};

export default Header;
