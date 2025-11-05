import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { caseStudies } from "@/data/case-studies";

export default function SectorsEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="sectors" className="py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We Provide <span className="text-primary">Impact</span> In Weeks
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with enterprises across diverse industries to build
            custom AI capabilities that deliver measurable results. Our
            experience spans complex operational environments where precision,
            scalability, and reliability are non-negotiable.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-6 max-w-6xl mx-auto"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={itemVariants}>
              <CaseStudyCard
                title={study.title}
                industry={study.industry}
                image={study.image}
                challenge={study.challenge}
                solution={study.solution}
                outcomes={study.outcomes}
                slug={study.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
