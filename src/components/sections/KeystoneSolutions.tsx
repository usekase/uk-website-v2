import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function KeystoneSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Keystone ("<span className="text-primary">K</span>") Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To accelerate every phase of the ARCH journey, UseKase's Keystone
            (K) Solutions act as launchpads, proven tools and frameworks that
            help clients move faster and smarter through their AI transformation.
          </p>
        </motion.div>

        {/* Keystone Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <img
            src="/keystones.svg"
            alt="Keystone Solutions - K1 through K5"
            className="w-full h-auto"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="https://playbook.usekase.ai" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Explore AI Playbook →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
