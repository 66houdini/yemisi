import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function HorizontalScroller({ children, className = "" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const buttonClass =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-light bg-black/80 text-white transition hover:bg-primary-light md:flex disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByPage(-1)}
        disabled={!canPrev}
        className={`${buttonClass} left-2`}
      >
        ←
      </button>
      <div
        ref={trackRef}
        onScroll={update}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-2 md:gap-8"
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByPage(1)}
        disabled={!canNext}
        className={`${buttonClass} right-2`}
      >
        →
      </button>
    </div>
  );
}
