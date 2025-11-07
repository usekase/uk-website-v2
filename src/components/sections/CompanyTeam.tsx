import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Code, Bot, Rocket } from "lucide-react";

const values = [
  {
    id: 1,
    icon: Users,
    title: "50+ Years in Digital Strategy",
    description:
      "Deep expertise in transforming businesses through digital innovation and strategic planning.",
  },
  {
    id: 2,
    icon: Bot,
    title: "Agentic AI",
    description:
      "Cutting-edge AI agents that work autonomously to solve complex business problems.",
  },
  {
    id: 3,
    icon: Code,
    title: "Low-Code Automation",
    description:
      "Rapid development and deployment using modern low-code platforms and tools.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Solutions designed from the ground up to grow with your business needs.",
  },
];

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
    transition: { duration: 0.5 },
  },
};

export default function CompanyTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-white dark:bg-zinc-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Team / <span className="text-primary">Values</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Corner decorations - always visible */}
                <div className="border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                <div className="relative p-6 bg-white dark:bg-zinc-900 rounded-lg border border-border h-full">
                  {/* Icon */}
                  <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    {value.description}
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
