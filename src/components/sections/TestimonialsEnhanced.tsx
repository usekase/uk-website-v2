import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "Usekase didn't just build us an AI tool — they built us an AI capability we truly own. Six months after transfer, we've extended it to three new use cases. No vendor calls needed.",
      name: "Sarah Mitchell",
      designation: "Head of Operations, Mid-Market Manufacturing Company",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The Flywheel financing model was a game-changer. We got a world-class AI capability without the upfront capital expense, and the ROI paid for itself within the first year.",
      name: "David Chen",
      designation: "CFO, Logistics & Fulfillment Provider",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The BOT model meant we weren't just getting software — we were getting knowledge transfer. Our team now understands how everything works and can maintain it ourselves.",
      name: "Emily Rodriguez",
      designation: "VP of Technology, Financial Services Firm",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "We were skeptical about owning AI infrastructure, but Usekase made it seamless. The transfer process was thorough, and they stood by us during the Monitor phase until we were confident.",
      name: "James Patterson",
      designation: "Director of Engineering, Retail Operations",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The KIBOT Engine's K-Solutions saved us months of development time. We got custom AI capabilities at a fraction of the cost and time of building from scratch.",
      name: "Maria Santos",
      designation: "Chief Innovation Officer, Professional Services",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from clients who now own their
            AI future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}
