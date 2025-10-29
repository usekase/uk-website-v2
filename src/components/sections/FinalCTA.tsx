import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 bg-primary text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your AI Capability?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop renting AI. Start owning it. Let's design a
            Build-Operate-Transfer engagement tailored to your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              window.location.href = "/contact-us";
            }}
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="secondary">
            <Users className="mr-2 h-5 w-5" />
            Join Our Partner Network
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/80 text-sm">
            Typical engagement: 12-24 months · 0.5-1M SGD project value · 40%+
            EBITDA uplift
          </p>
        </motion.div>
      </div>
    </section>
  );
}
