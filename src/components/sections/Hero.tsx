import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Cybernetic Grid animated background */}
      <CyberneticGridShader />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            {/* Container with corner borders */}
            <div className="relative bg-black/20 backdrop-blur-sm border-2 border-white/20 rounded-md p-8 md:p-12">
              {/* Corner decorations */}
              <div className="border-white/40 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
              <div className="border-white/40 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
              <div className="border-white/40 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
              <div className="border-white/40 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Build, Operate, Transfer
                <br />
                <span className="text-secondary">
                  your AI Future
                </span>
              </h1>
            </div>
          </motion.div>

          <div className="mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-6"
          >
            We build AI-powered capabilities you can own, not just rent.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto"
          >
            In 12-24 months, we design, build, and transfer a complete AI
            capability to your team — proven, production-ready, and fully yours.
            No vendor lock-in. No ongoing dependencies. Just real AI ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="text-base px-8">
              Let's Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12-24</div>
              <div className="text-sm text-white/70">Months to Transfer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%+</div>
              <div className="text-sm text-white/70">EBITDA Uplift</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-white/70">Ownership</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
