import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
    <section ref={ref} className="py-24 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-6 max-w-6xl mx-auto"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={study.id} variants={itemVariants}>
              <CaseStudyCard
                title={study.title}
                industry={study.industry}
                image={study.image}
                challenge={study.challenge}
                solution={study.solution}
                outcomes={study.outcomes}
                slug={study.slug}
                isExpanded={expandedIndex === index}
                onExpand={() => setExpandedIndex(index)}
                onCollapse={() => setExpandedIndex(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
