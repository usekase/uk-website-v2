import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconTrendingUp,
  IconHandStop,
  IconAward,
  IconKey,
} from "@tabler/icons-react";

export default function ValuePropositionEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Measurable Value, Fast",
      description:
        "Live in production within 4-6 months. See ROI during the Operate phase — not years down the road.",
      icon: <IconTrendingUp className="w-8 h-8" />,
    },
    {
      title: "Aligned Incentives",
      description:
        "We succeed when you succeed. Our model ensures we deliver working solutions, not just billable hours.",
      icon: <IconHandStop className="w-8 h-8" />,
    },
    {
      title: "Proven Expertise",
      description:
        "Our team has built AI capabilities for leading enterprises across manufacturing, logistics, financial services, and more.",
      icon: <IconAward className="w-8 h-8" />,
    },
    {
      title: "Ownership, Not Dependence",
      description:
        "After transfer, it's yours. Extend it, modify it, scale it — no permission needed, no recurring fees.",
      icon: <IconKey className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Clients Choose <span className="text-primary">Usekase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not consultants who disappear after a PowerPoint. We're not a
            SaaS vendor locking you into subscriptions. We're your AI capability
            partner — building what you need, transferring complete ownership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <ValueFeature key={value.title} {...value} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ValueFeature = ({
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
        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200" />
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
            {title}
          </span>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};
