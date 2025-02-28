import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.img
          src="/arpita.jpg"
          alt="Arpita"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-2 border-[#FF4D4D]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          className="text-4xl sm:text-6xl font-bold font-poppins mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-[#FF4D4D]">Arpita</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          MCA Student & Technology Enthusiast
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            asChild
            className="bg-[#FF4D4D] hover:bg-[#FF8080] text-white"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </section>
  );
}