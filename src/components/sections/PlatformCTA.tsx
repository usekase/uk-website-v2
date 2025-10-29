import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function PlatformCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-white dark:bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with UseKase to embark on{" "}
            <span className="text-primary">AI initiatives</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience integrated development and outcome-based pricing
            alignment with a world-class team that owns your success.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="min-w-[220px]"
              onClick={() => {
                window.location.href = "/contact-us";
              }}
            >
              <Calendar className="h-5 w-5" />
              Book Discovery Call
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Ready to transform your business with AI?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
