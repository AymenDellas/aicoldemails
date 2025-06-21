import {
  AlertOctagon,
  CheckCheckIcon,
  CheckCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const Concerns = () => {
  const comparisons = [
    {
      concern: {
        icon: AlertOctagon,
        title: "Common Concern:",
        description: "AI emails sound spammy and robotic",
      },
      reality: {
        title: "Here's the Reality:",
        description:
          "LeadSurge uses advanced language models trained on millions of successful human-written sales emails. Our AI learns your company's voice and creates messages that sound authentically human.",
        proof:
          "98% of prospects can't tell the difference between our AI emails and human-written ones.",
      },
    },
    {
      concern: {
        icon: Clock,
        title: "Common Concern:",
        description: "This will take forever to set up",
      },
      reality: {
        title: "Here's the Reality:",
        description:
          "Most teams are up and running in under 15 minutes. Simply connect your email, upload your prospect list, and our AI handles the rest. No technical skills required.",
        proof:
          "Average setup time: 14.5 minutes from signup to first email sent.",
      },
    },
    {
      concern: {
        icon: Shield,
        title: "Common Concern:",
        description: "Will this work in our specific niche?",
      },
      reality: {
        title: "Here's the Reality:",
        description:
          "Our AI has been trained on successful emails across 50+ industries. From FinTech to Healthcare to Manufacturing - we adapt to your market's language and pain points.",
        proof:
          "Currently driving results for teams in 47 different industries.",
      },
    },
    {
      concern: {
        icon: Zap,
        title: "Common Concern:",
        description: "What if it hurts our sender reputation?",
      },
      reality: {
        title: "Here's the Reality:",
        description:
          "LeadSurge includes built-in deliverability optimization, email warm-up sequences, and compliance checking. We actually improve your sender reputation over time.",
        proof: "94% of customers see improved deliverability within 30 days.",
      },
    },
  ];

  return (
    <section className="w-[60%] mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          "But What if..." We get it.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every sales leader asks the same 4 questions — so we answered them
          upfront.
        </p>
      </div>
      <div>
        {comparisons.map((comp, i) => {
          return (
            <div
              key={i}
              className="flex items-center  space-x-30 p-4 border border-gray-200 rounded-lg mb-6"
            >
              <div className="flex items-center space-x-4 flex-1">
                <span className="p-2 bg-red-200 text-red-500 rounded-full">
                  <comp.concern.icon />
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold">{comp.concern.title}</h3>
                  <p className="text-red-500 italic font-semibold ml-2">
                    "{comp.concern.description}"
                  </p>
                </div>
              </div>
              <div className="space-y-2 w-[70%]">
                <span className="flex items-center space-x-2">
                  <span className="text-success">
                    <CheckCircle />
                  </span>
                  <h3 className="text-lg font-bold">{comp.reality.title}</h3>
                </span>
                <p>{comp.reality.description}</p>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-green-50 border border-green-600/50 text-green-800">
                  <CheckCheckIcon />
                  <p>{comp.reality.proof}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Concerns;
