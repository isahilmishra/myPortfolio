"use client";

import { Section } from "./Section";
import { Send, Mail, Phone, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" className="bg-card-bg/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Contact Information</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-foreground/80">
              <div className="p-3 bg-card-border/50 rounded-xl text-accent">
                <Mail size={20} />
              </div>
              <a href="mailto:sahilrajiiitb@gmail.com" className="hover:text-accent transition-colors font-medium">
                sahilrajiiitb@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4 text-foreground/80">
              <div className="p-3 bg-card-border/50 rounded-xl text-accent">
                <Phone size={20} />
              </div>
              <a href="tel:+919508221184" className="hover:text-accent transition-colors font-medium">
                +91 9508221184
              </a>
            </li>
          </ul>
          
          <h3 className="text-2xl font-bold font-heading text-foreground mt-12 mb-6">Socials</h3>
          <div className="flex gap-4">
            <a href="https://github.com/isahilmishra" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-border/50 rounded-xl text-foreground hover:text-accent hover:bg-accent/10 transition-all">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sahil-raj-3593992b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-border/50 rounded-xl text-foreground hover:text-accent hover:bg-accent/10 transition-all">
              <FaLinkedin size={24} />
            </a>
            <a href="https://codolio.com/profile/sahil08mishra" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-border/50 rounded-xl text-foreground hover:text-accent hover:bg-accent/10 transition-all">
              <Code2 size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex-1">
          <form className="glass p-8 rounded-2xl flex flex-col gap-4" action="https://formspree.io/f/xbjnrvnq" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
              <textarea id="message" name="message" required rows={4} className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Hello Sahil..."></textarea>
            </div>
            <button type="submit" className="mt-2 w-full py-3 px-6 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
