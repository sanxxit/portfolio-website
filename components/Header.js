"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Sanchit.
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <HoverCard key={item.path} openDelay={0}>
              <HoverCardTrigger asChild>
                <Link
                  href={item.path}
                  className={cn(
                    "relative text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.path
                      ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary after:content-['']"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="glass-effect w-auto">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {item.name === "Home" && "Back to homepage"}
                    {item.name === "Projects" && "View my featured projects"}
                    {item.name === "Blog" && "Read my latest articles"}
                    {item.name === "Resume" && "Check out my experience"}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mt-4 space-y-4 border-t border-border py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header

