import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { JobCardVertical } from "@/components/ui/job-card-vertical";
import { jobListings } from "@/data/job-listings";

export default function CareersListings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our team and help shape the future of AI. Explore our current opportunities below.
          </p>
        </motion.div>

        {/* Job Listings Grid - 2 columns on desktop */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <JobCardVertical
                key={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                description={job.description}
                responsibilities={job.responsibilities}
                requirements={job.requirements}
                delay={isInView ? 0.1 + index * 0.1 : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
