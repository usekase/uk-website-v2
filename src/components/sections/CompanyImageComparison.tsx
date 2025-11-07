import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ImageComparison } from "@/components/ui/image-comparison-slider";

export default function CompanyImageComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-gray-50 dark:bg-zinc-800">
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
            afterImage="https://static.wixstatic.com/media/cf1213_3f4c69f35925439a8a7b0a1bbc9fcf8e~mv2.jpeg/v1/fill/w_2000,h_1037,fp_0.50_0.53,q_90,enc_avif,quality_auto/75221a02f2971c3bf644c9eba14b36ff.jpeg"
            altBefore="Singapore"
            altAfter="Mandala Club"
            beforeLabel="Mandala Club"
            afterLabel="Singapore"
          />
        </motion.div>

        {/* Office Addresses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-border rounded-md overflow-hidden">
            {/* Address 1: Central Hub */}
            <div className="relative group/feature border-b md:border-b-0 md:border-r border-border p-8 bg-card">
              {/* Hover background overlay */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 pointer-events-none" />

              {/* Corner decorations */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute top-0 left-0 border-l-2 border-t-2 z-10" />
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute bottom-0 right-0 border-r-2 border-b-2 z-10" />

              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  UseKase <span className="text-primary">Central Hub</span>
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  68 Circular Rd, Unit 02-01<br />
                  Singapore 049422
                </p>
              </div>
            </div>

            {/* Address 2: North Hub */}
            <div className="relative group/feature border-b md:border-b-0 md:border-r border-border p-8 bg-card">
              {/* Hover background overlay */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 pointer-events-none" />

              {/* Corner decorations */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute top-0 left-0 border-l-2 border-t-2 z-10" />
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute bottom-0 right-0 border-r-2 border-b-2 z-10" />

              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  UseKase <span className="text-primary">North Hub</span>
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  9 Taman Serasi, Botanic Gardens View<br />
                  05-11, Singapore 257720
                </p>
              </div>
            </div>

            {/* Address 3: Mandala Club */}
            <div className="relative group/feature p-8 bg-card">
              {/* Hover background overlay */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-primary/5 pointer-events-none" />

              {/* Corner decorations */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute top-0 left-0 border-l-2 border-t-2 z-10" />
              <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200 border-primary size-6 absolute bottom-0 right-0 border-r-2 border-b-2 z-10" />

              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  Meet UseKase at <span className="text-primary">Mandala Club</span>
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  31 Bukit Pasoh Rd<br />
                  Singapore 089845
                </p>
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            All meetings by appointment only
          </p>
        </motion.div>
      </div>
    </section>
  );
}
