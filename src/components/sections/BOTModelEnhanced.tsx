import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function BOTModelEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="model" className="py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            True transformation happens when industry insight meets internal capability. We build that bridge across sectors, functions, and the fabric of your business.
          </p>
        </motion.div>

        {/* 3 Layer Boxes */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Layer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">
                    <span className="text-primary">Industry</span>
                  </h3>
                  <p className="text-xl font-semibold text-muted-foreground mb-3">
                    Where the Future Is Being Re-Architected
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    We bring deep understanding of how AI is reshaping key industries and where to compete next.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We start by identifying where AI can move the market, not just your metrics.
                  </p>
                </div>
                <div className="mt-6">
                  <Link to="/case-studies">
                    <Button variant="outline" className="w-full">
                      Industry page →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Layer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">
                    <span className="text-primary">Business Domains</span>
                  </h3>
                  <p className="text-xl font-semibold text-muted-foreground mb-3">
                    Where Performance Lives
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    We connect strategy to execution by focusing on functional leverage points. The areas where intelligent systems create measurable uplift and efficiency.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We target the functions that drive the P&L, and turn them into growth engines.
                  </p>
                </div>
                <div className="mt-6">
                  <Link to="https://playbook.usekase.ai">
                    <Button variant="outline" className="w-full">
                      Use Case library →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">
                    <span className="text-primary">Your Company Context</span>
                  </h3>
                  <p className="text-xl font-semibold text-muted-foreground mb-3">
                    Where Competitive Advantage Is Built
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    No two businesses start from the same place.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We design every solution around your data, systems, and people. Building the internal capabilities, culture, and confidence needed to sustain results long after hand-over.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Because advantage isn't installed, it's built from within.
                  </p>
                </div>
                <div className="mt-6">
                  <Link to="/contact-us">
                    <Button variant="outline" className="w-full">
                      Book discovery call →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative max-w-5xl mx-auto bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md p-8 md:p-10">
            {/* Corner decorations */}
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFaoqTgI8kBQw/profile-displayphoto-shrink_800_800/B4DZaF110HH4Ag-/0/1746002206743?e=1763596800&v=beta&t=Y-GrA4S8I8mfbQ7V9RbtM0wVsD6GBcKB5dI-_whi1dA"
                  alt="Martin Gents"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-600"
                />
              </div>

              {/* Quote and Attribution */}
              <div className="flex-1">
                <blockquote className="mb-3">
                  <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed italic">
                    "By working across all three layers, UseKase delivers
                    solutions that are globally informed, operationally grounded,
                    and uniquely yours."
                  </p>
                </blockquote>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Martin Gents</span>, Founder & CEO, UseKase
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
