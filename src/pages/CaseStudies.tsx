import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import CaseStudiesMetrics from "@/components/sections/CaseStudiesMetrics";
import CaseStudiesCTA from "@/components/sections/CaseStudiesCTA";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/case-studies";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CaseStudies() {
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <CaseStudiesMetrics />

        {/* Testimonials Section - Hidden */}
        {/* <section
          ref={testimonialsRef}
          className="py-24 bg-white dark:bg-zinc-800"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hear From <span className="text-primary">Our Clients</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Real feedback from businesses that now own their AI capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </motion.div>
          </div>
        </section> */}

        <CaseStudiesCTA />
      </main>
      <UsekaseFooter />
    </div>
  );
}
