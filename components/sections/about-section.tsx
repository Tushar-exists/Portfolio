import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Learn about my journey, experience, and what drives me as a
            developer.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey From Curiosity to Creation
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              My tech journey began with a YouTube video that sparked a curiosity for how software is built. I dove into web development, quickly moving beyond simple pages to architecting the kind of complex, full-stack applications I saw professionals create. What started as an exploration has become a passion for engineering solutions that are both powerful and user-friendly.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I believe the best products are born from a blend of robust engineering and intuitive design. This principle guides my work, whether I&apos;m architecting a real-time AI application or engineering a scalable backend service. My focus is always on writing clean, efficient code to solve tangible problems.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond the IDE
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Away from the keyboard, I enjoy playing and watching cricket, following football, and diving into the world of Anime. These hobbies fuel my creativity and provide a fresh perspective on problem-solving.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I am also committed to sharing my knowledge and growing with the tech community. I actively contribute to open-source projects and enjoy breaking down complex topics on my technical blog.
            </p>
          </div>

        </div>
      </SpotlightCard>
    </section>
  );
}
