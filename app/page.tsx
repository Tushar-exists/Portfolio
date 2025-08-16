import { IntroSection } from "@/components/sections/intro-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
