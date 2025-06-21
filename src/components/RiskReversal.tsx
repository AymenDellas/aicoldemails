import { Check } from "lucide-react";

const RiskReversal = () => {
  const riskReversals = [
    "14-Day Free Trial",
    "No Setup Costs",
    "Cancel Anytime",
    "See actual replies inside your demo",
  ];

  return (
    <section className="w-full bg-primary text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Main Heading */}
        <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          Ready to make cold email your best-performing channel?
        </h1>

        {/* Risk Reversals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {riskReversals.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-white/20 bg-white/10 font-semibold text-sm sm:text-base"
              >
                <span className="text-green-400 flex-shrink-0">
                  <Check size={16} className="sm:w-5 sm:h-5" />
                </span>
                <p className="leading-tight">{item}</p>
              </div>
            );
          })}
        </div>

        {/* Social Proof Banner */}
        <div className="flex justify-center">
          <div className="text-center rounded-lg p-4 sm:p-6 bg-orange-600/20 border border-orange-400/30 font-semibold max-w-2xl mx-4">
            <p className="text-orange-200 text-sm sm:text-base lg:text-lg">
              <span className="block sm:inline">
                500+ sales teams already use LeadSurge.
              </span>
              <span className="block sm:inline sm:ml-1">
                If you're still manually writing intros...
              </span>
            </p>
            <p className="text-white mt-1 text-sm sm:text-base lg:text-lg">
              you're falling behind.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
          <button className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 sm:px-8 sm:py-4 text-white hover:bg-orange-600 transition-all duration-200 cursor-pointer text-lg sm:text-xl font-semibold shadow-lg">
            Book Your Free Demo
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-4 text-gray-900 hover:bg-gray-100 transition-all duration-200 cursor-pointer text-lg sm:text-xl font-semibold shadow-lg">
            See Real Campaign Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
