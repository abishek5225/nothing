"use client"

import { useEffect, useState } from "react"

interface FloatingItem {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
  type: "heart" | "sparkle" | "star"
  color: string
}

const colors = [
  "#a855f7", // purple-500
  "#c084fc", // purple-400
  "#d8b4fe", // purple-300
  "#e879f9", // fuchsia-400
  "#f0abfc", // fuchsia-300
  "#f472b6", // pink-400
]

export function FloatingHearts() {
  const [items, setItems] = useState<FloatingItem[]>([])

  useEffect(() => {
    const types: FloatingItem["type"][] = ["heart", "sparkle", "star"]
    const newItems: FloatingItem[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 18 + 12,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 8,
      opacity: Math.random() * 0.5 + 0.3,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setItems(newItems)
  }, [])

  const renderItem = (item: FloatingItem) => {
    if (item.type === "heart") {
      return (
        <svg viewBox="0 0 24 24" fill={item.color} width="1em" height="1em">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
    if (item.type === "sparkle") {
      return (
        <svg viewBox="0 0 24 24" fill={item.color} width="1em" height="1em">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      )
    }
    return (
      <svg viewBox="0 0 24 24" fill={item.color} width="1em" height="1em">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float"
          style={{
            left: `${item.left}%`,
            bottom: "-50px",
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {renderItem(item)}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
            transform: translateY(-10vh) rotate(45deg) scale(1);
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.1);
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
