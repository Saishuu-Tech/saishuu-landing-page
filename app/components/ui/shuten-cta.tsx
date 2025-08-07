import { useRef } from "react";

interface ShutenCTAProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function ShutenCTA({
  href = "https://shuten.io/join",
  children,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: ShutenCTAProps) {
  const prefetchedRef = useRef(false);

  const handleHover = () => {
    if (prefetchedRef.current) return;

    prefetchedRef.current = true;

    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.href = href;
    document.head.appendChild(prefetchLink);
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onMouseEnter={handleHover}
      onFocus={handleHover}
    >
      {children}
    </a>
  );
}
