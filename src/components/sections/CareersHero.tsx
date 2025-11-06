import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function CareersHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 bg-white dark:bg-zinc-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Build your <span className="text-primary">Career</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 h-1 w-24 bg-primary mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
