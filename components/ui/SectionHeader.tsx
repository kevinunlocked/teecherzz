interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-1 w-16 bg-foreground"></div>
    </div>
  );
}
