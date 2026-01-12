interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  subtitle,
  title,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <p className="section-subtitle mb-4 text-foreground/60">
          {subtitle}
        </p>
      )}
      <h2 className="section-title text-foreground">
        {title}
      </h2>
      <div
        className={`mt-6 h-1 w-16 bg-foreground ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      ></div>
    </div>
  );
}
