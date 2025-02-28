import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#121212]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            About <span className="text-[#FF4D4D]">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-[#1A1A1A]/50 border-[#FF4D4D]/20">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  I am a highly motivated Master's student with a passion for technology
                  and continuous learning. Currently pursuing my MCA from Galgotias University,
                  I combine strong analytical skills with creativity to solve complex problems.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  My journey in technology began with my BCA degree, where I developed
                  a strong foundation in computer science. Now, as an MCA student,
                  I'm expanding my knowledge and exploring new technologies.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Problem Solving", value: "Analytical Thinking" },
                { label: "Quick Learning", value: "Adaptable" },
                { label: "Team Player", value: "Collaborative" },
                { label: "Creative", value: "Innovative Solutions" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1A1A1A]/30 p-4 rounded-lg border border-[#FF4D4D]/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-[#FF4D4D] font-medium mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-300">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
