export default function PricingPage() {
  const plans = [
    {
      title: "Free",
      price: "0",
      description: "Basic OWASP header and page scanning.",
      features: ["URL scanning", "Header checks", "Content warnings"],
      gradient: "from-green-50 to-green-100/50",
      border: "border-green-300",
      titleColor: "text-gray-900",
      textColor: "text-gray-700",
    },
    {
      title: "Pro",
      price: "Soon",
      description: "Extend with deeper checks and auth integration.",
      features: ["Advanced scans", "Custom rules", "Secure auth"],
      gradient: "from-blue-50 to-blue-100/50",
      border: "border-blue-300",
      titleColor: "text-gray-900",
      textColor: "text-gray-700",
    },
    {
      title: "Enterprise",
      price: "Soon",
      description: "Deploy on your own network and customize rules.",
      features: ["Private deployment", "Team support", "Extended reports"],
      gradient: "from-purple-50 to-purple-100/50",
      border: "border-purple-300",
      titleColor: "text-gray-900",
      textColor: "text-gray-700",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-yellow-50 min-h-[calc(100vh-180px)]">
      <div className="rounded-[2rem] bg-gradient-to-br from-white to-yellow-50 p-8 shadow-lg ring-1 ring-yellow-100 border border-yellow-100">
        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-yellow-700 border border-yellow-300">
             Pricing
          </p>
          <h1 className="text-4xl font-semibold text-gray-900">Plans for vulnerability scanning and dashboard growth</h1>
          <p className="max-w-3xl text-gray-600">Start with the free scanning experience. Upgrade to pro or enterprise when you want deeper security workflows and reporting.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className={`rounded-3xl border ${plan.border} bg-gradient-to-br ${plan.gradient} p-6 shadow-lg hover:shadow-xl transition`}>
              <h2 className={`text-2xl font-semibold ${plan.titleColor}`}>{plan.title}</h2>
              <p className={`mt-3 text-4xl font-bold ${plan.titleColor}`}>${plan.price}</p>
              <p className={`mt-3 ${plan.textColor}`}>{plan.description}</p>
              <ul className={`mt-4 space-y-2 ${plan.textColor}`}>
                {plan.features.map((feature) => (
                  <li key={feature}> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
