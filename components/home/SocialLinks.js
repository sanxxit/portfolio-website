import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/sanxxit",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sanchit-agrawal-54a8a01a5/",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/Sanchitagrawala",
      icon: <Twitter className="h-6 w-6" />,
    },
    {
      name: "Hashnode",
      url: "https://sanxxit.hashnode.dev/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 flex flex-col items-center space-y-6">
      <h2 className="text-4xl font-bold tracking-tight text-white">Connect With Me</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {socials.map((social) => (
          <Link href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95"
            >
              {social.icon}
              {social.name}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
