import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface JobListingCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  image: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  className?: string;
}

export function JobListingCard({
  title,
  department,
  location,
  type,
  image,
  description,
  responsibilities,
  requirements,
  className,
}: JobListingCardProps) {
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
            ? "h-auto min-h-[200px] md:min-h-[200px] border-primary shadow-lg shadow-primary/20 bg-primary/5"
            : "h-auto md:h-32 border-border hover:border-primary/50"
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

        {/* Content - Vertical on mobile, Horizontal on desktop */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Top/Left Side - Image */}
          <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-card/20" />
            <div className={cn(
              "absolute inset-0 transition-colors duration-300",
              isHovered ? "bg-primary/5" : "bg-foreground/10"
            )} />
          </div>

          {/* Bottom/Right Side - Content */}
          <div className="flex flex-col flex-1 px-4 md:px-6 lg:px-8 py-4 md:py-6">
            {/* Header: Department & Title */}
            <div className="flex-1 min-w-0 mb-3">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {department} • {type}
              </div>
              <h3
                className={cn(
                  "font-bold transition-colors duration-300 text-lg md:text-xl",
                  isHovered ? "text-primary" : "text-foreground"
                )}
              >
                {title}
              </h3>
              <div className="text-xs text-muted-foreground mt-1">
                {location}
              </div>
            </div>

            {/* Details visible on hover */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="space-y-2.5 text-sm mt-2"
              >
                {/* Description */}
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[100px] flex-shrink-0">
                    About:
                  </span>
                  <span className="text-foreground/90">{description}</span>
                </div>

                {/* Key Responsibilities */}
                <div className="flex gap-3">
                  <span className="font-semibold text-secondary min-w-[100px] flex-shrink-0">
                    You'll do:
                  </span>
                  <div className="flex-1">
                    <span className="text-foreground/90">
                      {responsibilities.slice(0, 2).join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Key Requirements */}
                <div className="flex gap-3">
                  <span className="font-semibold text-accent min-w-[100px] flex-shrink-0">
                    You have:
                  </span>
                  <div className="flex-1">
                    <span className="text-foreground/90">
                      {requirements.slice(0, 2).join(" • ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Collapsed state teaser */}
            {!isHovered && (
              <p className="text-sm text-muted-foreground line-clamp-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
