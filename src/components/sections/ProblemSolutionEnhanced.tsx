import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Check, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export default function ProblemSolutionEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredOldWay, setHoveredOldWay] = useState<string | null>(null);
  const [hoveredUsekaseWay, setHoveredUsekaseWay] = useState<string | null>(null);

  // Old Way categories - problems with traditional approaches
  const oldWayCategories: Category[] = [
    {
      id: "old-1",
      title: "Ownership",
      subtitle: "You pay forever for software you'll never own",
      icon: <ArrowRight className="w-8 h-8" />,
      featured: false,
    },
    {
      id: "old-2",
      title: "Cost Structure",
      subtitle: "Rising per-seat or usage fees with no end in sight",
      icon: <ArrowRight className="w-8 h-8" />,
    },
    {
      id: "old-3",
      title: "Delivery",
      subtitle: "Generic solutions that need extensive customization",
      icon: <ArrowRight className="w-8 h-8" />,
    },
    {
      id: "old-4",
      title: "Time to ROI",
      subtitle: "Months of integration, training, and 'change management'",
      icon: <ArrowRight className="w-8 h-8" />,
    },
    {
      id: "old-5",
      title: "Vendor Lock-in",
      subtitle: "Stuck with their roadmap, their pricing, their terms",
      icon: <ArrowRight className="w-8 h-8" />,
    },
  ];

  // Usekase Way categories - solutions we provide
  const usekaseWayCategories: Category[] = [
    {
      id: "new-1",
      title: "Ownership",
      subtitle: "You own the code, the models, and the infrastructure",
      icon: <Check className="w-8 h-8" />,
      featured: false,
    },
    {
      id: "new-2",
      title: "Cost Structure",
      subtitle: "Fixed project cost. After transfer, only your hosting & team",
      icon: <Check className="w-8 h-8" />,
    },
    {
      id: "new-3",
      title: "Delivery",
      subtitle: "Built specifically for your workflow from day one",
      icon: <Check className="w-8 h-8" />,
    },
    {
      id: "new-4",
      title: "Time to ROI",
      subtitle: "Live in production within 4-6 months, improving as you operate",
      icon: <Check className="w-8 h-8" />,
    },
    {
      id: "new-5",
      title: "Complete Independence",
      subtitle: "Complete independence after transfer. Extend it however you want",
      icon: <Check className="w-8 h-8" />,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Traditional AI Projects Fail —{" "}
            <span className="text-primary">and How We Fix It</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most companies face a painful choice: build AI capabilities in-house
            (expensive, risky, slow) or rent SaaS tools forever (convenient but
            costly). We offer a third way.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Old Way Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header outside container */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-destructive/80 to-destructive mb-4 text-destructive-foreground">
                  <X className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">The Old Way</h3>
              </div>

              {/* Container with categories */}
              <div className="bg-destructive/5 border-2 border-destructive/20 rounded-lg p-8">
                <div className="space-y-3">
                  {oldWayCategories.map((category) => (
                    <div
                      key={category.id}
                      className="relative group"
                      onMouseEnter={() => setHoveredOldWay(category.id)}
                      onMouseLeave={() => setHoveredOldWay(null)}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                          hoveredOldWay === category.id
                            ? 'h-32 border-destructive shadow-lg shadow-destructive/20 bg-destructive/5'
                            : 'h-24 border-border hover:border-destructive/50'
                        )}
                      >
                        {/* Corner brackets that appear on hover */}
                        {hoveredOldWay === category.id && (
                          <>
                            <div className="absolute top-3 left-3 w-6 h-6">
                              <div className="absolute top-0 left-0 w-4 h-0.5 bg-destructive" />
                              <div className="absolute top-0 left-0 w-0.5 h-4 bg-destructive" />
                            </div>
                            <div className="absolute bottom-3 right-3 w-6 h-6">
                              <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-destructive" />
                              <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-destructive" />
                            </div>
                          </>
                        )}

                        {/* Content */}
                        <div className="flex items-center justify-between h-full px-6 md:px-8">
                          <div className="flex-1">
                            <h3
                              className={cn(
                                "font-bold transition-colors duration-300 text-xl md:text-2xl",
                                hoveredOldWay === category.id ? 'text-destructive' : 'text-foreground'
                              )}
                            >
                              {category.title}
                            </h3>
                            {category.subtitle && (
                              <p
                                className={cn(
                                  "mt-1 transition-colors duration-300 text-sm md:text-base",
                                  hoveredOldWay === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                                )}
                              >
                                {category.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Icon appears on the right on hover */}
                          {category.icon && hoveredOldWay === category.id && (
                            <div className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {category.icon}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Usekase Way Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Header outside container */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-4 text-primary-foreground">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">The Usekase Way</h3>
              </div>

              {/* Container with categories */}
              <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
                <div className="space-y-3">
                  {usekaseWayCategories.map((category) => (
                    <div
                      key={category.id}
                      className="relative group"
                      onMouseEnter={() => setHoveredUsekaseWay(category.id)}
                      onMouseLeave={() => setHoveredUsekaseWay(null)}
                    >
                      <div
                        className={cn(
                          "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                          hoveredUsekaseWay === category.id
                            ? 'h-32 border-primary shadow-lg shadow-primary/20 bg-primary/5'
                            : 'h-24 border-border hover:border-primary/50'
                        )}
                      >
                        {/* Corner brackets that appear on hover */}
                        {hoveredUsekaseWay === category.id && (
                          <>
                            <div className="absolute top-3 left-3 w-6 h-6">
                              <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                              <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                            </div>
                            <div className="absolute bottom-3 right-3 w-6 h-6">
                              <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                              <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                            </div>
                          </>
                        )}

                        {/* Content */}
                        <div className="flex items-center justify-between h-full px-6 md:px-8">
                          <div className="flex-1">
                            <h3
                              className={cn(
                                "font-bold transition-colors duration-300 text-xl md:text-2xl",
                                hoveredUsekaseWay === category.id ? 'text-primary' : 'text-foreground'
                              )}
                            >
                              {category.title}
                            </h3>
                            {category.subtitle && (
                              <p
                                className={cn(
                                  "mt-1 transition-colors duration-300 text-sm md:text-base",
                                  hoveredUsekaseWay === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                                )}
                              >
                                {category.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Icon appears on the right on hover */}
                          {category.icon && hoveredUsekaseWay === category.id && (
                            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {category.icon}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
              <p className="text-lg mb-6">
                Ready to break free from recurring costs and vendor lock-in?
                Let's build AI capabilities you'll actually own.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
