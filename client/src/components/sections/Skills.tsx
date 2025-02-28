import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Data Structures", level: 75 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#121212]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            Technical <span className="text-[#FF4D4D]">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  <span className="text-[#FF8080]">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2 bg-[#1A1A1A]"
                  indicatorClassName="bg-[#FF4D4D]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
