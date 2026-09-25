"use client";

import { motion, Variants } from "framer-motion";
import { Mail, FileText, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { TypewriterText } from "./TypewriterText";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[100px] opacity-30 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight"
          >
            Hi, I&apos;m <span className="text-accent">Sahil Raj</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="h-14 mb-6">
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              <TypewriterText text="Full Stack Developer — Building scalable systems, one commit at a time." delay={600} />
            </p>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg text-foreground/60 mb-8 max-w-xl mx-auto md:mx-0">
            I specialize in crafting robust backend architectures and dynamic front-end experiences. Passionate about solving complex problems and turning ideas into performant software.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Aao-fFmPvNlrr8WI0ZhCEqjYrHS6SW33/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-card-border bg-card-bg hover:bg-card-border/50 text-foreground font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-5">
            <a href="https://github.com/isahilmishra" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-accent transition-colors" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sahil-raj-3593992b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-accent transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:sahilrajiiitb@gmail.com" className="p-2 text-foreground/60 hover:text-accent transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://codolio.com/profile/sahil08mishra" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-accent transition-colors" aria-label="Codolio">
              <Code2 size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-accent/30 bg-card-bg shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full bg-accent-glow animate-pulse" style={{ filter: 'blur(20px)', zIndex: -1 }}></div>
            <Image
              src="/profile.jpg"
              alt="Sahil Raj"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover rounded-full p-1"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
