import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CaseStudyCardProps {
  title: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  slug?: string;
  className?: string;
}

export function CaseStudyCard({
  title,
  industry,
  image,
  challenge,
  solution,
  outcomes,
  className,
}: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
          isHovered
            ? "h-auto min-h-[200px] border-primary shadow-lg shadow-primary/20 bg-primary/5"
            : "h-32 border-border hover:border-primary/50"
        )}
      >
        {/* Corner brackets that appear on hover */}
        {isHovered && (
          <>
            <div className="absolute top-3 left-3 w-6 h-6 z-10">
              <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
              <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
            </div>
            <div className="absolute bottom-3 right-3 w-6 h-6 z-10">
              <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
              <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
            </div>
          </>
        )}

        {/* Content - Horizontal Layout */}
        <div className="flex h-full">
          {/* Left Side - Image */}
          <div className="relative w-48 md:w-64 flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={industry}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
            <div className={cn(
              "absolute inset-0 transition-colors duration-300",
              isHovered ? "bg-primary/5" : "bg-foreground/10"
            )} />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col flex-1 px-6 md:px-8 py-6">
            {/* Header: Industry & Title */}
            <div className="flex-1 min-w-0 mb-3">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {industry}
              </div>
              <h3
                className={cn(
                  "font-bold transition-colors duration-300 text-lg md:text-xl",
                  isHovered ? "text-primary" : "text-foreground"
                )}
              >
                {title}
              </h3>
            </div>

            {/* Details visible on hover */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="space-y-2.5 text-sm mt-2"
              >
                {/* Challenge */}
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[75px] flex-shrink-0">
                    Challenge:
                  </span>
                  <span className="text-foreground/90">{challenge}</span>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <span className="font-semibold text-secondary min-w-[75px] flex-shrink-0">
                    Solution:
                  </span>
                  <span className="text-foreground/90">{solution}</span>
                </div>

                {/* Outcomes */}
                <div className="flex gap-3">
                  <span className="font-semibold text-accent min-w-[75px] flex-shrink-0">
                    Results:
                  </span>
                  <div className="flex-1">
                    <span className="text-foreground/90">
                      {outcomes.join(" • ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Collapsed state teaser */}
            {!isHovered && (
              <p className="text-sm text-muted-foreground line-clamp-1">
                {challenge}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
