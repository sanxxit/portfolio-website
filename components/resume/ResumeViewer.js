"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export default function ResumeViewer() {
  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    alert("In a real implementation, this would download your resume PDF.")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={handleDownload} className="gap-2">
          <Download size={16} /> Download PDF
        </Button>
      </div>

      <Card className="p-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center border-b pb-6">
            <h2 className="text-3xl font-bold">SANCHIT AGRAWAL</h2>
            <p className="text-xl mt-2">Software Engineering Intern</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <span>sanchitagrawal2023@gmail.com</span>
              <span>LinkedIn</span>
              <span>Mathura, India</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-4">EDUCATION</h3>
            <div className="space-y-4">
              <div className="flex justify-between flex-wrap">
                <div>
                  <p className="font-medium">B.Tech. in Computer Science and Engineering</p>
                  <p>GLA University</p>
                </div>
                <div className="text-right">
                  <p>08/2022 - 05/2026</p>
                  <p>Mathura, India</p>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <p className="font-medium">Intermediate CBSE Board</p>
                  <p>Shri ji baba SVM</p>
                </div>
                <div className="text-right">
                  <p>84%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold mb-4">EXPERIENCE</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between flex-wrap mb-2">
                  <div>
                    <p className="font-medium">Software Engineering Intern</p>
                    <p>Solytics Partners</p>
                  </div>
                  <div className="text-right">
                    <p>11/2024 - 12/2024</p>
                    <p>Remote</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Developed a full-stack application using React, Node.js, and MongoDB, reducing note-sharing time by
                    40%.
                  </li>
                  <li>
                    Deployed using Docker on Digital Ocean, achieving 40% faster deployments through an automated CI/CD
                    pipeline via GitHub Actions.
                  </li>
                  <li>Implemented secure login with OTP, reducing unauthorized access by 25%.</li>
                  <li>
                    Optimized real-time update delivery, reducing latency from 300ms to 100ms, ensuring instant
                    notifications for students.
                  </li>
                  <li>
                    Integrated WebSocket-based real-time collaboration, enabling 100+ concurrent users with zero lag.
                  </li>
                  <li>
                    Optimized backend performance, reducing API response time from 500ms to 150ms for a 3.3x speed
                    improvement.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PROJECTS</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between flex-wrap mb-2">
                  <p className="font-medium">CampusBoard</p>
                  <p>11/2023 - 12/2023</p>
                </div>
                <p className="mb-2">A lightweight noticeboard platform for students to access important updates.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Built a noticeboard web application for campus students, handling over 1,500 daily active users.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between flex-wrap mb-2">
                  <p className="font-medium">CollabNotes</p>
                  <p>11/2024 - 12/2024</p>
                </div>
                <p className="mb-2">A collaborative online note-taking platform with real-time editing and sharing.</p>
              </div>
              <div>
                <div className="flex justify-between flex-wrap mb-2">
                  <p className="font-medium">Predictive Maintenance Analysis</p>
                  <p>08/2024 - 09/2024</p>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Processed 1M+ telemetry records to predict failures using historical machine data</li>
                  <li>Reduced downtime by 30% through data-driven failure pattern analysis.</li>
                  <li>Leveraged pandas, Matplotlib, and failure logs for real-time anomaly detection.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CERTIFICATIONS</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>DEEP LEARNING AND NEURAL NETWORKS by deeplearning.ai</li>
              <li>SQL BASED CERTIFICATION BY SKILLCRED.</li>
            </ul>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-4">KEY ACHIEVEMENTS</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Won Bronze (Top 3/200) at IBM hackathon 2023 for developing an LSTM-based Predictive Maintenance System,
                improving failure prediction by 30%.
              </li>
              <li>1st Rank in Technical Blog Writing in TECHNAVYA 2025 (Check out my blog at sanxxit.hashnode.dev)</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "NumPy",
                "Pandas",
                "Scikit-Learn",
                "Docker",
                "Git",
                "Github",
                "Github Actions",
                "CI/CD",
                "JavaScript",
                "Linux",
                "Linux administration",
                "MongoDB",
                "MySQL",
                "node.js",
                "Open Source",
                "P2P",
                "postgresql",
                "ReactJS",
                "FastAPI",
                "Seaborn",
                "JupyterNotebooks",
                "OpenCV",
                "Matplotlib",
              ].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="flex flex-wrap gap-4">
              <p>github- https://github.com/sanxxit</p>
              <p>tech blog- https://sanxxit.hashnode.dev/</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

