"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Twitter, Linkedin, Mail, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import emailjs from '@emailjs/browser'

const technologies = [
  "Next.js", "React", "Node.js", "Python", "TensorFlow",
  "Computer Vision", "Machine Learning", "Backend Development",
  "DevOps", "Docker", "Kubernetes", "CI/CD", "Cloud Computing"
]

export default function Home() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sanchitagrawal2023@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container relative py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-primary/5 to-background/0" />
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                  Sanchit Agrawal
                </span>
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-2xl">
                Computer Artist & AI Enthusiast
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Prefinal year Computer Science student passionate about backend development, AI, and building scalable systems. 
                Enthusiastic about open-source development and DevOps practices, I love contributing to the community and building 
                robust, scalable solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button className="group gap-2 button-glow">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="outline" className="gap-2 button-glow">
                  Resume
                </Button>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/sanxxit" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sanchit-agrawal-54a8a01a5/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/Sanchitagrawala" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://sanxxit.hashnode.dev" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <BookOpen className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:sanchitagrawal2023@gmail.com">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-primary/10 to-background blur-3xl" />
              <div className="relative h-full w-full">
                <Image
                  src="/prof.png"
                  alt="Sanchit Agrawal"
                  fill
                  className="rounded-full object-cover p-8 hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-8 rounded-full border-2 border-primary/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container py-12 md:py-24 section-gradient">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Technologies & Skills</h2>
          <p className="text-muted-foreground md:text-lg">
            I work with a variety of technologies and frameworks to build modern, scalable applications
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm hover-lift px-4 py-2">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[800px] rounded-xl border border-border/50 bg-muted/50 p-8 text-center backdrop-blur container-glass">
          <h2 className="mb-4 text-3xl font-bold gradient-text">Let's Connect ✨</h2>
          <p className="mb-8 text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-[600px] mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="glass-effect"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="glass-effect"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                className="min-h-[150px] glass-effect"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto gap-2 button-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Mail className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-4">
              <Link href="https://www.linkedin.com/in/sanchit-agrawal-54a8a01a5/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:sanchitagrawal2023@gmail.com">
                <Button variant="ghost" size="icon" className="hover-lift">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Feel free to reach out:
                <a href="mailto:sanchitagrawal2023@gmail.com" className="ml-2 text-primary hover:underline">
                  sanchitagrawal2023@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

