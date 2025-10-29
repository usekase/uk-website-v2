import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Database,
  Cpu,
  MessageSquare,
  RefreshCw,
  PlayCircle,
} from "lucide-react";

export default function PlatformWorkflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workflowSteps = [
    {
      id: 1,
      title: "Input",
      description: "SOPs, Data & Tools",
      detail: "Your organizational knowledge and existing processes",
      icon: Database,
      color: "from-purple-400 to-purple-500",
      borderColor: "border-purple-500",
    },
    {
      id: 2,
      title: "Convert",
      description: "AI-Native Primitives",
      detail: "AI Agents convert processes into AI-native primitives",
      icon: Cpu,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-600",
    },
    {
      id: 3,
      title: "Feedback",
      description: "SME Validation",
      detail: "Subject matter experts provide feedback on generated workflows",
      icon: MessageSquare,
      color: "from-purple-600 to-purple-700",
      borderColor: "border-purple-700",
    },
    {
      id: 4,
      title: "Refine",
      description: "Continuous Improvement",
      detail: "AI Agents use feedback to refine and update the processes",
      icon: RefreshCw,
      color: "from-purple-700 to-purple-800",
      borderColor: "border-purple-800",
    },
    {
      id: 5,
      title: "Execute",
      description: "Auditable Workflows",
      detail: "AI Agents orchestrate and execute auditable processes",
      icon: PlayCircle,
      color: "from-primary to-purple-600",
      borderColor: "border-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.17, 0.55, 0.55, 1],
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A continuous feedback loop from knowledge to execution
          </p>
        </motion.div>

        {/* Workflow Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === workflowSteps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  className={`relative ${isLast ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''}`}
                >
                  {/* Connector Arrow (not for last item) */}
                  {!isLast && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block lg:hidden even:hidden">
                      <div className="w-6 h-6 text-primary">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-full h-full"
                        >
                          <path
                            d="M5 12h14m0 0l-6-6m6 6l-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`group relative bg-white dark:bg-zinc-900 rounded-xl p-6 border-2 ${step.borderColor}
                              hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full`}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-primary to-purple-600
                                  text-primary-foreground rounded-full flex items-center justify-center
                                  font-bold text-sm shadow-lg">
                      {step.id}
                    </div>

                    {/* Icon with Gradient */}
                    <div className={`mb-4 w-14 h-14 rounded-lg bg-gradient-to-br ${step.color}
                                   flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-semibold text-primary mb-2">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-6 relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-purple-400 via-purple-600 to-primary"></div>

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === workflowSteps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  variants={cardVariants}
                  className="relative pl-20"
                >
                  {/* Step indicator dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-primary to-purple-600
                                rounded-full border-4 border-zinc-50 dark:border-zinc-800 z-10"></div>

                  {/* Card */}
                  <div
                    className={`bg-white dark:bg-zinc-900 rounded-xl p-5 border-2 ${step.borderColor} shadow-lg`}
                  >
                    {/* Icon with Gradient */}
                    <div className={`mb-3 w-12 h-12 rounded-lg bg-gradient-to-br ${step.color}
                                   flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="text-xs font-bold text-primary mb-1">
                      STEP {step.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-1 text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-semibold text-primary mb-2">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Arrow for mobile (not for last item) */}
                  {!isLast && (
                    <div className="absolute left-7 -bottom-3 text-primary z-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 h-4"
                      >
                        <path
                          d="M12 5v14m0 0l-6-6m6 6l6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Feedback Loop Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 max-w-md mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10
                          rounded-xl p-6 border border-primary/20 text-center">
              <div className="flex items-center justify-center mb-3">
                <RefreshCw className="w-6 h-6 text-primary mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                <h4 className="text-lg font-bold text-foreground">
                  Continuous Cycle
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Executed workflows feed back into the system, creating a self-improving loop
                that keeps your AI aligned with business needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
