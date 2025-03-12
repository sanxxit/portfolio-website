"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // This would be replaced with actual API call to Supabase & Resend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 flex justify-center">
      <Card className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-xl p-6 border border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-white">📩 Subscribe to my Newsletter</CardTitle>
          <CardDescription className="text-gray-400 text-lg mt-2">
            Stay updated with my latest projects, blogs, and tech insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative w-full">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

