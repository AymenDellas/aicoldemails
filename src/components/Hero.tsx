import {
  ArrowRight,
  CircleCheckBig,
  Flame,
  Play,
  Rocket,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const objKillers = [
    { title: "2.8% avg reply rate", icon: Flame },
    { title: "15-min setup", icon: Rocket },
    { title: "500+ sales teams onboard", icon: TrendingUp },
  ];
  const riskReversal = [
    "No credit card require",
    "14-day free trial",
    "Cancel anytime",
  ];
  return (
    <section className="w-[70%] mx-auto flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl w-[60%] mx-auto mb-4 font-bold">
        Cold emails that don't sound like cold emails.
      </h1>
      <h3 className="text-xl w-[60%] mx-auto mb-8">
        AI-generated icebreakers your prospects actually reply to — not because
        they're tricked, but because they feel real.
      </h3>
      <div className="bg-orange-50 border border-orange-900/20 rounded-lg p-6 mb-8">
        <span className="text-orange-600 text-lg font-bold">
          "AI sounds robotic."
        </span>{" "}
        <p className="inline">
          Cool. Then explain how 23 demos got booked last week with no human
          writing a word.
        </p>
        <p className="mt-2 font-bold">Try it yourself. We'll prove it.</p>
      </div>
      <div className="flex items-center space-x-8 my-8">
        {objKillers.map((obj, i) => {
          return (
            <div key={i} className="flex items-center space-x-2">
              <obj.icon />
              <p className="text-lg">{obj.title}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/80  transition-all duration-200 cursor-pointer text-xl">
          <p>Book Free Demo</p>
          <ArrowRight />
        </button>
        <button className="flex items-center space-x-1 rounded-lg bg-zinc-800 px-6 py-3 text-white hover:bg-black/80  transition-all duration-200 cursor-pointer text-xl">
          <p>Watch 2-Min Breakdown</p>
          <Play />
        </button>
      </div>

      <div className="flex items-center space-x-2 my-6 text-lg">
        {riskReversal.map((item, i) => {
          return (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-success">
                <CircleCheckBig />
              </span>

              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="relative ">
        <span className="w-full h-full left-0 -z-10 rounded-lg blur-3xl opacity-30 bg-primary absolute" />
        <img src="/aicedash.png" alt="Dashboard" />
      </div>
    </section>
  );
};

export default Hero;
