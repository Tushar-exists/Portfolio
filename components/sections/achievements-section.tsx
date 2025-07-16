// components/achievements-section.tsx (or wherever your achievements array is defined)
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Trophy } from "lucide-react"; // Removed GraduationCap as it was unused

type Achievement = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    title: "Logistics & Hospitality Coordinator – YUVAAN Literature and Film Fest",
    description:
      "Successfully coordinated logistics and hospitality for Yuvaan, India's Biggest Youth Literature and Film Fest, attracting 100,000 to 150,000 students from Delhi and NCR.",
    icon: <Trophy className="w-5 h-5" color="#F59E0B" />,
  },
  {
    title: "Corporate Coordinator – IEEE Delhi Technological University",
    description:
      "Secured multiple sponsorships for Hackathons and TechWeek, including monetary and in-kind support through formal MOUs, significantly enhancing event success.",
    icon: <Trophy className="w-5 h-5" color="#F59E0B" />,
  },
  {
    title: "Top 6 Percentile – JEE Mains 2022",
    description:
      "Ranked within the Top 6 Percentile in JEE Mains 2022, outperforming 1 Million+ candidates nationally.",
    icon: <Trophy className="w-5 h-5" color="#F59E0B" />,
  },
  {
    title: "All India Rank 25 – KIIT Entrance Exam",
    description:
      "Ranked 25th Nationally (97.89 Percentile) in KIITEE 2022, a testament to exceptional merit.",
    icon: <Trophy className="w-5 h-5" color="#F59E0B" />,
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Achievements"
          icon={<Trophy size={14} color="#22C55E" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">
              Highlights from My Journey
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
              Recognitions that reflect my dedication to learning and performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full">
        {achievements.map((item, index) => (
          <SpotlightCard
            key={index}
            gradientColor="rgba(100, 116, 139, 0.50)"
            lightGradientColor="rgba(8, 9, 10, 0.2)"
            spotlightSize={350}
            glowEffect={true}
            glowSize={150}
            glowOpacity={0.15}
            className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300"
          >
            <div className="flex flex-col xs:flex-row items-start gap-4">
              <div className="flex-shrink-0 p-2 rounded-md bg-[#f4f4f5] dark:bg-[#1f1f1f]">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#08090a] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[#525252] dark:text-[#D4D4D8] text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
