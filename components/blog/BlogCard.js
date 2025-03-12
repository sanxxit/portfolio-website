import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function BlogCard({ blog, featured = false }) {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy")
  }

  if (featured) {
    return (
      <Card className="group overflow-hidden glass-effect card-hover">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-72 md:h-auto md:w-1/2">
            <Image
              src={blog.coverImage || "/placeholder.svg?height=500&width=500"}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          </div>
          <div className="flex flex-col justify-between p-8 md:w-1/2">
            <div>
              <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{formatDate(blog.dateAdded)}</span>
                </div>
                {blog.readTime && (
                  <Badge variant="outline" className="flex items-center gap-1 opacity-70">
                    <Clock size={12} />
                    <span>{blog.readTime} min read</span>
                  </Badge>
                )}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                {blog.title}
              </h3>
              <p className="mb-6 text-muted-foreground">{blog.brief}</p>
            </div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={blog.url} target="_blank" rel="noopener noreferrer">
                  <Button className="group/btn relative overflow-hidden bg-primary px-6 py-3">
                    <span className="relative z-10 flex items-center gap-2">
                      Read Full Article <ExternalLink size={16} />
                    </span>
                    <div className="absolute inset-0 z-0 bg-background transition-transform duration-300 group-hover/btn:translate-y-full" />
                  </Button>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="glass-effect w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{blog.title}</h4>
                  <p className="text-sm text-muted-foreground">Click to read the full article on Hashnode</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group relative overflow-hidden glass-effect card-hover">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.coverImage || "/placeholder.svg?height=300&width=500"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="relative space-y-4 p-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{formatDate(blog.dateAdded)}</span>
          </div>
          {blog.readTime && (
            <Badge variant="outline" className="flex items-center gap-1 opacity-70">
              <Clock size={12} />
              <span>{blog.readTime} min read</span>
            </Badge>
          )}
        </div>
        <h3 className="line-clamp-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {blog.title}
        </h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{blog.brief}</p>
      </CardContent>
      <CardFooter className="relative border-t border-border/10 p-6">
        <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="ghost" className="w-full gap-2 hover:bg-primary hover:text-background">
            Read Article <ExternalLink size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

