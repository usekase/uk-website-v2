import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Target, Building2, Zap, Handshake, TrendingUp } from "lucide-react";

export default function CompanyMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-zinc-50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16">
            To make AI transformation accessible to every business, and ensure
            sustainable impact by building the capabilities where they belong--
            inside our clients' organisations.
          </p>

          {/* Build the Future Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Build the Future of AI-Enabled Business
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UseKase is where strategy meets execution — helping companies reimagine how they operate through practical, scalable AI transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded and led by practitioners who've sat on both sides of transformation — as management consultants and as industry executives driving real change — our team brings hands-on experience from companies such as Accenture, Pandora, Takeda, FUJIFILM, Singtel, UOB, Unilever, Microsoft, and many more across +27 industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We combine strategic discipline with operational know-how, delivering real capabilities and outcomes that endure far beyond the slide deck.
            </p>

            {/* Quote */}
            <div className="relative border-l-4 border-primary pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-semibold italic text-foreground">
                "We partner with ambitious leaders and exceptional talent to build AI-powered capabilities that will transcend generations."
              </p>
            </div>
          </motion.div>

          {/* Our DNA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="border-t-2 border-border pt-12 mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our DNA</h3>
              <p className="text-xl text-muted-foreground mb-2">
                We don't just talk about transformation — we make it happen.
              </p>
              <p className="text-xl text-muted-foreground">
                We build, operate, and transfer what others promise — staying until success speaks for itself.
              </p>
            </div>

            {/* Four DNA Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DNAPrinciple
                number="1"
                title="We Build What Matters"
                description="We chase real impact, not noise. Every system we design exists to move the needle - creating measurable growth, efficiency, and capability."
                icon={<Building2 className="w-6 h-6" />}
              />
              <DNAPrinciple
                number="2"
                title="We Master the Pace of Change"
                description="The speed of technological innovation is mind-blowing - and we thrive with it. We merge the latest breakthroughs with proven methods to create cutting-edge solutions that are built to last."
                icon={<Zap className="w-6 h-6" />}
              />
              <DNAPrinciple
                number="3"
                title="We Win Together"
                description="Our model is built on shared success - we co-invest in outcomes, not billable hours. When our clients win, we win - and we see it through."
                icon={<Handshake className="w-6 h-6" />}
              />
              <DNAPrinciple
                number="4"
                title="We Think Long-Term"
                description="We design for legacy, not headlines. We build relationships, systems, and capabilities that keep delivering long after the hype fades."
                icon={<TrendingUp className="w-6 h-6" />}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const DNAPrinciple = ({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="group relative">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-colors duration-200">
          <div className="text-primary group-hover:text-white transition-colors duration-200">
            {icon}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">
            <span className="text-primary">{number}.</span> {title}
          </h4>
          <p className="text-md text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
