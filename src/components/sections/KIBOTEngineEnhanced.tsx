import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IconBrain, IconBolt, IconUsers } from "@tabler/icons-react";

export default function KIBOTEngineEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Applied Intelligence Meets <span className="text-primary">Practical Execution</span>
          </h2>
          <p className="text-2xl text-center text-foreground font-semibold mb-12 max-w-4xl mx-auto">
            We bring together forward-deployed experts and our proprietary ARCH platform to turn AI strategy into working systems.
          </p>

          {/* Two-column layout for ARCH and K-Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-transparent group-hover:border-border transition-colors">
                <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-200">
                  <IconBrain className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4">ARCH Platform</h3>
                <p className="text-muted-foreground">
                  Our proprietary framework that guides every transformation through four disciplined stages.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Corner decorations - only visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-transparent group-hover:border-border transition-colors">
                <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-200">
                  <IconBolt className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Keystone (K) Solutions</h3>
                <p className="text-muted-foreground">
                  Proven accelerators like our AI Playbook that combine real-world experience with reusable intelligence.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Value Proposition */}
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

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-transparent group-hover:border-border transition-colors shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconUsers className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Your Advantage</h3>
                  <p className="text-lg text-muted-foreground">
                    Each K-Solution shortens time-to-value and captures what works across industries — allowing us to deliver results faster while building your own foundation for future growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/platform">
              <Button size="lg">
                Explore ARCH →
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="secondary" size="lg">
                View Keystone Solutions →
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
