"use client"

import { useState } from "react"
import { useActionState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/actions/contact"
import { Loader2 } from "lucide-react"

const initialState = {
  success: false,
  message: "",
  errors: {},
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await formAction(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {state.message && (
        <div
          className={`p-4 mb-4 rounded-md ${state.success ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"}`}
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            placeholder="Your name"
            required
          />
          {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            placeholder="Your email"
            required
          />
          {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="Subject"
          required
        />
        {state.errors?.subject && <p className="text-sm text-red-500">{state.errors.subject}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="Your message"
          required
        ></motion.textarea>
        {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message}</p>}
      </div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </motion.div>
    </form>
  )
}
