import { Section } from "./Section";
import { GraduationCap, Award, Calendar } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-foreground/80 text-lg">
          <p>
            I am a Full Stack Developer currently pursuing my B.Tech in Electronics & Communication Engineering at IIIT Bhopal. I am passionate about building scalable, user-centric web applications and continuously learning new technologies.
          </p>
          <p>
            My journey in software development has equipped me with a strong foundation in data structures, algorithms, and modern web frameworks. I thrive in environments that challenge me to solve complex problems and deliver impactful solutions.
          </p>
          
          <div className="pt-6 border-t border-card-border space-y-4">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Education</h3>
            
            <div className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -z-10 group-hover:bg-accent/20 transition-colors" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 text-accent rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">B.Tech in ECE</h4>
                  <p className="text-foreground/70 font-medium">IIIT Bhopal</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-foreground/60">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Sep 2023 – Present</span>
                    <span className="flex items-center gap-1"><Award size={14} /> CGPA: 7.8/10.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card-border text-foreground/70 rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">Class XII Science (PCM)</h4>
                  <p className="text-foreground/70 font-medium">Trident Public School, Muzaffarpur, Bihar (CBSE)</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-foreground/60">
                    <span className="flex items-center gap-1"><Calendar size={14} /> May 2022</span>
                    <span className="flex items-center gap-1"><Award size={14} /> 92.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-card-border">
            <Image
              src="/profile.jpg"
              alt="Sahil Raj"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
