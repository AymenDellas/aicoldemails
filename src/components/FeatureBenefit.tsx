import { LucideLampDesk, Shield, Target, Zap } from "lucide-react";

const FeatureBenefit = () => {
  const features = [
    {
      icon: LucideLampDesk,
      title: "Icebreakers That Actually Sound Like You Wrote Them",
      description:
        "We personalize intros using real context: press features, LinkedIn activity, market moves.",
      result: "Your emails feel warm even when they're cold",
    },
    {
      icon: Zap,
      title: "15-Minute Setup. Literally.",
      description: "Connect inbox. Upload prospects. Done.",
      result: "No tech headaches. Launch campaigns same day",
    },
    {
      icon: Shield,
      title: "Inbox-Safe AI — Built to Convert, Not to Spam",
      description:
        "Email warmup, deliverability guardrails, and messaging that passes the sniff test.",
      result: "No spam folder graveyards, no reputation damage",
    },
    {
      icon: Target,
      title: "Trained on Millions of High-Performing Cold Emails",
      description: "Our engine evolves with data from 500+ active teams.",
      result: "Better copy over time, tailored to your market and tone",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-4">
          <span>🔍</span>
          <span>Features → Benefits</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Cold Email AI That Actually Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Four core capabilities that turn prospects into pipeline. Built for
          teams who need results, not features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="flex  flex-col border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="ml-18 mt-auto bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  Result
                </div>
                <div className="text-gray-900 font-medium">
                  {feature.result}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureBenefit;
