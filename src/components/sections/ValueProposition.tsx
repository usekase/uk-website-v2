import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Handshake, Award, Key } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: TrendingUp,
      title: "Measurable Value, Fast",
      description:
        "Live in production within 4-6 months. See ROI during the Operate phase — not years down the road.",
    },
    {
      icon: Handshake,
      title: "Aligned Incentives",
      description:
        "We succeed when you succeed. Our model ensures we deliver working solutions, not just billable hours.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Our team has built AI capabilities for leading enterprises across manufacturing, logistics, financial services, and more.",
    },
    {
      icon: Key,
      title: "Ownership, Not Dependence",
      description:
        "After transfer, it's yours. Extend it, modify it, scale it — no permission needed, no recurring fees.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Clients Choose <span className="text-primary">Usekase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not consultants who disappear after a PowerPoint. We're not a
            SaaS vendor locking you into subscriptions. We're your AI capability
            partner — building what you need, transferring complete ownership.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:scale-[1.02] transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
