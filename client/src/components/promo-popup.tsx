import { useState, useEffect } from "react";
import { X } from "lucide-react";

const POPUP_KEY = "ibc_promo_touristpass_dismissed";
const PROMO_URL = "https://istanbultouristpass.com/?ref=muctmxcb";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(POPUP_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setVisible(false);
    localStorage.setItem(POPUP_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={close}
      data-testid="promo-popup-overlay"
    >
      <div
        className="relative max-w-md w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="promo-popup"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Close popup"
          data-testid="button-close-promo"
        >
          <X className="w-5 h-5" />
        </button>

        <a
          href={PROMO_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label="Istanbul Tourist Pass - One pass, endless discoveries"
          data-testid="link-promo-image"
        >
          <img
            src="/promo-touristpass.webp"
            alt="Istanbul Tourist Pass - All included in one pass, endless discoveries"
            className="w-full h-auto"
            width="800"
            height="1001"
            loading="lazy"
            decoding="async"
            data-testid="img-promo"
          />
        </a>

        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a5f] p-4">
          <a
            href={PROMO_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-3 w-full bg-[#e5326e] hover:bg-[#c72259] text-white font-bold text-lg py-3.5 px-6 rounded-xl transition-colors shadow-md"
            data-testid="link-promo-touristpass"
          >
            Get Your Istanbul Tourist Pass
          </a>
        </div>
      </div>
    </div>
  );
}
