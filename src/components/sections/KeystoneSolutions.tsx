import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  IconClipboardCheck,
  IconBook,
  IconPuzzle,
  IconShieldCheck,
  IconRocket,
} from "@tabler/icons-react";

const keystones = [
  {
    id: "K1",
    title: "AI Readiness Diagnostic",
    description:
      "Evaluating the current state and AI maturity to kickstart the Assess phase.",
    icon: IconClipboardCheck,
    phase: "Assess",
  },
  {
    id: "K2",
    title: "AI Playbook",
    description:
      "Access industry-specific use cases to inspire and guide the Re-imagine phase.",
    icon: IconBook,
    phase: "Re-imagine",
  },
  {
    id: "K3",
    title: "Platform Blueprint",
    description:
      "We select the right technology, tools, and orchestration to power the Construct phase.",
    icon: IconPuzzle,
    phase: "Construct",
  },
  {
    id: "K4",
    title: "Production Readiness",
    description:
      "Ensure compliance, security, and scalability ahead of the Hand-over phase.",
    icon: IconShieldCheck,
    phase: "Hand-over",
  },
  {
    id: "K5",
    title: "Adoption Enablement",
    description:
      "Equip your teams to own the IP, scale, and sustain AI capabilities beyond delivery.",
    icon: IconRocket,
    phase: "Beyond",
  },
];

export default function KeystoneSolutions() {
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
