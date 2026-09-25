import { Section } from "./Section";
import Image from "next/image";

export function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["C", "CPP", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks",
      skills: ["React", "NextJS", "ExpressJS", "Redux"],
    },
    {
      title: "Technologies",
      skills: ["MongoDB", "PostgreSQL", "SQLite", "NodeJS", "Redis", "TailwindCSS", "Bootstrap"],
    },
    {
      title: "Dev Tools",
      skills: ["VSCode", "Git", "Github", "Docker", "Vercel", "Netlify"],
    },
  ];

  return (
    <Section id="skills" title="Technical Skills" className="bg-card-bg/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="glass p-8 rounded-2xl hover:border-accent/50 transition-colors">
            <h3 className="text-xl font-bold font-heading text-foreground mb-6 text-center md:text-left">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {category.skills.map((skill) => (
                <div key={skill} className="flex flex-col items-center gap-2 group">
                  <div className="w-14 h-14 bg-card-border/30 rounded-xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/5 dark:bg-white/10 backdrop-blur-md border border-white/10 relative">
                    <Image 
                      src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}`} 
                      alt={skill}
                      fill
                      className="p-2 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs text-foreground/70 font-medium group-hover:text-accent transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* AI Tools */}
        <div className="glass p-8 rounded-2xl hover:border-accent/50 transition-colors md:col-span-2">
          <h3 className="text-xl font-bold font-heading text-foreground mb-6 text-center">
            AI & Integrations
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["GitHub Copilot", "Claude", "ChatGPT", "Antigravity IDE", "Groq", "Llama"].map((tool) => (
              <span key={tool} className="px-6 py-3 bg-card-border/50 text-foreground font-medium rounded-full border border-card-border hover:border-accent/50 hover:text-accent transition-all">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
