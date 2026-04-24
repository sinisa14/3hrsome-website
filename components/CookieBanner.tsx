"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-brand-dark border-t border-white/10 px-6 py-4">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80 leading-relaxed text-center sm:text-left">
          We use cookies to improve your experience. No tracking, no ads — just
          essential site functionality.{" "}
          <a
            href="mailto:recruiting@3hrsome.com"
            className="underline text-white hover:text-brand-orange transition-colors"
          >
            Questions?
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-brand-orange text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-brand-orange-hover transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
