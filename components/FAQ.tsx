const faqs = [
  {
    q: "What if the hire doesn't work out?",
    a: "We replace them — free. If your new hire leaves or doesn't perform within 90 days of their start, we run a replacement search at no additional charge. That's our guarantee on every single placement.",
  },
  {
    q: "How do you make sure candidates are actually good?",
    a: "Three filters before you see anyone. Technical skills test. Written English assessment. Video interview with our team. You only meet candidates who've already passed. We don't forward raw applications.",
  },
  {
    q: "How does pricing compare to hiring in the US?",
    a: "Our fee is 15–20% of the hire's annual salary, paid across 3 milestones. The candidate's salary runs 50–60% below a US equivalent. On a $160K US role, you're paying $65K–$80K total for the year. You pay nothing until you hire.",
  },
  {
    q: "How fast can you actually deliver?",
    a: "7 business days from kickoff to shortlist. That's backed by 700+ placements and an active network across Eastern Europe. We're not posting a job ad and waiting — we're sourcing from people we already know.",
  },
  {
    q: "What roles do you hire for?",
    a: "Software engineers, DevOps, QA, finance controllers, FP&A, operations leads, supply chain, customer support, BIM specialists, ML engineers, and more. If the role can be done remotely, we probably hire for it.",
  },
  {
    q: "What about time zones?",
    a: "Eastern Europe is UTC+1 to UTC+3. That gives 6–8 hours of overlap with US East Coast business hours. Most of our candidates are experienced working with US teams and async communication.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-12">
          Common Questions
        </h2>

        <div className="faq-accordion">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className={`border-b border-[#e0e0e0] group ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <summary className="py-5 text-base font-bold text-brand-blue cursor-pointer list-none flex justify-between items-center gap-4 hover:text-brand-orange transition-colors [&::-webkit-details-marker]:hidden group-open:text-brand-orange">
                <span>{faq.q}</span>
                <span className="text-[22px] font-semibold text-brand-orange flex-shrink-0 group-open:hidden">
                  +
                </span>
                <span className="text-[22px] font-semibold text-brand-orange flex-shrink-0 hidden group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-5 text-[15px] text-[#555] leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
