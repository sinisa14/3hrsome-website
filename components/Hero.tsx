import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-[72px] py-20 md:py-[120px] md:pb-20 px-6 text-center bg-white">
      <div className="max-w-[800px] mx-auto">
        <p className="text-sm font-semibold text-brand-orange tracking-wide mb-6">
          700+ placements · 40+ US companies · Since 2018
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-black mb-5">
          Stop Paying $180K for a Role That Costs $75K.
        </h1>

        <p className="text-lg md:text-xl text-[#444] leading-relaxed mb-9 max-w-[640px] mx-auto">
          We deliver a shortlist of pre-vetted Eastern European professionals in
          7 days. You pay nothing until you hire. Every placement backed by a
          3-month replacement guarantee.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 mb-5">
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange text-white text-[17px] font-semibold px-9 py-4 rounded-lg hover:bg-brand-orange-hover hover:-translate-y-px transition-all"
          >
            Get Your Shortlist in 7 Days →
          </a>
          <a
            href="#how-it-works"
            className="text-[15px] font-medium text-brand-blue border-b border-dashed border-brand-blue pb-0.5 hover:text-brand-orange hover:border-brand-orange transition-colors"
          >
            See How It Works ↓
          </a>
        </div>

        <p className="text-sm text-[#777] mt-4">
          No retainer. No upfront fees. No hire = no payment.
        </p>

        {/* Client Logos */}
        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-[#999] uppercase tracking-[1.5px] mb-5">
            Trusted by founders at
          </p>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <Image
              src="/images/upshift.jpg"
              alt="Upshift"
              width={120}
              height={38}
              className="h-8 md:h-[38px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <Image
              src="/images/half-dome.png"
              alt="Half Dome Labs"
              width={120}
              height={38}
              className="h-8 md:h-[38px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <Image
              src="/images/intermino.jpg"
              alt="Intermino"
              width={120}
              height={38}
              className="h-8 md:h-[38px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
