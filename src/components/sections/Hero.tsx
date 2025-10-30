import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-16">
      {/* Cybernetic Grid animated background */}
      <CyberneticGridShader />

      <div className="container mx-auto px-4 py-12 relative z-10 flex-1 flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            {/* Container with corner borders */}
            <div className="relative bg-black/20 backdrop-blur-sm border-2 border-white/40 rounded-md p-8 md:p-12">
              {/* Corner decorations */}
              <div className="border-white/40 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
              <div className="border-white/40 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
              <div className="border-white/40 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
              <div className="border-white/40 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Architecting the AI Economy{" "}
                <span className="text-secondary">
                  One Business at a Time
                </span>
              </h1>
            </div>
          </motion.div>

          <div className="mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Building intelligent systems that help every company — not just the Fortune 500 — grow faster, operate smarter, and compete on new terms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="text-base px-8"
              onClick={() => {
                window.location.href = "/platform";
              }}
            >
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              onClick={() => {
                window.location.href = "/case-studies";
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              See How We Deliver Results
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-20 flex justify-center pb-8"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Logo section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 pb-4"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Partnered With Section */}
              <div className="text-center md:text-right border-r-0 md:border-r border-white/40 pr-0 md:pr-8">
                <h3 className="text-xs font-semibold text-white/60 tracking-wider mb-4">
                  PARTNERED WITH
                </h3>
                <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 flex-wrap">
                  {/* OpenAI */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-2xl font-bold">OpenAI</span>
                  </div>
                  {/* GCP */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-2xl font-bold">Google Cloud</span>
                  </div>
                  {/* AWS */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-2xl font-bold">AWS</span>
                  </div>
                </div>
              </div>

              {/* Backed By Section */}
              <div className="text-center md:text-left pl-0 md:pl-8">
                <h3 className="text-xs font-semibold text-white/60 tracking-wider mb-4">
                  BACKED BY
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 flex-wrap">
                  {/* LOGO1 */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-2xl font-bold">Name1</span>
                  </div>
                  {/* LOGO2 */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-2xl font-bold">Name2</span>
                  </div>
                  {/* LOGO3 */}
                  <div className="text-white/80 hover:text-white transition-colors cursor-pointer">
                    <span className="text-xl font-bold">Name3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
