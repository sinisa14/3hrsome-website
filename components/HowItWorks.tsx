const steps = [
  {
    num: 1,
    title: "You Brief Us (Day 1)",
    body: "30-minute call. We define the role, skills, salary range, and culture fit. Your time investment: one meeting.",
  },
  {
    num: 2,
    title: "We Source & Screen (Days 2–7)",
    body: "We search our network across Eastern Europe. Every candidate gets a skills test, English assessment, and video interview with our team. Only the top 3–5 reach your inbox.",
  },
  {
    num: 3,
    title: "You Hire With Confidence (Week 2+)",
    body: "Interview the shortlist. We handle offer negotiation and onboarding support. You pay only when the hire starts. 3-month replacement guarantee included.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-14">
          From Brief to Shortlist in 7 Days
        </h2>

        <div className="flex flex-col gap-10">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white text-xl font-bold flex items-center justify-center">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#555] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-gray rounded-[10px] p-6 px-7 text-center text-[15px] text-[#444] leading-relaxed">
          <strong className="text-brand-black">
            15–20% of annual salary.
          </strong>{" "}
          Split into 3 payments after your hire starts. No retainer. No upfront
          fees.
        </div>

        <div className="text-center mt-10">
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange text-white text-[17px] font-semibold px-9 py-4 rounded-lg hover:bg-brand-orange-hover hover:-translate-y-px transition-all"
          >
            Start Your Search →
          </a>
          <p className="text-sm text-[#777] mt-3">
            Free 30-minute call. No commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
