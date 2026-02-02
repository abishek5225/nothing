import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, response } = await request.json()
    
    const emailTo = "abishekchaulagain5225@gmail.com"
    
    const isYes = response === "yes"
    
    const subject = isYes 
      ? `She Said YES! Alexandra is Your Valentine!`
      : `Alexandra said no... but don't lose hope`
    
    const yesMessage = `
═══════════════════════════════════════════
              A ROSE FOR YOU
           
                 @@@
                @@@@@
               @@@@@@@
              @@@@@@@@@
               @@@@@@@
                @@@@@
                  |
                  |
                 /|\\
                / | \\
═══════════════════════════════════════════


ALEXANDRA SAID YES!

yayyyyyyyy
This moment happened at: ${new Date().toLocaleString()}


═══════════════════════════════════════════
    `.trim()

    const noMessage = `
═══════════════════════════════════════════
                  💔
═══════════════════════════════════════════

Dear Friend,


Alexandra clicked "No" 

This happened at: ${new Date().toLocaleString()}

But remember:



═══════════════════════════════════════════
    `.trim()
    
    const message = isYes ? yesMessage : noMessage

    // Try to send via Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Valentine Notification <onboarding@resend.dev>",
          to: [emailTo],
          subject: subject,
          text: message,
        }),
      })

      if (response.ok) {
        console.log("[v0] Email sent successfully via Resend")
        return NextResponse.json({ success: true, method: "resend" })
      }
    }

    // Log the notification (you'll see this in Vercel logs after deployment)
    console.log("=".repeat(50))
    console.log("💕 VALENTINE NOTIFICATION 💕")
    console.log(`${name} said YES!`)
    console.log(`Time: ${new Date().toISOString()}`)
    console.log(`Would send email to: ${emailTo}`)
    console.log("=".repeat(50))

    return NextResponse.json({ 
      success: true, 
      message: "Notification logged! Set up RESEND_API_KEY for email delivery.",
      name 
    })
  } catch (error) {
    console.error("[v0] Notification error:", error)
    return NextResponse.json({ success: false, error: "Failed to process" }, { status: 500 })
  }
}
