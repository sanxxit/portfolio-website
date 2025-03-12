"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GitHubContributions() {
  const [contributions, setContributions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, you would fetch this data from GitHub API
    // For now, we'll generate mock data based on the screenshot
    const generateMockData = () => {
      const days = 365
      const mockData = []

      for (let i = 0; i < days; i++) {
        // Generate random contribution count (0-4)
        const count = Math.floor(Math.random() * 5)
        mockData.push({
          date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
          count,
        })
      }

      return mockData
    }

    // Simulate API call
    setTimeout(() => {
      setContributions(generateMockData())
      setIsLoading(false)
    }, 1000)
  }, [])

  const getContributionColor = (count) => {
    if (count === 0) return "bg-secondary"
    if (count === 1) return "bg-primary/30"
    if (count === 2) return "bg-primary/50"
    if (count === 3) return "bg-primary/70"
    return "bg-primary"
  }

  const formatMonth = (date) => {
    return date.toLocaleString("default", { month: "short" })
  }

  // Group contributions by month for labels
  const months = contributions.reduce((acc, contribution, index) => {
    const month = formatMonth(contribution.date)
    if (index === 0 || month !== formatMonth(contributions[index - 1].date)) {
      acc.push({
        month,
        index,
      })
    }
    return acc
  }, [])

  // Group contributions by day of week for labels
  const daysOfWeek = ["Mon", "Wed", "Fri"]

  return (
    <section className="py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">GitHub Contributions</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="h-40 flex items-center justify-center">
              <p>Loading contributions...</p>
            </div>
          ) : (
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[800px]">
                <div className="flex mb-2">
                  <div className="w-10"></div>
                  <div className="flex-1 flex">
                    {months.map((month, i) => (
                      <div
                        key={i}
                        className="text-xs text-muted-foreground"
                        style={{
                          position: "relative",
                          left: `${month.index * (100 / contributions.length)}%`,
                        }}
                      >
                        {month.month}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex">
                  <div className="w-10 flex flex-col justify-between py-1">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="text-xs text-muted-foreground">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 contribution-graph">
                    {contributions.map((contribution, i) => (
                      <div
                        key={i}
                        className={`contribution-day ${getContributionColor(contribution.count)}`}
                        title={`${contribution.date.toDateString()}: ${contribution.count} contributions`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex mt-2 justify-end items-center gap-2">
                  <span className="text-xs text-muted-foreground">Less</span>
                  <div className="contribution-day bg-secondary"></div>
                  <div className="contribution-day bg-primary/30"></div>
                  <div className="contribution-day bg-primary/50"></div>
                  <div className="contribution-day bg-primary/70"></div>
                  <div className="contribution-day bg-primary"></div>
                  <span className="text-xs text-muted-foreground">More</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

