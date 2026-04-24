const milestones = [
  {
    label: "Milestone 1",
    title: "Candidate's First Day",
    desc: "Payment due when your hire starts",
    amount: "~33% of fee",
    featured: false,
  },
  {
    label: "Milestone 2",
    title: "45 Days After Start",
    desc: "Second payment after proven performance",
    amount: "~33% of fee",
    featured: true,
  },
  {
    label: "Milestone 3",
    title: "90 Days After Start",
    desc: "Final payment after full guarantee period",
    amount: "~34% of fee",
    featured: false,
  },
];

const salaryData = [
  {
    role: "Senior Engineer",
    us: "$160,000",
    ee: "$65,000–$80,000",
    save: "~$85,000/yr",
  },
  {
    role: "Financial Controller",
    us: "$130,000",
    ee: "$50,000–$65,000",
    save: "~$70,000/yr",
  },
  {
    role: "DevOps Engineer",
    us: "$150,000",
    ee: "$60,000–$75,000",
    save: "~$80,000/yr",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[26px] md:text-[32px] font-extrabold text-brand-black mb-4">
          Simple Pricing. No Surprises.
        </h2>
        <p className="text-center text-lg text-[#444] mb-12 leading-relaxed">
          15–20% of the candidate&apos;s first-year salary. Paid in 3
          milestones — not upfront.
        </p>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {milestones.map((m) => (
            <div
              key={m.label}
              className={`rounded-[10px] p-8 px-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${
                m.featured
                  ? "bg-brand-blue text-white md:scale-[1.04]"
                  : "bg-brand-gray"
              }`}
            >
              <div className="text-[13px] font-semibold uppercase tracking-wider text-brand-orange mb-3">
                {m.label}
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  m.featured ? "text-white" : "text-brand-black"
                }`}
              >
                {m.title}
              </h3>
              <p
                className={`text-[15px] ${
                  m.featured ? "text-white/80" : "text-[#666]"
                }`}
              >
                {m.desc}
              </p>
              <div
                className={`text-[28px] font-extrabold mt-3 ${
                  m.featured ? "text-white" : "text-brand-orange"
                }`}
              >
                {m.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Salary Comparison */}
        <div className="mb-12">
          <h3 className="text-center text-[22px] font-bold text-brand-black mb-6">
            What You Save — Per Hire, Per Year
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="py-4 px-5 text-sm font-semibold text-left">
                    Role
                  </th>
                  <th className="py-4 px-5 text-sm font-semibold text-left">
                    US Salary
                  </th>
                  <th className="py-4 px-5 text-sm font-semibold text-left">
                    Eastern Europe
                  </th>
                  <th className="py-4 px-5 text-sm font-semibold text-left">
                    You Save
                  </th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr
                    key={row.role}
                    className={i % 2 === 1 ? "bg-brand-gray" : "bg-white"}
                  >
                    <td className="py-4 px-5 text-[15px] md:text-[15px] text-[13px] border-b border-[#eee]">
                      {row.role}
                    </td>
                    <td className="py-4 px-5 text-[15px] md:text-[15px] text-[13px] border-b border-[#eee]">
                      {row.us}
                    </td>
                    <td className="py-4 px-5 text-[15px] md:text-[15px] text-[13px] border-b border-[#eee]">
                      {row.ee}
                    </td>
                    <td className="py-4 px-5 text-[15px] md:text-[15px] text-[13px] border-b border-[#eee] text-green-600 font-bold">
                      {row.save}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-brand-blue text-white rounded-[10px] p-8 px-9 text-center text-lg font-semibold leading-relaxed mb-8">
          🛡️ 3-Month Free Replacement Guarantee — If your hire doesn&apos;t
          work out within 90 days, we replace them at no charge. No arguments.
          No fees.
        </div>

        <p className="text-center text-[17px] font-semibold text-[#444] mb-10 leading-relaxed">
          No hire = no payment. No upfront fees. No monthly retainers. No hidden
          costs.
        </p>

        <div className="text-center">
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange text-white text-[17px] font-semibold px-9 py-4 rounded-lg hover:bg-brand-orange-hover hover:-translate-y-px transition-all"
          >
            Get Started — No Risk →
          </a>
        </div>
      </div>
    </section>
  );
}
