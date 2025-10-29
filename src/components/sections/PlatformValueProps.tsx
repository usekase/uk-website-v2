import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Zap, Eye, Users } from "lucide-react";

const valueProps = [
  {
    id: 1,
    title: "AI to Build AI",
    description:
      "AI—not humans—create automated processes with human feedback, accelerating deployment from months to days",
    icon: Zap,
    highlight: "Months to Days",
  },
  {
    id: 2,
    title: "Trust and Transparency",
    description:
      "Systems tailored to business context with explainability—avoiding black-box solutions",
    icon: Eye,
    highlight: "No Black Box",
  },
  {
    id: 3,
    title: "Forward Deployment",
    description:
      "World-class team of engineers and researchers are forward-deployed to own the outcome alongside you",
    icon: Users,
    highlight: "Your Success Partner",
  },
];

export default function PlatformValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">UseKase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for enterprises that demand excellence, transparency, and results
          </p>
        </motion.div>

        {/* Value Props */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Corner decorations - only visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                {/* Card */}
                <div className="h-full p-8 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-transparent group-hover:border-border transition-colors">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block px-3 py-1 mb-4 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {prop.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
