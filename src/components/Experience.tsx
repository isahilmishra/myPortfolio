import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Solvor",
      period: "Dec 2025 – Feb 2026",
      location: "Remote",
      description: [
        "Engineered and shipped 10+ backend REST APIs in Node.js and PostgreSQL for a quiz, mock-test, and live contest system used by competitive-exam students.",
        "Cut leaderboard/question-set query latency using Redis caching and session state management under concurrent load.",
        "Automated generation and validation of 100+ practice questions via an LLM-based pipeline; built Chart.js performance dashboards.",
      ],
    },
    {
      role: "Web Dev Lead",
      company: "SPARK IIIT Bhopal",
      period: "Sep 2025 – Aug 2026",
      location: "Bhopal, India",
      description: [
        "Led a team of 5+ developers building the club's web platforms in React.js, improving accessibility for 500+ students.",
        "Built and optimized 10+ responsive UI components, improving page performance and event-registration workflows.",
      ],
    },
  ];

  return (
    <Section id="experience" title="Experience" className="bg-card-bg/30">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border transform md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-6 w-3 h-3 bg-accent rounded-full transform md:-translate-x-1/2 shadow-[0_0_10px_var(--color-accent)]" />
              
              <div className="w-full md:w-1/2 flex justify-start md:px-8">
                <div className="glass p-8 rounded-2xl w-full hover:border-accent/50 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Briefcase size={64} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-accent mb-2">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-foreground/60 mb-6 font-medium">
                    <span>{exp.period}</span>
                    <span className="hidden sm:block w-1 h-1 bg-card-border rounded-full" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-foreground/80 flex items-start gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
