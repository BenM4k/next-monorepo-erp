const Qlogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid/node pattern inside */}
    <rect x="4" y="4" width="40" height="40" rx="6" className="fill-primary" />
    {/* Grid lines */}
    <line
      x1="16"
      y1="8"
      x2="16"
      y2="40"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    <line
      x1="24"
      y1="8"
      x2="24"
      y2="40"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    <line
      x1="32"
      y1="8"
      x2="32"
      y2="40"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    <line
      x1="8"
      y1="16"
      x2="40"
      y2="16"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    <line
      x1="8"
      y1="24"
      x2="40"
      y2="24"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    <line
      x1="8"
      y1="32"
      x2="40"
      y2="32"
      className="stroke-primary-foreground"
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
    {/* Node dots */}
    <circle cx="16" cy="16" r="1.5" className="fill-accent" />
    <circle cx="24" cy="16" r="1.5" className="fill-secondary" />
    <circle cx="32" cy="24" r="1.5" className="fill-accent" />
    <circle cx="16" cy="32" r="1.5" className="fill-secondary" />
    <circle cx="32" cy="32" r="1.5" className="fill-accent" />
    {/* Bold Q letter */}
    <text
      x="24"
      y="30"
      textAnchor="middle"
      className="fill-primary-foreground"
      fontFamily="'Space Grotesk', sans-serif"
      fontWeight="700"
      fontSize="24"
    >
      Q
    </text>
  </svg>
)

export default Qlogo
