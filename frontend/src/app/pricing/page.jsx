export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50">Pricing</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">This app is a demo and can be used freely during local development.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Free", price: "0", description: "Basic OWASP header and page scanning.", features: ["URL scanning", "Header checks", "Content warnings"] },
            { title: "Pro", price: "Soon", description: "Extend with deeper checks and auth integration.", features: ["Advanced scans", "Custom rules", "Secure auth"] },
            { title: "Enterprise", price: "Soon", description: "Deploy on your own network and customize rules.", features: ["Private deployment", "Team support", "Extended reports"] },
          ].map((plan) => (
            <div key={plan.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-slate-100">{plan.title}</h2>
              <p className="mt-3 text-4xl font-bold text-slate-900 dark:text-slate-50">${plan.price}</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
