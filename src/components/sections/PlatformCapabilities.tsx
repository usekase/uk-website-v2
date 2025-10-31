import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  BookOpen,
  Activity,
  Shield,
  MessageSquarePlus,
  Lock,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Organizational Knowledge",
    description:
      "Converts business processes into AI-driven workflows, prompts, and schemas—refinable by SMEs without technical skills",
    icon: BookOpen,
  },
  {
    id: "02",
    title: "System Observability",
    description:
      "Provides detailed audit trails tracking inputs, outputs, and decision points across multi-component systems",
    icon: Activity,
  },
  {
    id: "03",
    title: "Evaluation & Guardrail",
    description:
      "Evaluates AI performance across multiple levels using test suites to ensure reliability",
    icon: Shield,
  },
  {
    id: "04",
    title: "Feedback Integration",
    description:
      "Offers audit trails for AI decisions with integrated feedback loops for real-time system refinement",
    icon: MessageSquarePlus,
  },
  {
    id: "05",
    title: "Enterprise Reliability & Security",
    description:
      "Ensures enterprise-grade security, compliance, and governance with RBAC, multi-tenancy, and audit trails",
    icon: Lock,
  },
];

export default function PlatformCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Five foundational pillars that power enterprise AI operations
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center md:justify-items-stretch"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.id}
                variants={itemVariants}
                className="relative group w-full max-w-md md:max-w-none"
              >
                {/* Corner decorations - only visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg border border-transparent group-hover:border-border transition-colors">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-3 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {capability.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
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
