export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-dark text-white/70">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start text-center md:text-left">
        <div>
          <p className="text-[15px] leading-relaxed mb-4 text-white/60">
            Pre-vetted remote talent for US startups. Eastern Europe&apos;s
            best, delivered in 7 days.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-4">
            <a
              href="#how-it-works"
              className="text-sm text-white/70 font-medium hover:text-brand-orange transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/70 font-medium hover:text-brand-orange transition-colors"
            >
              Pricing
            </a>
            <a
              href="#results"
              className="text-sm text-white/70 font-medium hover:text-brand-orange transition-colors"
            >
              Results
            </a>
            <a
              href="#about"
              className="text-sm text-white/70 font-medium hover:text-brand-orange transition-colors"
            >
              About
            </a>
            <a
              href="https://app.dover.com/dover/careers/858f3e07-2623-40cc-a561-dafc4c291312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 font-medium hover:text-brand-orange transition-colors"
            >
              Talent Hub
            </a>

          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-4">
            <a
              href="https://www.linkedin.com/in/sinisa-jungic-67303884"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-brand-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:recruiting@3hrsome.com"
              className="text-sm text-white/70 hover:text-brand-orange transition-colors"
            >
              recruiting@3hrsome.com
            </a>
          </div>

          <p className="text-[13px] text-white/40">
            © 2026 3HRsome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
