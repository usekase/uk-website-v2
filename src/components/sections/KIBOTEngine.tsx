import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Library, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function KIBOTEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "K-Solutions Reduce Build Time 40-60%",
      description:
        "Pre-built, proven modules for common AI workflows mean we don't reinvent the wheel. You get faster delivery without compromising customization.",
    },
    {
      icon: Library,
      title: "Every Project Adds to the Library",
      description:
        "Your unique solutions become reusable K-Solutions for future projects — creating a flywheel of efficiency and innovation.",
    },
    {
      icon: Shield,
      title: "Embedded Governance & Security",
      description:
        "Built-in compliance, monitoring, and security frameworks ensure your AI capability is production-ready from day one.",
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                The result? Faster builds, lower costs, and battle-tested
                components — while still delivering a solution that's 100%
                tailored to your needs.
              </p>
              <Button size="lg" variant="outline">
                Explore K-Solutions
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
