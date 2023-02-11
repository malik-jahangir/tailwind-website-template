import Image from "next/image";
const PriceCard = ({ name, price, features, text, dark, btnText }) => {
  return (
    <>
    {dark ? <div className="price-card flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-neutral-900">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="mt-5 text-3xl tracking-tight text-white">${price}</p>
        <p className="mt-3 text-sm text-neutral-300">{text}</p>
        <a
          className="rounded-lg py-2 px-3 text-sm font-semibold text-center transition-colors bg-cyan-500 text-white hover:bg-cyan-400 active:bg-cyan-600 active:text-white/80 mt-6"
          href="#"
        >{btnText}</a>
        <div className="mt-6">
          <ul className="-my-2 divide-y text-sm divide-neutral-800 text-neutral-300">
            {features &&
              features.map((i, j) => (
                <li key={j} className="flex items-center gap-3 py-2">
                  <Image width={24} height={24} src="/img/tick-white.svg" alt="" />
                  <p>{i}</p>
                </li>
              ))}
          </ul>
        </div>
      </div> : <div className="price-card flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
        <h3 className="text-sm font-semibold text-neutral-900">{name}</h3>
        <p className="mt-5 text-3xl tracking-tight text-neutral-900">${price}</p>
        <p className="mt-3 text-sm text-neutral-700">{text}</p>
        <a
          className="rounded-lg py-2 px-3 text-sm font-semibold text-center transition-colors bg-neutral-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
          href="#"
        >
          Get started for free
        </a>
        <div className="mt-6">
          <ul className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
            {features &&
              features.map((i, j) => (
                <li key={j} className="flex items-center gap-3 py-2">
                  <Image width={24} height={24} src="/img/tick.svg" alt="" />
                  <p>{i}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    
}
</>
  );
};

export default PriceCard;
