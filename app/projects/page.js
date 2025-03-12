import ProjectGrid from "@/components/projects/ProjectGrid"

export default function ProjectsPage() {
  // Sample project data - in a real app, this could come from a database or CMS
  const projects = [
    {
      id: 1,
      title: "CampusBoard",
      description: "A lightweight noticeboard platform for students to access important updates.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["React", "Node.js", "MongoDB", "WebSocket"],
      demoUrl: "#",
      githubUrl: "https://github.com/sanxxit",
      highlights: [
        "Built a noticeboard web application for campus students, handling over 1,500 daily active users.",
        "Optimized real-time update delivery, reducing latency from 300ms to 100ms.",
        "Implemented secure login with OTP, reducing unauthorized access by 25%.",
      ],
    },
    {
      id: 2,
      title: "CollabNotes",
      description: "A collaborative online note-taking platform with real-time editing and sharing.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["React", "Node.js", "MongoDB", "Docker", "GitHub Actions"],
      demoUrl: "#",
      githubUrl: "https://github.com/sanxxit",
      highlights: [
        "Developed a full-stack application using React, Node.js, and MongoDB, reducing note-sharing time by 40%.",
        "Deployed using Docker on Digital Ocean, achieving 40% faster deployments through an automated CI/CD pipeline.",
        "Integrated WebSocket-based real-time collaboration, enabling 100+ concurrent users with zero lag.",
      ],
    },
    {
      id: 3,
      title: "Predictive Maintenance Analysis",
      description: "LSTM-based system for predicting machine failures before they occur.",
      image: "/placeholder.svg?height=300&width=500",
      techStack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      demoUrl: "#",
      githubUrl: "https://github.com/sanxxit",
      highlights: [
        "Processed 1M+ telemetry records to predict failures using historical machine data.",
        "Reduced downtime by 30% through data-driven failure pattern analysis.",
        "Won Bronze (Top 3/200) at IBM hackathon 2023.",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectGrid projects={projects} />
    </div>
  )
}

