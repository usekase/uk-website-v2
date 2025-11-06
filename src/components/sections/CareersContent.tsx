import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function CareersContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            At UseKase, we build teams around what the work demands.
          </h2>

          {/* Main Content */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            Just as we assemble specialist teams to fit each client's industry
            and challenge, we approach hiring the same way.
          </p>

          {/* Values Section */}
          <p className="text-xl md:text-2xl text-muted-foreground">
            We look for people whose{" "}
            <span className="text-primary font-semibold">strengths</span>,{" "}
            <span className="text-primary font-semibold">curiosity</span>, and{" "}
            <span className="text-primary font-semibold">craft</span> align with
            what we're building - not just a resume that fits a role.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
