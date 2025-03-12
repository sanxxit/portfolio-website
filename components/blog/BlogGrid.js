"use client"

import { useState, useEffect } from "react"
import BlogCard from "./BlogCard"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Fetching blogs...")
        const response = await fetch("/api/blogs")
        console.log("Response status:", response.status)
        
        const data = await response.json()
        console.log("Response data:", data)

        // Check for error in response data first
        if (data.error) {
          throw new Error(data.error)
        }

        // Check response status after parsing data
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        setBlogs(data)
        setError(null)
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (isLoading) {
    return (
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/doodles/dots.svg')] opacity-5" />
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/doodles/error.svg')] opacity-5" />
        </div>
        <Alert variant="destructive" className="relative z-10 mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            <br />
            <span className="text-sm opacity-75">
              Please check your Hashnode blog URL (sanxxit.hashnode.dev) and make sure it exists and is accessible.
            </span>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="relative min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/doodles/empty.svg')] opacity-5" />
        </div>
        <div className="relative z-10 py-16 text-center">
          <h3 className="mb-2 text-xl font-medium">No blog posts found</h3>
          <p className="text-muted-foreground">
            No posts found on sanxxit.hashnode.dev. Make sure you have published some posts on your Hashnode blog.
          </p>
        </div>
      </div>
    )
  }

  // Create a featured section with the latest blog
  const featuredBlog = blogs[0]
  const remainingBlogs = blogs.slice(1)

  return (
    <div className="relative space-y-16">
      {/* Background Doodles */}
      <div className="fixed inset-0 z-0">
        <div className="h-full w-full bg-[url('/doodles/grid.svg')] opacity-[0.02]" />
      </div>
      
      {/* Floating Doodles */}
      <div className="pointer-events-none absolute -left-4 top-20 z-0 h-40 w-40 bg-[url('/doodles/spiral.svg')] bg-contain bg-center bg-no-repeat opacity-[0.03]" />
      <div className="pointer-events-none absolute -right-4 top-60 z-0 h-40 w-40 bg-[url('/doodles/squiggle.svg')] bg-contain bg-center bg-no-repeat opacity-[0.03]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Featured Blog */}
        {featuredBlog && (
          <div className="mb-16">
            <h2 className="relative mb-8 text-3xl font-bold">
              Featured Post
              <div className="absolute -left-6 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-primary" />
            </h2>
            <BlogCard blog={featuredBlog} featured={true} />
          </div>
        )}

        {/* Remaining Blogs */}
        <div>
          <h2 className="relative mb-8 text-3xl font-bold">
            Latest Posts
            <div className="absolute -left-6 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-primary" />
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

