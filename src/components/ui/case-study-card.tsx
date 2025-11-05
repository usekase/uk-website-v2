import { motion } from "framer-motion";
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
  isExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
}

export function CaseStudyCard({
  title,
  industry,
  image,
  challenge,
  solution,
  outcomes,
  className,
  isExpanded = false,
  onExpand,
  onCollapse,
}: CaseStudyCardProps) {
  // Parse the first outcome to separate stat from description
  const parseOutcome = (outcome: string) => {
    // Match patterns like "+35% throughput" or "–40% inventory waste"
    const match = outcome.match(/^([+–-]\d+%)\s+(.+)$/);
    if (match) {
      return { stat: match[1], description: match[2] };
    }
    return { stat: outcome, description: "" };
  };

  const firstOutcome = outcomes[0] ? parseOutcome(outcomes[0]) : null;

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => onExpand?.()}
      onMouseLeave={() => onCollapse?.()}
    >
      <div
        className={cn(
          "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
          isExpanded
            ? "h-auto min-h-[200px] md:min-h-[200px] border-primary shadow-lg shadow-primary/20 bg-primary/5"
            : "h-auto md:h-32 border-border hover:border-primary/50"
        )}
      >
        {/* Corner brackets that appear on hover */}
        {isExpanded && (
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

        {/* Content - Vertical on mobile, Horizontal on desktop */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Top/Left Side - Image */}
          <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={industry}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-card/20" />
            <div className={cn(
              "absolute inset-0 transition-colors duration-300",
              isExpanded ? "bg-primary/5" : "bg-foreground/10"
            )} />
          </div>

          {/* Stats Column - Right of Image */}
          {firstOutcome && (
            <div className="flex items-center justify-center md:w-32 lg:w-40 flex-shrink-0 bg-card/50 backdrop-blur-sm border-r border-border/50 px-4 py-4 md:py-0">
              <div className="text-center">
                <div className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300",
                  isExpanded ? "text-primary" : "text-foreground"
                )}>
                  {firstOutcome.stat}
                </div>
                {firstOutcome.description && (
                  <div className="text-xs md:text-sm text-muted-foreground mt-1 capitalize">
                    {firstOutcome.description}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bottom/Right Side - Content */}
          <div className="flex flex-col flex-1 px-4 md:px-6 lg:px-8 py-4 md:py-6">
            {/* Header: Industry & Title */}
            <div className="flex-1 min-w-0 mb-3">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {industry}
              </div>
              <h3
                className={cn(
                  "font-bold transition-colors duration-300 text-lg md:text-xl",
                  isExpanded ? "text-primary" : "text-foreground"
                )}
              >
                {industry === "Financial Services"
                  ? "Next-Gen Underwriting AI"
                  : industry === "Manufacturing"
                  ? "Supply Chain Re-architecture"
                  : industry === "Video Production"
                  ? "AI-Powered Video Production"
                  : title}
              </h3>
            </div>

            {/* Details visible on hover */}
            {isExpanded && (
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
            {!isExpanded && (
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
