export default function StructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What if the hire doesn't work out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We replace them — free. If your new hire leaves or doesn't perform within 90 days of their start, we run a replacement search at no additional charge. That's our guarantee on every single placement.",
        },
      },
      {
        "@type": "Question",
        name: "How do you make sure candidates are actually good?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three filters before you see anyone. Technical skills test. Written English assessment. Video interview with our team. You only meet candidates who've already passed. We don't forward raw applications.",
        },
      },
      {
        "@type": "Question",
        name: "How does pricing compare to hiring in the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our fee is 15–20% of the hire's annual salary, paid across 3 milestones. The candidate's salary runs 50–60% below a US equivalent. On a $160K US role, you're paying $65K–$80K total for the year. You pay nothing until you hire.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you actually deliver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7 business days from kickoff to shortlist. That's backed by 700+ placements and an active network across Eastern Europe. We're not posting a job ad and waiting — we're sourcing from people we already know.",
        },
      },
      {
        "@type": "Question",
        name: "What roles do you hire for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Software engineers, DevOps, QA, finance controllers, FP&A, operations leads, supply chain, customer support, BIM specialists, ML engineers, and more. If the role can be done remotely, we probably hire for it.",
        },
      },
      {
        "@type": "Question",
        name: "What about time zones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eastern Europe is UTC+1 to UTC+3. That gives 6–8 hours of overlap with US East Coast business hours. Most of our candidates are experienced working with US teams and async communication.",
        },
      },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "3HRsome",
    url: "https://3hrsome.com",
    logo: "https://3hrsome.com/images/3hrsome-logo.png",
    description:
      "Pre-vetted remote talent from Eastern Europe for US startups. Delivered in 7 days.",
    founder: {
      "@type": "Person",
      name: "Sinisa Jungic",
      url: "https://www.linkedin.com/in/sinisa-jungic-67303884",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "recruiting@3hrsome.com",
      contactType: "sales",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
