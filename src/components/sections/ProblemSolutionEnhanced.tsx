import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconClock } from "@tabler/icons-react";

export default function ProblemSolutionEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-tight text-black dark:text-black">
            <span className="text-primary">See</span> the Results<br />
            <span className="text-primary">Own</span> the Capability<br />
            <span className="text-primary">Scale</span> the Advantage
          </h2>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              UseKase works across your entire value chain to pinpoint where AI delivers the <span className="text-primary">fastest</span>, most certain returns.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Each initiative is designed to pay for itself - turning everyday processes into <span className="text-primary">measurable</span> growth engines.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We don't build solutions you must rely on us to run. We transfer the tools, talent, and <span className="text-primary">systems</span> directly to your team - so the capability becomes yours.
            </p>
          </div>
        </motion.div>

          {/* Three Value Props - HIDDEN */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-md p-6 border-2 border-transparent group-hover:border-border transition-colors">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-200">
                  <IconEye className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-sm text-muted-foreground">
                  Co-design and deploy your AI system.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-md p-6 border-2 border-transparent group-hover:border-border transition-colors">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-200">
                  <IconShield className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Operate</h3>
                <p className="text-sm text-muted-foreground">
                  We run and optimise until the value is proven.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-md p-6 border-2 border-transparent group-hover:border-border transition-colors">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-primary size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10" />

                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors duration-200">
                  <IconTrendingUp className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transfer</h3>
                <p className="text-sm text-muted-foreground">
                  You take ownership. The team, tech and processes are yours.
                </p>
              </div>
            </motion.div>
          </div> */}

        {/* Speed/Timeline Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative max-w-6xl mx-auto bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md p-8 md:p-10">
            {/* Corner decorations */}
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

            <div className="flex items-center justify-center gap-4 mb-4">
              <IconClock className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold">Speed to Value</h3>
            </div>
            <p className="text-lg text-center text-muted-foreground">
              You'll see first results in <span className="font-bold text-foreground">weeks, not months</span>, and sustainable impact in <span className="font-bold text-foreground">months, not years.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
