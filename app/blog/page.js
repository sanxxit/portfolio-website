// Fix the import path to point to the correct location
import BlogGrid from "@/components/blog/BlogGrid"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, ideas, and insights on backend development, AI, and more. Check out my latest articles from
          Hashnode.
        </p>
      </div>
      <BlogGrid />
    </div>
  )
}

