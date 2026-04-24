import Image from "next/image";

const stats = [
  { number: "700+", label: "Placements since 2018" },
  { number: "40+", label: "US companies served" },
  { number: "7 days", label: "Average time to shortlist" },
  { number: "50–60%", label: "Salary savings vs US" },
];

const testimonials = [
  {
    quote:
      "Over three years, we hired 10+ professionals through 3HRsome across Customer Support, Success, Product, and Finance. Efficient, reliable, and always aligned with our needs.",
    name: "Alexander Pantich",
    title: "Co-Founder at Upshift · Connecticut, USA",
    photo: "/images/Alexander Pantich.jpg",
    linkedin: "https://www.linkedin.com/in/alexanderpantich/",
    featured: true,
  },
  {
    quote:
      "Consistently delivers quality candidates and communicates well throughout. A reliable partner for scaling remote teams quickly and smoothly.",
    name: "Kingston Tam",
    title: "Founder at Half Dome Labs · Barcelona, Spain",
    photo: "/images/Kingston Tam.jpg",
    linkedin: "https://www.linkedin.com/in/kingstontam/",
    featured: false,
  },
  {
    quote:
      "Exceptional support hiring Salesforce developers. Beyond sourcing, we received process insights that improved our whole recruitment operation.",
    name: "Milos Stamenic",
    title: "Managing Partner at Intermino · Novi Sad, Serbia",
    photo: "/images/Milos Stamenic.jpg",
    linkedin: "https://www.linkedin.com/in/milos-stamenic-913b4638/",
    featured: false,
  },
];

export default function Proof() {
  return (
    <section id="results" className="py-20 px-6 bg-brand-gray">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-12">
          The Numbers Speak
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-[42px] font-extrabold text-brand-orange leading-tight mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-[#666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-white rounded-[10px] p-8 px-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col ${
                t.featured ? "border-2 border-brand-orange" : ""
              }`}
            >
              <blockquote className="text-[15px] text-[#444] leading-relaxed italic mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3.5">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-sm leading-snug">
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-blue transition-colors"
                  >
                    <strong className="block font-bold text-brand-black">
                      {t.name}
                    </strong>
                  </a>
                  <span className="text-[#777] text-[13px]">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange text-white text-[17px] font-semibold px-9 py-4 rounded-lg hover:bg-brand-orange-hover hover:-translate-y-px transition-all"
          >
            Join 40+ Companies Hiring Smarter →
          </a>
        </div>
      </div>
    </section>
  );
}
