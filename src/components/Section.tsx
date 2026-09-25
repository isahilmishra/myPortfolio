"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
