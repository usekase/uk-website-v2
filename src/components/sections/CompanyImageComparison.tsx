import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ImageComparison } from "@/components/ui/image-comparison-slider";

export default function CompanyImageComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gray-50 dark:bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Locations</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageComparison
            beforeImage="/SG.png"
            afterImage="/RM.png"
            altBefore="Singapore"
            altAfter="Remote"
            beforeLabel="Remote"
            afterLabel="Singapore"
          />
        </motion.div>
      </div>
    </section>
  );
}
