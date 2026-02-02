"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Loader2 } from "lucide-react"
import { Rose } from "@/components/rose"

interface ValentineCardProps {
  onYesClick: () => void
  onNoClick: () => void
  isSubmitting: boolean
}

export function ValentineCard({ onYesClick, onNoClick, isSubmitting }: ValentineCardProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [yesButtonScale, setYesButtonScale] = useState(1)
  const [noAttempts, setNoAttempts] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

 const messages = [
  "Wanna be my Valentine?",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Pretty please?",
  "Just say yes!",
  "Come on!",
  "Healthy choices matter ",
  "Why oh why tell me why not me",
  "haha how was it?"
]

  const moveNoButton = useCallback(() => {
    // Move the No button within a constrained area on the right side
    // Keep it separate from the Yes button on the left
    const maxX = 150
    const maxY = 100

    // Random position biased to the right side (positive X values only)
    const newX = Math.random() * maxX + 50
    const newY = (Math.random() - 0.5) * maxY * 2

    setNoButtonPosition({ x: newX, y: newY })
    setNoAttempts((prev) => prev + 1)
    setYesButtonScale((prev) => Math.min(prev + 0.05, 1.5))
  }, [])

  return (
    <Card
      ref={containerRef}
      className="relative w-full max-w-md border-2 border-primary/30 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20"
    >
      <CardContent className="flex flex-col items-center gap-6 p-8 pt-10">
        {/* Beautiful Rose */}
        <div className="relative">
          <Rose className="w-36 h-48 drop-shadow-lg" />
        </div>

        {/* Question */}
        <div className="text-center space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold text-balance">
            {messages[noAttempts]}
          </h1>
          <p className="text-2xl text-foreground font-serif font-semibold">
            Alexandra
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-8 w-full py-4">
          {/* Yes Button - Fixed on left */}
          <Button
            onClick={onYesClick}
            disabled={isSubmitting}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              transform: `scale(${yesButtonScale})`,
            }}
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <Heart className="w-5 h-5 mr-2 fill-current" />
            )}
            Yes!
          </Button>

          {/* No Button container - keeps space on right */}
          <div className="relative w-24 h-14 flex items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-card border-2 border-muted-foreground/30 text-muted-foreground font-medium text-lg px-8 py-6 rounded-full transition-all duration-200 hover:border-muted-foreground/40 hover:bg-muted/20 whitespace-nowrap"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={noAttempts < 10 ? moveNoButton : undefined}
              onTouchStart={noAttempts < 10 ? moveNoButton : undefined}
              onClick={noAttempts >= 10 ? onNoClick : moveNoButton}
            >
              No
            </Button>
          </div>
        </div>

        {noAttempts > 0 && noAttempts < 10 && (
          <p className="text-2xl text-muted-foreground animate-pulse text-center">
  {noAttempts <= 1
    ? "Hehe, nice reflexes!"
    : noAttempts <= 2
      ? "Go for it 😄"
    : noAttempts <= 4
      ? "Looks like cardio for the No button 😄"
      : noAttempts <= 6
        ? "It skips leg day… clearly"
        : noAttempts <= 8
          ? "Still warming up!"
          : "Okay, cooldown time — your call 😊"}
</p>

        )}
        {noAttempts >= 10 && (
          <p className="text-sm text-muted-foreground/70 text-center">
            Okay... the No button stopped running. But please think twice...
          </p>
        )}
      </CardContent>
    </Card>
  )
}
