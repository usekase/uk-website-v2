import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FlywheelFunding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      label: "Project Value",
      value: "≤ $1M",
      unit: "SGD",
    },
    {
      label: "Duration",
      value: "≤ 24",
      unit: "months",
    },
    {
      label: "Client EBITDA Uplift",
      value: "≈ 40%",
      unit: "average",
    },
    {
      label: "Investor Return",
      value: "≈ 40%",
      unit: "over 24 months",
    },
  ];

  return (
    <section id="investors" className="py-24 bg-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Funding the <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            The Usekase Flywheel is a unique financing model that aligns clients,
            investors, and Usekase around measurable business outcomes.
          </p>
          <p className="text-base text-muted-foreground">
            Investors fund the AI capability build. Clients pay back from the
            EBITDA uplift the AI generates. Everyone wins when the AI delivers
            real value.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <Card className="text-center border-transparent group-hover:border-border transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {stat.unit}
                  </div>
                  <div className="text-sm font-semibold">{stat.label}</div>
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
          <Card
            variant="corners"
            className="max-w-3xl mx-auto bg-primary/10"
          >
            <CardContent className="p-4">
              <h3 className="text-2xl font-bold mb-4">
                Transformation that funds itself
              </h3>
              <p className="text-muted-foreground">
                Clients get AI capabilities without large upfront costs. Investors
                get attractive returns tied to real business performance. Usekase
                gets paid for delivering measurable value.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
