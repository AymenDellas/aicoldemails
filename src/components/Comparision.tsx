import { AlertTriangle, CheckCircle } from "lucide-react";

export default function Comparison() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Stop Losing Prospects to{" "}
          <span className="text-red-500">Generic Outreach</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your competitors are using the same templated emails. Here's why your
          current approach isn't working...
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Current Reality Card */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-red-800">
              Your Current Reality
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-red-800">
                  0.8% reply rates
                </span>
                <span className="text-red-700">
                  {" "}
                  from templated cold emails
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-red-800">Hours wasted</span>
                <span className="text-red-700">
                  {" "}
                  writing personalized intros manually
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-red-800">
                  Prospects ignore
                </span>
                <span className="text-red-700">
                  {" "}
                  obvious copy-paste messages
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-red-800">
                  Sales team frustrated
                </span>
                <span className="text-red-700"> with low booking rates</span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-red-800">
                  Revenue target
                </span>
                <span className="text-red-700">
                  {" "}
                  slipping away each quarter
                </span>
              </div>
            </div>
          </div>

          <div className="bg-red-100 rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-red-800 italic">
              "Another month, same results. Our outreach feels like shouting
              into the void."
            </p>
            <p className="text-red-600 text-sm mt-2">
              — Typical SDR Experience
            </p>
          </div>
        </div>

        {/* With LeadSurge AI Card */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-green-800">
              With LeadSurge AI
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-green-800">
                  2.8% reply rates
                </span>
                <span className="text-green-700">
                  {" "}
                  with AI-personalized icebreakers
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-green-800">
                  15-minute setup
                </span>
                <span className="text-green-700">
                  {" "}
                  then emails write themselves
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-green-800">
                  Human-like messages
                </span>
                <span className="text-green-700">
                  {" "}
                  that prospects actually read
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-green-800">
                  Sales team confident
                </span>
                <span className="text-green-700"> with proven results</span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold text-green-800">
                  Revenue targets
                </span>
                <span className="text-green-700"> hit consistently</span>
              </div>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-4 border-l-4 border-success">
            <p className="text-green-800 italic">
              "Finally, emails that get responses. Our booking rate doubled in
              two weeks."
            </p>
            <p className="text-green-600 text-sm mt-2">— LeadSurge Customer</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <button className="bg-primary hover:bg-primary/90 cursor-pointer text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center">
          See How It Works - Book Demo
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="mt-4 text-sm text-gray-600">
          No setup fees • No long-term contracts • See results in 14 days
        </div>
      </div>
    </section>
  );
}
