import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Check, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      aspect: "Ownership",
      oldWay: "You pay forever for software you'll never own",
      usekaseWay: "You own the code, the models, and the infrastructure",
    },
    {
      aspect: "Cost Structure",
      oldWay: "Rising per-seat or usage fees with no end in sight",
      usekaseWay: "Fixed project cost. After transfer, only your hosting & team",
    },
    {
      aspect: "Delivery",
      oldWay: "Generic solutions that need extensive customization",
      usekaseWay: "Built specifically for your workflow from day one",
    },
    {
      aspect: "Time to ROI",
      oldWay: "Months of integration, training, and 'change management'",
      usekaseWay: "Live in production within 4-6 months, improving as you operate",
    },
    {
      aspect: "Vendor Lock-in",
      oldWay: "Stuck with their roadmap, their pricing, their terms",
      usekaseWay: "Complete independence after transfer. Extend it however you want",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Traditional AI Projects Fail —{" "}
            <span className="text-primary">and How We Fix It</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most companies face a painful choice: build AI capabilities in-house
            (expensive, risky, slow) or rent SaaS tools forever (convenient but
            costly). We offer a third way.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-destructive/50 bg-destructive/5 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <X className="h-6 w-6 text-destructive" />
                    <h3 className="text-2xl font-bold">The Old Way</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-primary/50 bg-primary/5 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">The Usekase Way</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="grid md:grid-cols-2 gap-4"
              >
                <Card className="border-destructive/30 hover:border-destructive/50 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-destructive mb-2">
                      {item.aspect}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.oldWay}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">
                      {item.aspect}
                    </h4>
                    <p className="text-sm text-foreground">{item.usekaseWay}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline">
              See How It Works
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
