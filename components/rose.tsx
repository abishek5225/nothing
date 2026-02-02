import Image from "next/image"

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

      {/* Rose Image - Replace the src with your own rose image */}
      <Image
        src="/images/rose.png"
        alt="A beautiful rose for you"
        width={150}
        height={200}
        className="drop-shadow-xl object-contain"
        priority
      />
    </div>
  )
}
