interface LogoProps {
  className?: string;
  size?: number;
}

export function HeroImage({ className = "", size = 32 }: LogoProps) {
  return (
    <img
      src="/images/hero.png"
      alt=""
      className={`${className}`}
      style={{ width: size, height: size }}
    />
  );
}
