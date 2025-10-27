import { Gallery4 } from "@/components/ui/gallery4";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SectorsEnhanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    {
      id: 1,
      title: "Manufacturing & Supply Chain",
      description: "Optimizing production and logistics",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      content: () => {
        return (
          <div className="space-y-4">
            <p>
              We've helped manufacturers reduce production bottlenecks by 40%
              through AI-powered predictive maintenance and quality control
              systems.
            </p>
            <p>
              Our K-Solutions integrate seamlessly with existing MES and ERP
              systems, providing real-time insights into production efficiency,
              inventory optimization, and supply chain visibility.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Predictive maintenance and downtime reduction</li>
              <li>Quality control automation with computer vision</li>
              <li>Supply chain optimization and demand forecasting</li>
              <li>Inventory management and just-in-time production</li>
            </ul>
          </div>
        );
      },
    },
    {
      id: 2,
      title: "Logistics & Packaging",
      description: "Streamlining distribution and delivery",
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      content: () => {
        return (
          <div className="space-y-4">
            <p>
              Our AI capabilities have enabled logistics companies to optimize
              route planning, reduce fuel costs by 25%, and improve delivery
              accuracy to 99.5%.
            </p>
            <p>
              From warehouse automation to last-mile delivery optimization, we
              build custom solutions that scale with your operations.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Route optimization and dynamic dispatch</li>
              <li>Warehouse automation and robotics integration</li>
              <li>Package tracking and delivery prediction</li>
              <li>Load optimization and capacity planning</li>
            </ul>
          </div>
        );
      },
    },
    {
      id: 3,
      title: "Financial Services & Fintech",
      description: "Enhancing security and customer experience",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      content: () => {
        return (
          <div className="space-y-4">
            <p>
              We've built fraud detection systems that process millions of
              transactions daily, reducing false positives by 60% while
              maintaining 99.9% accuracy.
            </p>
            <p>
              Our solutions help financial institutions enhance customer
              experience, automate compliance, and unlock new revenue streams
              through AI-powered insights.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time fraud detection and prevention</li>
              <li>Credit risk assessment and underwriting automation</li>
              <li>Customer behavior analysis and personalization</li>
              <li>Regulatory compliance and reporting automation</li>
            </ul>
          </div>
        );
      },
    },
    {
      id: 4,
      title: "Retail & Consumer Goods",
      description: "Personalizing customer experiences",
      src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      content: () => {
        return (
          <div className="space-y-4">
            <p>
              Our AI capabilities have helped retailers increase conversion
              rates by 35% through personalized recommendations and dynamic
              pricing strategies.
            </p>
            <p>
              From demand forecasting to customer sentiment analysis, we build
              solutions that drive sales and improve customer satisfaction.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized product recommendations</li>
              <li>Dynamic pricing and promotion optimization</li>
              <li>Demand forecasting and inventory planning</li>
              <li>Customer sentiment analysis and feedback processing</li>
            </ul>
          </div>
        );
      },
    },
    {
      id: 5,
      title: "Professional Services",
      description: "Automating knowledge work",
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      content: () => {
        return (
          <div className="space-y-4">
            <p>
              We've helped professional service firms automate document
              processing, reduce research time by 50%, and improve client
              delivery speed by 40%.
            </p>
            <p>
              Our K-Solutions transform how knowledge workers operate, from
              intelligent document search to automated report generation.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Intelligent document processing and extraction</li>
              <li>Automated research and knowledge management</li>
              <li>Client communication and engagement automation</li>
              <li>Project planning and resource optimization</li>
            </ul>
          </div>
        );
      },
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We <span className="text-primary">Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with enterprises across diverse industries to build
            custom AI capabilities that deliver measurable results. Our
            experience spans complex operational environments where precision,
            scalability, and reliability are non-negotiable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Gallery4 images={sectors} />
        </motion.div>
      </div>
    </section>
  );
}
