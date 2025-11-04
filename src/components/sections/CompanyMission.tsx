import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Target } from "lucide-react";

export default function CompanyMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-zinc-50 dark:bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            To build the AI operating system for the SME economy, where smaller
            companies get enterprise-grade transformation at enterprise-grade
            speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
