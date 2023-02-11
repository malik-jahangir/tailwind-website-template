import Image from "next/image";
import PriceCard from "./PriceCard";
const Section6 = () => {
  return (
    <>
      <section className="section6 border-t border-gray-200 bg-gray-100 py-20 sm:py-32">
        <div className="inner-section-6  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section6-top-text mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Flat pricing, no management fees.
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Whether you’re one person trying to get ahead or a big firm trying
              to take over the world, we’ve got a plan for you.
            </p>
            <div className="pricing-btn mt-8 flex justify-center ">
              <div className="flex">
                <a className="block cursor-pointer px-3 py-2 bg-cyan-500 border text-sm text-white font-semibold border-cyan-500 rounded-tl-lg rounded-bl-lg" href="#">
                  Monthly
                </a>
                <a className="block cursor-pointer ml-[-1px] py-2 px-3 border text-sm text-neutral-500 font-semibold border-neutral-300 rounded-tr-lg rounded-br-lg" href="#">
                  Annually
                </a>
              </div>
            </div>
          </div>
          <div className="price-card-container mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <PriceCard
              name={"Starter"}
              btnText={"Get started for free"}
              price={0}
              dark={false}
              text={
                "You’re new to investing but want to do it right. Get started for free."
              }
              features={[
                "Commission-free trading",
                "Multi-layered encryption",
                "One tip every day",
                "Invest up to $1,500 each month",
              ]}
            />
            <PriceCard
              name={"Investor"}
              btnText={"Subscribe"}
              price={7}
              dark={false}
              text={
                "You’re new to investing but want to do it right. Get started for free."
              }
              features={[
                "Commission-free trading",
                "Multi-layered encryption",
                "One tip every day",
                "Invest up to $1,500 each month",
                "Basic transaction anonymization",
              ]}
            />
            <PriceCard
              name={"VIP"}
              btnText={"Subscribe"}
              price={199}
              dark={true}
              text={
                "You’re new to investing but want to do it right. Get started for free."
              }
              features={[
                "Commission-free trading",
                "Multi-layered encryption",
                "Real-time tip notifications",
                "No investment limits",
                "Advanced transaction anonymization",
                "Automated tax-loss harvesting",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
