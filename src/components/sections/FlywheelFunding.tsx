import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconTarget,
  IconClipboardCheck,
  IconHandGrab,
  IconChartLine,
} from "@tabler/icons-react";

export default function FlywheelFunding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Ambitious Businesses",
      description: "Screened for readiness and transformative potential.",
      icon: <IconTarget className="w-8 h-8" />,
    },
    {
      title: "Assessment First",
      description: "ARCH \"Assess\" phase validates business case and funding eligibility.",
      icon: <IconClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Shared Investment",
      description: "Usekase co-funds the build and operation based on expected ROI.",
      icon: <IconHandGrab className="w-8 h-8" />,
    },
    {
      title: "Self-Funded Growth",
      description: "Capabilities repay themselves through measurable uplift.",
      icon: <IconChartLine className="w-8 h-8" />,
    },
  ];

  return (
    <section id="investors" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Funding Ambition — <span className="text-primary">One Transformation at a Time</span>
          </h2>
          <p className="text-2xl text-foreground font-semibold mb-12 max-w-3xl mx-auto">
            Usekase backs the most ambitious businesses ready to scale with AI.
          </p>

          {/* Process Flow - Timeline Style */}
          <div className="max-w-4xl mx-auto mb-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/20" style={{ top: '2rem' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Assess</h3>
                <p className="text-muted-foreground">
                  We validate your opportunity and determine the right funding model through our ARCH framework.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Co-Fund</h3>
                <p className="text-muted-foreground">
                  If selected, we invest alongside you — in proportion to the outcomes and risk we agree on together.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Results</h3>
                <p className="text-muted-foreground">
                  AI capabilities that fund themselves through measurable performance gains.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-16">
            <p className="text-2xl font-bold text-foreground">
              We don't just finance innovation — <span className="text-primary">we make it accountable.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
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
          <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg p-6">
            <p className="text-lg font-semibold text-foreground">
              <span className="font-bold">Shared risk. Shared return. Real transformation.</span>
              <br />
              That's how Usekase funds the future of business growth.
            </p>
          </div>
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
