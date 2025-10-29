import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MetricProps {
  value: string;
  label: string;
  delay: number;
}

function MetricCard({ value, label, delay }: MetricProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="mb-4">
        <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
          {value}
        </div>
        <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
      </div>
      <p className="text-base md:text-lg font-medium text-foreground">
        {label}
      </p>
    </motion.div>
  );
}

export default function CaseStudiesMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { value: "5+", label: "Projects Deployed" },
    { value: "100%", label: "Success Rate" },
    { value: "12mo", label: "Avg BOT Period" },
    { value: "$1.5M", label: "Avg ROI Per Year" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impact by the <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results across industries and use cases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
