import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Cog, ArrowRightLeft, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BOTModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      icon: Hammer,
      title: "Build",
      duration: "4-6 months",
      description: "We design and develop your AI capability from scratch, tailored to your specific workflows and data.",
      outcomes: [
        "Custom AI models trained on your data",
        "Production-ready infrastructure",
        "Integration with your existing systems",
        "Initial team training begins",
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Cog,
      title: "Operate",
      duration: "4-6 months",
      description: "We run it in production alongside your team, optimizing performance and training your people hands-on.",
      outcomes: [
        "Live in production environment",
        "Continuous optimization and monitoring",
        "Your team learns by doing",
        "Performance metrics tracked",
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ArrowRightLeft,
      title: "Transfer",
      duration: "6 months",
      description: "We gradually hand over full ownership — code, infrastructure, and knowledge — to your team.",
      outcomes: [
        "Complete code and IP transfer",
        "Full infrastructure ownership",
        "Your team runs it independently",
        "Documentation and playbooks provided",
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart3,
      title: "Monitor",
      duration: "Ongoing",
      description: "Optional ongoing support as you scale and extend the capability on your own terms.",
      outcomes: [
        "Performance monitoring dashboards",
        "Optional advisory support",
        "Extend and customize freely",
        "Join the Usekase network",
      ],
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ];

  return (
    <section id="model" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Model:{" "}
            <span className="text-primary">Build</span> ·{" "}
            <span className="text-secondary">Operate</span> ·{" "}
            <span className="text-accent">Transfer</span> ·{" "}
            <span className="text-chart-4">Monitor</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven framework for delivering AI capabilities that become truly
            yours — no dependencies, no lock-in, just ownership.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Timeline visualization */}
          <div className="hidden lg:flex justify-center items-center mb-12 relative px-12">
            <div className="absolute top-1/2 left-12 right-12 h-1 bg-primary -translate-y-1/2" />
            <div className="flex justify-between items-center w-full max-w-5xl">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className={`w-12 h-12 rounded-full ${phase.bgColor} flex items-center justify-center border-4 border-background`}>
                    <phase.icon className={`h-6 w-6 ${phase.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Phase cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${phase.bgColor} flex items-center justify-center mb-4`}>
                      <phase.icon className={`h-6 w-6 ${phase.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    <CardDescription className="text-base font-semibold">
                      {phase.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Key Outcomes:
                      </h4>
                      <ul className="space-y-1">
                        {phase.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2">
                            <span className={`mt-0.5 ${phase.color}`}>•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In 12-24 months, you go from concept to complete ownership of a
              production AI capability. No ongoing fees. No vendor dependence.
              Just your team, your code, your future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
