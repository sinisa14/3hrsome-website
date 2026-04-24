import Image from "next/image";

export default function Founder() {
  return (
    <section id="about" className="py-20 px-6 bg-brand-gray">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-12">
          Built by a Recruiter Who&apos;s Done This 700+ Times
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start text-center md:text-left">
          <Image
            src="/images/Sinisa Jungic founder.png"
            alt="Sinisa Jungic — Founder of 3HRsome"
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full border-4 border-brand-blue object-cover object-[center_20%] mx-auto md:mx-0"
          />

          <div>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              I&apos;m Sinisa Jungic — founder and lead recruiter at 3HRsome.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              I&apos;ve spent 8 years placing talent from Eastern Europe into US
              startups. Over 700 placements across software, finance, logistics,
              and operations. Every search gets my direct attention — no handoffs
              to junior recruiters, no layers between you and results.
            </p>
            <p className="text-[15px] text-[#444] leading-relaxed mb-4">
              I started 3HRsome because I watched founders overpay for slow,
              impersonal recruitment. There&apos;s a smarter way — and I built
              it.
            </p>

            <div className="border-l-4 border-brand-orange py-4 px-5 my-6 italic text-base text-[#333] bg-white rounded-r-lg">
              &ldquo;I don&apos;t run a hiring factory. I run a network. Every
              founder gets my direct line.&rdquo;
            </div>

            <a
              href="https://www.linkedin.com/in/sinisa-jungic-67303884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-[15px] font-semibold py-3 px-6 rounded-lg hover:bg-[#1a1a4a] transition-colors mt-2"
            >
              🔗 Connect on LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
