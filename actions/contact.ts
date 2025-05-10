"use server"

import { z } from "zod"

// Define a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = contactFormSchema.safeParse({ name, email, subject, message })

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      }
    }

    // In a real implementation, you would use a service like SendGrid, Nodemailer, or Resend
    // to send an email to mardhikazhar@gmail.com

    // For demonstration purposes, we'll simulate a successful email send
    console.log("Sending email to mardhikazhar@gmail.com")
    console.log("From:", name, email)
    console.log("Subject:", subject)
    console.log("Message:", message)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Your message has been sent! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}
