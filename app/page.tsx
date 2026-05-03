export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Remote Engineering Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Async Standups for{" "}
          <span className="text-[#58a6ff]">Maximum Team Alignment</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze standup response patterns, discover the best timing, and get
          AI-powered question format suggestions — all without another meeting.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📊", title: "Engagement Analytics", desc: "See who responds, when, and how thoroughly across your team." },
          { icon: "⏰", title: "Optimal Timing", desc: "Discover the exact window when your team is most responsive." },
          { icon: "💡", title: "Question Tuning", desc: "Get suggestions to rewrite blockers-focused questions that get real answers." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] mb-6">per month · unlimited team members</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Slack & webhook integrations",
              "Response pattern analytics",
              "Optimal timing recommendations",
              "Question format suggestions",
              "CSV export",
              "Email digest reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to our standups?",
              a: "Connect via Slack bot, email forwarding, or a simple webhook. Setup takes under 5 minutes and requires no code changes."
            },
            {
              q: "What does 'optimal timing' actually mean?",
              a: "We analyze historical response timestamps to surface the time window where your team completes standups fastest and most completely."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Async Standup Optimizer. Built for remote teams.
      </footer>
    </main>
  );
}
