import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export interface JobCardVerticalProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  delay?: number;
}

export function JobCardVertical({
  title,
  department,
  location,
  type,
  description,
  responsibilities,
  requirements,
  delay = 0,
}: JobCardVerticalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group h-full"
    >
      {/* Corner decorations - only visible on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors h-full flex flex-col">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-primary">{title}</span>
          </h3>
          <p className="text-sm font-semibold text-muted-foreground mb-1">
            {department} • {type}
          </p>
          <p className="text-xs text-muted-foreground mb-3">
            {location}
          </p>
        </div>

        <div className="flex-grow space-y-4">
          <p className="text-muted-foreground">
            {description}
          </p>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-foreground">
              You'll do:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {responsibilities.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-foreground">
              You have:
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {requirements.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 relative z-20">
          <a
            href={`mailto:hello@usekase.ai?subject=${encodeURIComponent(`Job Application: ${title}`)}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full border border-input bg-background hover:bg-secondary hover:text-secondary-foreground cursor-pointer text-center"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
