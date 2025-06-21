import { Quote, Star, TrendingUp, Users, Zap } from "lucide-react";

const Testimonials = () => {
  const testis = [
    {
      quote:
        "We went from shouting into the void to getting meetings with CMOs we thought were unreachable.",
      author: "Marcus Rodriguez",
      title: "Head of Growth",
      company: "CloudScale",
      companyType: "Series A SaaS",
    },
    {
      quote:
        "It's creepy how human these emails sound. We booked 23 demos in 2 weeks and didn't touch the keyboard once.",
      author: "Emily Watson",
      title: "CEO",
      company: "DataDriven",
      companyType: null,
    },
    {
      quote:
        "The AI *feels* like one of our SDRs. Prospects reply like it was written by a friend.",
      author: "Sarah Chen",
      title: "VP of Sales",
      company: "TechFlow",
      companyType: null,
    },
  ];

  const stats = [
    {
      metric: "500+",
      icon: Users,
      type: "Sales Teams",
    },
    {
      metric: "2.8%",
      icon: TrendingUp,
      type: "Avg Reply Rate",
    },
    {
      metric: "15min",
      icon: Zap,
      type: "Setup Time",
    },
    {
      metric: "34%",
      icon: Star,
      type: "Rate Increase",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Real Teams, Real Results
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by 500+ Sales Teams — and Growing
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-4 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-indigo-400/20 text-primary rounded-2xl p-5 shadow-sm border border-blue-100/50 group-hover:shadow-md transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.metric}
                </h2>
                <p className="text-gray-600 font-medium mt-1">{stat.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testis.map((testi, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/30 group-hover:to-indigo-50/20 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
                  "{testi.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {testi.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {testi.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testi.title}, {testi.company}
                    </p>
                    {testi.companyType && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        {testi.companyType}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
