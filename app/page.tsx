"use client"

import { useState, useCallback } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineCard } from "@/components/valentine-card"
import { SuccessScreen } from "@/components/success-screen"
import { SadScreen } from "@/components/sad-screen"

type PageState = "question" | "accepted" | "rejected"

export default function ValentinePage() {
  const [pageState, setPageState] = useState<PageState>("question")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleYesClick = useCallback(async () => {
    setIsSubmitting(true)
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Alexandra", response: "yes" }),
      })
    } catch (error) {
      console.log("[v0] Notification error:", error)
    }
    setPageState("accepted")
    setIsSubmitting(false)
  }, [])

  const handleNoClick = useCallback(async () => {
    setIsSubmitting(true)
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Alexandra", response: "no" }),
      })
    } catch (error) {
      console.log("[v0] Notification error:", error)
    }
    setPageState("rejected")
    setIsSubmitting(false)
  }, [])

  const handleChangeAnswer = useCallback(() => {
    setPageState("question")
  }, [])

  if (pageState === "rejected") {
    return <SadScreen onChangeAnswer={handleChangeAnswer} />
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        {pageState === "accepted" ? (
          <SuccessScreen />
        ) : (
          <ValentineCard 
            onYesClick={handleYesClick} 
            onNoClick={handleNoClick}
            isSubmitting={isSubmitting} 
          />
        )}
      </div>
    </main>
  )
}
