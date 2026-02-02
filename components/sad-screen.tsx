"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface SadScreenProps {
  onChangeAnswer: () => void
}

export function SadScreen({ onChangeAnswer }: SadScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-b from-background via-muted to-background">
      {/* Falling tears/rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-fall opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            💧
          </div>
        ))}
      </div>

      <Card className="relative w-full max-w-md border-2 border-muted bg-card/90 backdrop-blur-sm shadow-xl">
        <CardContent className="flex flex-col items-center gap-6 p-8 pt-10 text-center">
          {/* Broken heart */}
          <div className="relative">
            <div className="text-8xl opacity-60">💔</div>
          </div>

          {/* Sad quote */}
          <div className="space-y-4">
            <h1 className="font-serif text-3xl md:text-4xl text-muted-foreground font-bold text-balance">
              Oh no...
            </h1>
            
            <blockquote className="text-lg text-muted-foreground/80 italic border-l-4 border-muted pl-4 text-left">
              "The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten."
            </blockquote>
            <p className="text-sm text-muted-foreground/60">— William Faulkner</p>
          </div>

          <p className="text-muted-foreground">
            I understand, Alexandra... but my heart will always have a place for you.
          </p>

          {/* Change answer button */}
          <Button
            onClick={onChangeAnswer}
            variant="outline"
            size="lg"
            className="mt-4 border-primary/40 text-primary hover:bg-primary/10 font-medium rounded-full px-8 bg-transparent"
          >
            <Heart className="w-4 h-4 mr-2" />
            Wait, I changed my mind!
          </Button>
        </CardContent>
      </Card>

      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) rotate(10deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  )
}
