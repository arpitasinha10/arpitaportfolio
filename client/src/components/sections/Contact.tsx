import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "arpitasinha660@gmail.com"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 9693571972"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Greater Noida, India"
  }
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com",
    label: "Twitter"
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Simulated form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#121212]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">
            Get in <span className="text-[#FF4D4D]">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="bg-[#1A1A1A]/50 border-[#FF4D4D]/20">
                <CardContent className="p-6 space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-[#FF4D4D]/10 p-3 rounded-lg text-[#FF4D4D]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-400">{info.label}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-3 rounded-lg text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-white transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <Card className="bg-[#1A1A1A]/50 border-[#FF4D4D]/20">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-[#121212] border-[#FF4D4D]/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              className="bg-[#121212] border-[#FF4D4D]/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="bg-[#121212] border-[#FF4D4D]/20 min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#FF4D4D] hover:bg-[#FF8080]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}