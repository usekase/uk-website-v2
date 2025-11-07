import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

const differences = [
  {
    not: "A job in consulting",
    icon: X,
    isPositive: false,
  },
  {
    not: "Another AI startup",
    icon: X,
    isPositive: false,
  },
  {
    not: "A place to talk about the future",
    icon: X,
    isPositive: false,
  },
  {
    not: "A place where tomorrow gets built today.",
    icon: CheckCircle2,
    isPositive: true,
  },
];

export default function CompanyDifference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Join <span className="text-primary">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {differences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className={`p-6 rounded-lg border text-center h-full flex flex-col items-center justify-center bg-white dark:bg-zinc-900 ${
                  item.isPositive
                    ? 'border-primary'
                    : 'border-border'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    item.isPositive
                      ? 'bg-green-100 dark:bg-green-900/30'
                      : 'bg-destructive/10'
                  }`}>
                    {item.isPositive ? (
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    ) : (
                      <X className="h-6 w-6 text-destructive" />
                    )}
                  </div>
                  <p className={`text-lg font-semibold ${
                    item.isPositive
                      ? 'text-foreground'
                      : 'text-muted-foreground line-through'
                  }`}>
                    {item.not}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New descriptive text section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 text-center"
          >
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              At UseKase, you'll help companies transform how they think and operate, using AI that delivers real, measurable outcomes.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We move fast, experiment fearlessly, and work side-by-side with the leaders shaping tomorrow's businesses. Here, builders become operators, and ideas become systems that last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group"
          >
            {/* Corner decorations */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-8 absolute -top-1 -left-1 border-l-2 border-t-2 rounded-tl-lg z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-8 absolute -top-1 -right-1 border-r-2 border-t-2 rounded-tr-lg z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-8 absolute -bottom-1 -left-1 border-l-2 border-b-2 rounded-bl-lg z-10" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-8 absolute -bottom-1 -right-1 border-r-2 border-b-2 rounded-br-lg z-10" />

            <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-lg border-2 border-primary/20 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-4">
                We’re not looking for followers. We're looking for doers.
              </p>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                → Join the builders, operators, and transformers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
