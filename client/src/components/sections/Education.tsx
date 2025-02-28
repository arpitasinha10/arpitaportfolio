import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Book } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Galgotias University",
      period: "2023 - Present",
      icon: <GraduationCap className="w-6 h-6 text-[#FF4D4D]" />,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Previous University",
      period: "2020 - 2023",
      icon: <Book className="w-6 h-6 text-[#FF4D4D]" />,
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            My <span className="text-[#FF4D4D]">Education</span>
          </h2>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-[#1A1A1A]/50 border-[#FF4D4D]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1A1A1A] p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-gray-300 mb-1">{item.institution}</p>
                        <p className="text-sm text-[#FF8080]">{item.period}</p>
                      </div>
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
