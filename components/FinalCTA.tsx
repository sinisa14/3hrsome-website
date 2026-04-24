export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-brand-blue text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-[28px] md:text-4xl font-extrabold text-white mb-4">
          Ready to Hire Without the Overhead?
        </h2>
        <p className="text-lg text-white/85 leading-relaxed mb-9">
          Get a shortlist of pre-vetted candidates in 7 days. Pay only when you
          hire. Every placement guaranteed for 90 days.
        </p>

        <a
          href="https://tidycal.com/sinisaj/build-your-team-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange text-white text-[17px] font-semibold px-9 py-4 rounded-lg hover:bg-brand-orange-hover hover:-translate-y-px transition-all mb-4"
        >
          Book Your Free Strategy Call →
        </a>

        <p className="text-[15px] text-white/70 mb-8">
          Prefer email?{" "}
          <a
            href="mailto:recruiting@3hrsome.com"
            className="text-white underline hover:text-brand-orange transition-colors"
          >
            recruiting@3hrsome.com
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <span className="text-sm text-white/80 font-medium">
            ✓ 30-minute call, no commitment
          </span>
          <span className="text-sm text-white/80 font-medium">
            ✓ Shortlist delivered in 7 days
          </span>
          <span className="text-sm text-white/80 font-medium">
            ✓ 3-month replacement guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
