import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Truck, DollarSign, ShoppingBag, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Sectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    {
      icon: Factory,
      title: "Manufacturing & Supply Chain",
      description:
        "Predictive maintenance, quality control, demand forecasting, and supply chain optimization.",
    },
    {
      icon: Truck,
      title: "Logistics & Packaging",
      description:
        "Route optimization, warehouse automation, shipment tracking, and inventory management.",
    },
    {
      icon: DollarSign,
      title: "Financial Services & Fintech",
      description:
        "Fraud detection, risk assessment, process automation, and customer intelligence.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Consumer Goods",
      description:
        "Personalization engines, inventory optimization, demand planning, and customer analytics.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Document intelligence, workflow automation, client analytics, and knowledge management.",
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We <span className="text-primary">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've built AI capabilities across diverse industries, each with
            sector-specific Flywheels that fund transformation through measurable
            business outcomes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                    <sector.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Each sector has unique challenges and opportunities. Our K-Solutions
            library includes sector-specific modules, and every project adds to
            our collective expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
