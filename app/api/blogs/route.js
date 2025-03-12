import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Updated Hashnode GraphQL API query with correct field names
    const query = `
      query Publication {
        publication(host: "sanxxit.hashnode.dev") {
          isTeam
          title
          posts(first: 20) {
            edges {
              node {
                title
                brief
                slug
                publishedAt
                coverImage {
                  url
                }
                readTimeInMinutes
              }
            }
          }
        }
      }
    `

    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Portfolio Website",
      },
      body: JSON.stringify({
        query,
      }),
      cache: 'no-store'
    })

    console.log("Hashnode API Response Status:", response.status)
    
    const data = await response.json()
    console.log("Hashnode API Response:", JSON.stringify(data, null, 2))

    // Check for GraphQL errors first
    if (data.errors) {
      console.error("Hashnode API Errors:", data.errors)
      return NextResponse.json(
        { error: data.errors[0].message || "Error from Hashnode API" },
        { status: 400 }
      )
    }

    // Check for valid response structure
    if (!data.data?.publication?.posts?.edges) {
      console.error("Invalid API Response Structure:", data)
      return NextResponse.json(
        { error: "No blog posts found. Please verify your Hashnode blog URL." },
        { status: 404 }
      )
    }

    // Transform the data to a more usable format
    const posts = data.data.publication.posts.edges.map((edge) => {
      const post = edge.node
      return {
        id: post.slug,
        title: post.title,
        brief: post.brief,
        coverImage: post.coverImage?.url || "/placeholder.svg?height=300&width=500",
        dateAdded: post.publishedAt, // Map publishedAt to dateAdded for compatibility
        slug: post.slug,
        readTime: post.readTimeInMinutes,
        url: `https://sanxxit.hashnode.dev/${post.slug}`,
      }
    })

    if (posts.length === 0) {
      return NextResponse.json(
        { error: "No blog posts found on your Hashnode blog." },
        { status: 404 }
      )
    }

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    
    return NextResponse.json(
      { 
        error: "Failed to fetch blog posts. Please try again later.",
        details: error.message
      },
      { status: 500 }
    )
  }
}

