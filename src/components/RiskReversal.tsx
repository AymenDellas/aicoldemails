import { Check } from "lucide-react";

const RiskReversal = () => {
  const riskReversals = [
    "14-Day Free Trial",

    "No Setup Costs",

    "Cancel Anytime",
    "See actual replies inside your demo",
  ];
  return (
    <section className="w-full px-auto space-y-8 bg-primary text-white py-16">
      <h1 className="text-center font-bold text-5xl">
        Ready to make cold email your best-performing channel?
      </h1>
      <div className="flex items-center justify-center space-x-4">
        {riskReversals.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center space-x-2 p-4 rounded-lg border border-gray-100/30 mb-4 bg-white/10 font-bold"
            >
              <span className="text-success">
                <Check />
              </span>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <span className="flex flex-col items-center text-lg rounded-lg p-6 bg-orange-700/20 w-fit mx-auto  border border-orange-500/20 font-bold">
        <p className="inline text-orange-200 ">
          500+ sales teams already use LeadSurge. If you're still manually
          writing intros...
        </p>{" "}
        you're falling behind.
      </span>
      <div className="flex items-center justify-center space-x-8">
        <button className="flex items-center space-x-1 rounded-lg bg-orange-400 px-6 py-3 text-white hover:bg-orange-400/80  transition-all duration-200 cursor-pointer text-xl">
          Book Your Free Demo
        </button>
        <button className="flex items-center space-x-1 rounded-lg bg-white px-6 py-3 text-black hover:bg-white/80  transition-all duration-200 cursor-pointer text-xl">
          See Real Campaign Results
        </button>
      </div>
    </section>
  );
};

export default RiskReversal;
