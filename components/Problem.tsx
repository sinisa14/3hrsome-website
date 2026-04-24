const problems = [
  {
    icon: "💸",
    title: "Your Runway Is Burning",
    body: "A senior engineer costs $150K–$200K in the US. Add recruiter fees, benefits, and 3 months to find them — and you've spent more on hiring than building.",
  },
  {
    icon: "⏱",
    title: "You Don't Have 8 Weeks",
    body: "The average US hire takes 45 days. You're reviewing 200 CVs, running 15 interviews, and still not sure. Your product roadmap doesn't wait.",
  },
  {
    icon: "🎯",
    title: "Job Boards Give You Volume, Not Quality",
    body: "You post on LinkedIn. You get 300 applications. Maybe 5 are relevant. You spend 40 hours sorting through noise and still end up guessing.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 px-6 bg-brand-gray">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-12">
          Hiring in the US Is Costing You More Than Money
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-[10px] p-9 px-7 border-t-4 border-brand-orange shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-brand-black mb-3">
                {p.title}
              </h3>
              <p className="text-[15px] text-[#555] leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-[18px] md:text-[22px] font-bold text-brand-blue">
          There&apos;s a faster, cheaper, better way.
        </p>
      </div>
    </section>
  );
}
