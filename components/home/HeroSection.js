import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-10 md:py-20">
      <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Sanchit Agrawal</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">Computer Artist | AI Enthusiast</p>
        <p className="text-lg text-muted-foreground">
          Prefinal year Computer Science student passionate about backend development, AI, and building scalable
          systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects">
            <Button className="gap-4">
              View Projects <ArrowRight size={18} />
            </Button>
          </Link>
          <Link href="/resume">
            <Button variant="outline">Resume</Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
        <Image
         src="/prof.png" 
         alt="Sanchit Agrawal"
          fill
          className="object-cover"
      priority
      />

        </div>
      </div>
    </section>
  )
}

