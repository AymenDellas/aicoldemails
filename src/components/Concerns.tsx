import {
  AlertOctagon,
  CheckCheck,
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
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          "But What if..." We get it.
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Every sales leader asks the same 4 questions — so we answered them
          upfront.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {comparisons.map((comp, i) => {
          return (
            <div
              key={i}
              className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 sm:p-6 border border-gray-200 rounded-lg"
            >
              {/* Concern Side */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:flex-1 lg:min-w-0">
                <span className="flex-shrink-0 p-2 bg-red-100 text-red-500 rounded-full">
                  <comp.concern.icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm sm:text-base mb-1">
                    {comp.concern.title}
                  </h3>
                  <p className="text-red-500 italic font-semibold text-sm sm:text-base">
                    "{comp.concern.description}"
                  </p>
                </div>
              </div>

              {/* Reality Side */}
              <div className="lg:w-2/3 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 flex-shrink-0">
                    <CheckCircle size={20} />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold">
                    {comp.reality.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {comp.reality.description}
                </p>

                <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                  <CheckCheck
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p className="text-sm sm:text-base text-green-800 font-medium">
                    {comp.reality.proof}
                  </p>
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
