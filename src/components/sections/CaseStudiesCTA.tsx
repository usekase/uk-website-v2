import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

export default function CaseStudiesCTA() {
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
            Ready to Transform{" "}
            <span className="text-primary">Your Business?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the businesses that now own their AI capabilities. Let's
            discuss how the BOT model can work for you.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="min-w-[200px]">
              <Calendar className="h-5 w-5" />
              Book Discovery Call
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="min-w-[200px]"
              onClick={() => {
                // Future: Implement PDF download
                console.log("Download case studies PDF");
              }}
            >
              <Download className="h-5 w-5" />
              Download Case Studies
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            No commitment required. Let's explore if the BOT model is right for you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
