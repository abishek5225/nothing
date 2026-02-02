"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function SuccessScreen() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  return (
    <Card className="relative w-full max-w-md border-2 border-primary/30 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20 overflow-hidden">
      {showConfetti && <Confetti />}
      <CardContent className="flex flex-col items-center gap-6 p-8 pt-10 text-center">
        {/* Celebration hearts */}
        <div className="relative">
          <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center">
            <Heart className="w-24 h-24 text-primary fill-primary animate-pulse" />
          </div>
          <div className="absolute -top-2 -left-2 animate-bounce delay-100">
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce delay-200">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 animate-bounce delay-300">
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
        </div>

        {/* Celebration message */}
        <div className="space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold">
            Yay!!!
          </h1>
          <p className="text-2xl text-foreground font-medium">
             I’m really glad you said yes.
          </p>
          <p className="text-lg text-muted-foreground">
          This just made my day.
            </p>
        </div>

        {/* Hearts decoration */}
        <div className="flex items-center gap-3 text-3xl">
          <span className="animate-bounce" style={{ animationDelay: "0ms" }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: "100ms" }}>💗</span>
          <span className="animate-bounce" style={{ animationDelay: "200ms" }}>💖</span>
          <span className="animate-bounce" style={{ animationDelay: "300ms" }}>💝</span>
          <span className="animate-bounce" style={{ animationDelay: "400ms" }}>💕</span>
        </div>

        <p className="text-muted-foreground italic">
          Thank you very much! 🥰
        </p>
      </CardContent>
    </Card>
  )
}

function Confetti() {
  const [particles, setParticles] = useState<Array<{
    id: number
    left: number
    delay: number
    duration: number
    color: string
  }>>([])

  useEffect(() => {
    const colors = ["#ec4899", "#f472b6", "#f9a8d4", "#fce7f3", "#ef4444", "#fca5a5"]
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            left: `${particle.left}%`,
            top: "-10px",
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(500px) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti ease-out forwards;
        }
      `}</style>
    </div>
  )
}
