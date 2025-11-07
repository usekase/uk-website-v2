import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconUsers, IconSearch, IconBulb, IconTool, IconHandStop } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function UKPlatform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="pt-24 pb-12 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-primary">ARCH</span>: Our Platform for Transformation
          </h2>
          <p className="text-2xl text-center text-foreground font-semibold mb-6 max-w-4xl mx-auto">
            AI transformation fails when treated as a technical idea,<br />instead of a business system.
          </p>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            ARCH is Usekase's disciplined framework for turning ambition into measurable capability - guiding every project from discovery to ownership. It gives structure to innovation: validating value before investment, building only what matters, and ensuring your team can run and evolve the solution long after hand-over.
            <br /><br />
            That's how we make transformation repeatable, scalable, and self-sustaining.
          </p>

          {/* Four-stage ARCH boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto mb-12">
            <ArchStage
              title="Assessment"
              description="Identify and Validate Opportunity
We pinpoint where AI drives the most impact, aligning data, funding, and ROI before any build begins."
              icon={<IconSearch className="w-8 h-8" />}
              index={0}
            />
            <ArchStage
              title="Re-imagine"
              description="Design the AI-Enabled Future
Together we redesign key processes, select the right solutions, and plan how intelligence fits end-to-end on a solid technical base."
              icon={<IconBulb className="w-8 h-8" />}
              index={1}
            />
            <ArchStage
              title="Construct"
              description="Build and Prove in the Real World
Our experts deploy and operate live systems that deliver measurable gains and next-gen performance for your team."
              icon={<IconTool className="w-8 h-8" />}
              index={2}
            />
            <ArchStage
              title="Hand-over"
              description="Transfer Ownership and Capability
Once results are proven, we transfer tech, IP, and know-how - leaving you with a scalable, future-ready capability."
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
                    ARCH turns AI from aspiration into architecture - a repeatable system for building competitive advantage.
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
        <p className="text-md text-muted-foreground relative z-10 px-10 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};
