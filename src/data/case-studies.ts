export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  image: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  slug?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "financial-services-underwriting",
    industry: "Financial Services",
    title: "Financial Services – Next-Gen Underwriting AI",
    image:
      "https://assets.everspringpartners.com/1d/30/93e3c8c4433dab3f70e89babe519/msfa-what-is-fintech.jpg",
    challenge: "Manual workflows, high cost, slow decisioning.",
    solution:
      "Deployed agent in 9 months; embedded team; handed over in Month 12.",
    outcomes: [
      "+35% throughput",
      "–20% cost",
      "Full transfer to client operations",
    ],
    slug: "financial-services-underwriting",
  },
  {
    id: "manufacturing-supply-chain",
    industry: "Manufacturing",
    title: "Manufacturing – Supply Chain Re-architecture",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2400&auto=format&fit=crop",
    challenge: "Fragmented data, poor demand forecasting, inventory waste.",
    solution:
      "Built predictive supply chain system with real-time insights; transferred complete ownership after training internal team.",
    outcomes: [
      "–40% inventory waste",
      "+25% forecast accuracy",
      "Complete team autonomy within 18 months",
    ],
    slug: "manufacturing-supply-chain",
  },
];

export const testimonials = [
  {
    quote:
      "Usekase didn't just deliver a tool — they became part of our team, and we now own the system.",
    name: "Sarah Mitchell",
    designation: "COO, Mid-Market Manufacturing",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The BOT model meant we weren't just getting software — we were getting knowledge transfer. Our team now understands how everything works.",
    name: "David Chen",
    designation: "VP of Technology, Financial Services",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The Flywheel financing model was a game-changer. We got world-class AI capability without the upfront capital expense, and ROI paid for itself.",
    name: "Emily Rodriguez",
    designation: "CFO, Logistics & Fulfillment Provider",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "We were skeptical about owning AI infrastructure, but Usekase made it seamless. The transfer process was thorough.",
    name: "James Patterson",
    designation: "Director of Engineering, Retail Operations",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];
