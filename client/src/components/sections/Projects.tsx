import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Learning Platform",
    description: "A comprehensive learning management system built with React and Node.js",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity app with real-time updates using WebSocket",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website using modern web technologies",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            My <span className="text-[#FF4D4D]">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#1A1A1A]/50 border-[#FF4D4D]/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF4D4D] hover:text-[#FF8080] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF4D4D] hover:text-[#FF8080] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
