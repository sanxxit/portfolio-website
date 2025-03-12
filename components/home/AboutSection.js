import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const skills = [
    "Node.js",
    "Python",
    "JavaScript",
    "Express.js",
    "AI",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Linux",
    "React.js",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "Matplotlib",
  ]

  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a prefinal year Computer Science student with a passion for backend development, AI, and building
              scalable systems. I enjoy solving complex problems and creating efficient solutions.
            </p>
            <p className="text-muted-foreground">
              I've worked on various projects including CampusBoard, CollabNotes, and Predictive Maintenance Analysis.
              I'm always looking to learn new technologies and improve my skills.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

