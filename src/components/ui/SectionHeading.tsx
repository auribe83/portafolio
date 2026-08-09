interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "light" | "dark"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start"
  const titleColor = tone === "dark" ? "text-white" : "text-ink-950"
  const descriptionColor = tone === "dark" ? "text-slate-400" : "text-slate-600"
  const eyebrowColor = tone === "dark" ? "text-accent-400" : "text-brand-600"

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-widest ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleColor}`}>{title}</h2>
      {description && <p className={`text-base sm:text-lg ${descriptionColor}`}>{description}</p>}
    </div>
  )
}
