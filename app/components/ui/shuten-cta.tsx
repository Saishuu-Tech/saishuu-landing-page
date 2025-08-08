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
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}