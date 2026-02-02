export function Rose({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Floating hearts around the rose */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -top-4 -left-8 w-12 h-12 animate-pulse"
        style={{ animationDelay: "0s" }}
      >
        <path
          d="M100 180 C60 140 20 100 20 60 C20 30 50 10 100 50 C150 10 180 30 180 60 C180 100 140 140 100 180Z"
          fill="#f472b6"
          opacity="0.8"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="absolute -top-2 -right-6 w-8 h-8 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <path
          d="M100 180 C60 140 20 100 20 60 C20 30 50 10 100 50 C150 10 180 30 180 60 C180 100 140 140 100 180Z"
          fill="#fb7185"
          opacity="0.7"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="absolute top-1/3 -right-10 w-10 h-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <path
          d="M100 180 C60 140 20 100 20 60 C20 30 50 10 100 50 C150 10 180 30 180 60 C180 100 140 140 100 180Z"
          fill="#ec4899"
          opacity="0.6"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="absolute top-1/2 -left-10 w-9 h-9 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      >
        <path
          d="M100 180 C60 140 20 100 20 60 C20 30 50 10 100 50 C150 10 180 30 180 60 C180 100 140 140 100 180Z"
          fill="#f9a8d4"
          opacity="0.7"
        />
      </svg>

      {/* Main Rose SVG */}
      <svg
        viewBox="0 0 120 160"
        className="w-full h-full drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for petals */}
          <radialGradient id="petalGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="40%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </radialGradient>
          <radialGradient id="innerPetalGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fecdd3" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </radialGradient>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe4e6" />
            <stop offset="100%" stopColor="#fda4af" />
          </radialGradient>
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#166534" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          {/* Shadow filter */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2"/>
          </filter>
        </defs>

        {/* Stem */}
        <path
          d="M60 85 Q58 110 60 155"
          fill="none"
          stroke="url(#stemGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Left leaf */}
        <path
          d="M60 115 Q40 105 25 115 Q30 125 45 125 Q55 122 60 118"
          fill="url(#leafGradient)"
          filter="url(#dropShadow)"
        />
        <path
          d="M60 115 Q45 115 35 118"
          fill="none"
          stroke="#166534"
          strokeWidth="0.5"
          opacity="0.5"
        />

        {/* Right leaf */}
        <path
          d="M60 130 Q80 120 95 130 Q90 140 75 140 Q65 137 60 133"
          fill="url(#leafGradient)"
          filter="url(#dropShadow)"
        />
        <path
          d="M60 130 Q75 130 85 133"
          fill="none"
          stroke="#166534"
          strokeWidth="0.5"
          opacity="0.5"
        />

        {/* Sepals */}
        <path d="M50 82 Q42 70 48 60 Q55 72 58 82" fill="#22c55e" />
        <path d="M70 82 Q78 70 72 60 Q65 72 62 82" fill="#22c55e" />
        <path d="M60 85 Q55 75 60 65 Q65 75 60 85" fill="#16a34a" />

        {/* Outer petals */}
        <ellipse cx="40" cy="55" rx="18" ry="28" fill="url(#petalGradient)" transform="rotate(-25 40 55)" filter="url(#dropShadow)" />
        <ellipse cx="80" cy="55" rx="18" ry="28" fill="url(#petalGradient)" transform="rotate(25 80 55)" filter="url(#dropShadow)" />
        <ellipse cx="35" cy="40" rx="15" ry="24" fill="url(#petalGradient)" transform="rotate(-40 35 40)" />
        <ellipse cx="85" cy="40" rx="15" ry="24" fill="url(#petalGradient)" transform="rotate(40 85 40)" />
        <ellipse cx="60" cy="30" rx="20" ry="15" fill="url(#petalGradient)" />

        {/* Middle petals */}
        <ellipse cx="48" cy="45" rx="14" ry="20" fill="url(#innerPetalGradient)" transform="rotate(-15 48 45)" />
        <ellipse cx="72" cy="45" rx="14" ry="20" fill="url(#innerPetalGradient)" transform="rotate(15 72 45)" />
        <ellipse cx="60" cy="38" rx="16" ry="12" fill="url(#innerPetalGradient)" />

        {/* Inner petals */}
        <ellipse cx="54" cy="42" rx="10" ry="14" fill="#fb7185" transform="rotate(-8 54 42)" />
        <ellipse cx="66" cy="42" rx="10" ry="14" fill="#fb7185" transform="rotate(8 66 42)" />

        {/* Rose center spiral */}
        <ellipse cx="60" cy="40" rx="8" ry="10" fill="url(#centerGradient)" />
        <path
          d="M58 36 Q60 32 62 36 Q64 40 60 42 Q56 40 58 36"
          fill="#fecdd3"
        />

        {/* Highlights for 3D effect */}
        <ellipse cx="45" cy="38" rx="3" ry="6" fill="white" opacity="0.3" transform="rotate(-20 45 38)" />
        <ellipse cx="75" cy="38" rx="3" ry="6" fill="white" opacity="0.3" transform="rotate(20 75 38)" />
      </svg>
    </div>
  )
}
