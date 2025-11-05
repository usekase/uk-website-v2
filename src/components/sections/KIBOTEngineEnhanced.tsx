import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IconUsers, IconSearch, IconBulb, IconTool, IconHandStop } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function KIBOTEngineEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-primary">ARCH</span> Platform
          </h2>
          <p className="text-2xl text-center text-foreground font-semibold mb-12 max-w-4xl mx-auto">
            Our framework that guides every transformation through four disciplined stages.
          </p>

          {/* Four-stage ARCH boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto mb-12">
            <ArchStage
              title="Assessment"
              description="Identify high-impact opportunities"
              icon={<IconSearch className="w-8 h-8" />}
              index={0}
            />
            <ArchStage
              title="Re-imagine"
              description="Define the future state powered by AI"
              icon={<IconBulb className="w-8 h-8" />}
              index={1}
            />
            <ArchStage
              title="Construct"
              description="Build and operationalize AI solutions"
              icon={<IconTool className="w-8 h-8" />}
              index={2}
            />
            <ArchStage
              title="Hand-over"
              description="Transfer ownership and capability"
              icon={<IconHandStop className="w-8 h-8" />}
              index={3}
            />
          </div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            {/* Corner decorations - only visible on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconUsers className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Your Advantage</h3>
                  <p className="text-lg text-muted-foreground">
                    Each K-Solution shortens time-to-value and captures what works across industries — allowing us to deliver results faster while building your own foundation for future growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/platform">
              <Button size="lg">
                Explore ARCH →
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ArchStage = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        index === 0 && "lg:border-l border-border",
        "lg:border-b border-border"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 pointer-events-none" />

      <div className="mb-4 relative z-10 px-10">
        <div className="w-14 h-14 rounded-lg bg-gray-300 dark:bg-gray-600 group-hover/feature:bg-primary flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover/feature:text-white transition-colors duration-200">
          {icon}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200" />
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
            <span className="text-primary">{title.charAt(0)}</span>{title.slice(1)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};
