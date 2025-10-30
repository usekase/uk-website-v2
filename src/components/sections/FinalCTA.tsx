import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react";
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
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join Us in Architecting the AI Economy
          </h2>
          <p className="text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're building a future where every company — not just the few — can transform and scale with AI.
          </p>

          {/* Three audience cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <Building2 className="w-10 h-10 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-bold text-white mb-2">For Businesses</h3>
              <p className="text-white/80 text-sm">
                Ready to accelerate your AI journey
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <Users className="w-10 h-10 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-bold text-white mb-2">For Partners</h3>
              <p className="text-white/80 text-sm">
                Looking to collaborate and build together
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <TrendingUp className="w-10 h-10 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-bold text-white mb-2">For Investors</h3>
              <p className="text-white/80 text-sm">
                Who believe in measurable impact
              </p>
            </motion.div>
          </div>

          <div className="border-t border-white/20 pt-8 mb-8">
            <p className="text-2xl font-bold text-white leading-relaxed">
              Let's build intelligent businesses — and a smarter economy — together.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              window.location.href = "/contact-us";
            }}
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
