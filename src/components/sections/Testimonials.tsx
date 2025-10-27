import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "Usekase didn't just build us an AI tool — they built us an AI capability we truly own. Six months after transfer, we've extended it to three new use cases. No vendor calls needed.",
      author: "Head of Operations",
      company: "Mid-Market Manufacturing Company",
    },
    {
      quote:
        "The Flywheel financing model was a game-changer. We got a world-class AI capability without the upfront capital expense, and the ROI paid for itself within the first year.",
      author: "CFO",
      company: "Logistics & Fulfillment Provider",
    },
  ];

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Results That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from clients who now own their
            AI future.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
