import { Section } from "./Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "Recruit AI",
      description: "Intelligent Hiring & Candidate Matching Platform automating resume parsing, semantic candidate-to-job matching, and pipeline management for 100+ candidates. Achieved sub-second query latency using pgvector embeddings and Groq LLM.",
      stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
      github: "https://github.com/isahilmishra",
      live: "#",
      featured: true,
    },
    {
      title: "UserPayout",
      description: "Transaction-Safe Affiliate Payout System featuring an append-only ledger computing balances via SUM(amount), full audit trail, and database-level UNIQUE constraints preventing double-payouts atomically. Implemented a 24-hour withdrawal cooldown.",
      stack: ["Node.js", "Express", "SQLite", "Jest"],
      github: "https://github.com/isahilmishra",
    },
    {
      title: "StayHub",
      description: "Airbnb-inspired hotel booking platform with role-based access control, bcrypt authentication, and 17+ RESTful endpoints. Built full listing lifecycle with Multer file uploads and favorites management via joined MongoDB queries.",
      stack: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind CSS"],
      github: "https://github.com/isahilmishra/StayHub",
      live: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured eCommerce platform with product catalogs, shopping cart functionality, user authentication, and secure checkout processing. Built with modern web technologies for a responsive shopping experience.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      github: "https://github.com/isahilmishra/Ecommerce",
      live: "#",
    },
    {
      title: "Loan Management System",
      description: "Comprehensive Loan Management System (LMS) designed to streamline loan applications, approvals, and EMI tracking. Features role-based dashboards for administrators and borrowers.",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/isahilmishra/Loan-Management-System_LMS",
      live: "#",
    }
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 text-accent rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-card-border/50 text-foreground/80 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
