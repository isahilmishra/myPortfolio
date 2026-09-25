import { Section } from "./Section";
import { Trophy, Star, Code2, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "1000+ Algorithmic Problems Solved",
      description: "Across Codeforces, CodeChef, LeetCode, and GeeksforGeeks.",
      icon: <Code2 size={32} />,
      link: "https://codolio.com/profile/sahil08mishra"
    },
    {
      title: "Codeforces Pupil",
      description: "Max rating 1200, global rank under 3000.",
      icon: <Trophy size={32} />
    },
    {
      title: "CodeChef 3-Star",
      description: "Max rating 1607.",
      icon: <Star size={32} />
    },
    {
      title: "Hackathon 3rd Rank",
      description: "Vector 1.0 Hackathon (HackerRank Campus Crew, IIIT Bhopal) out of 400+ participants.",
      icon: <Medal size={32} />
    }
  ];

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform group flex gap-6 items-center">
            <div className="p-4 bg-accent/10 text-accent rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
              {achievement.icon}
            </div>
            <div>
              {achievement.link ? (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold font-heading text-foreground mb-1 hover:text-accent transition-colors block">
                  {achievement.title}
                </a>
              ) : (
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                  {achievement.title}
                </h3>
              )}
              <p className="text-foreground/70 text-sm">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
