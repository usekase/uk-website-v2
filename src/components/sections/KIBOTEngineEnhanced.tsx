import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconRocket,
  IconLibrary,
  IconShield,
  IconPuzzle,
  IconChartBar,
  IconCloudCheck,
} from "@tabler/icons-react";

export default function KIBOTEngineEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "K-Solutions Reduce Build Time 40-60%",
      description:
        "Pre-built, proven modules for common AI workflows mean we don't reinvent the wheel. You get faster delivery without compromising customization.",
      icon: <IconRocket className="w-8 h-8" />,
    },
    {
      title: "Every Project Adds to the Library",
      description:
        "Your unique solutions become reusable K-Solutions for future projects — creating a flywheel of efficiency and innovation.",
      icon: <IconLibrary className="w-8 h-8" />,
    },
    {
      title: "Embedded Governance & Security",
      description:
        "Built-in compliance, monitoring, and security frameworks ensure your AI capability is production-ready from day one.",
      icon: <IconShield className="w-8 h-8" />,
    },
    {
      title: "Modular Architecture",
      description:
        "Like Lego blocks for enterprise AI — flexible, composable modules that create a solution uniquely tailored to your needs.",
      icon: <IconPuzzle className="w-8 h-8" />,
    },
    {
      title: "Performance Monitoring",
      description:
        "Real-time analytics and monitoring built into every solution, ensuring continuous optimization and measurable ROI.",
      icon: <IconChartBar className="w-8 h-8" />,
    },
    {
      title: "Cloud-Native & Scalable",
      description:
        "Built for the cloud from day one. Scale seamlessly as your business grows without architectural rewrites.",
      icon: <IconCloudCheck className="w-8 h-8" />,
    },
  ];

  return (
    <section id="platform" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-primary">KIBOT Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proprietary framework combines reusable AI modules (K-Solutions)
            with custom development to accelerate delivery while maintaining full
            customization. Think of it as Lego blocks for enterprise AI — but the
            final structure is uniquely yours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card
            variant="corners"
            className="max-w-3xl mx-auto bg-primary/10"
          >
            <div className="p-8">
              <p className="text-lg mb-6">
                The result? Faster builds, lower costs, and battle-tested
                components — while still delivering a solution that's 100%
                tailored to your needs.
              </p>
              <Button size="lg" variant="default">
                Explore K-Solutions
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

const Feature = ({
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
        (index === 0 || index === 3) && "lg:border-l border-border",
        index < 3 && "lg:border-b border-border"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/10 pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
