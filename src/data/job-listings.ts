export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  image: string;
}

export const jobListings: JobListing[] = [
  {
    id: "workflow-automation-specialist",
    title: "Workflow Automation Specialist",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Join our team to design and implement automated workflows that transform how businesses operate. You'll work directly with clients to understand their processes and build intelligent automation solutions.",
    responsibilities: [
      "Design and implement workflow automation solutions",
      "Collaborate with clients to identify automation opportunities",
      "Build and maintain integration pipelines",
      "Document processes and train client teams",
    ],
    requirements: [
      "3+ years experience in workflow automation or process engineering",
      "Strong understanding of APIs and integration platforms",
      "Experience with automation tools (Zapier, Make, n8n, or similar)",
      "Excellent communication and problem-solving skills",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "senior-developer",
    title: "Senior Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "We're looking for an experienced developer to lead technical implementations of AI-powered solutions. You'll architect systems, mentor junior developers, and work closely with our Build-Operate-Transfer teams.",
    responsibilities: [
      "Lead architecture and development of AI-powered applications",
      "Mentor and guide junior developers",
      "Design scalable, maintainable systems",
      "Collaborate with product and operations teams",
    ],
    requirements: [
      "5+ years of software development experience",
      "Strong expertise in modern web technologies (React, Node.js, Python)",
      "Experience with AI/ML integration and APIs",
      "Track record of delivering complex systems end-to-end",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "applied-ai-researcher",
    title: "Applied AI Researcher",
    department: "Research",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Join our AI Systems team to design compound, end-to-end architectures that orchestrate perception, reasoning, planning, and execution. You'll integrate diverse components including LLMs, retrievers, and agents into systems performing across enterprise workflows.",
    responsibilities: [
      "Design and implement compound AI systems and agentic collaboration architectures",
      "Investigate coordination, information flow, and emergent behavior across multiple agents and models",
      "Integrate LLMs, retrievers, and agents into enterprise workflow systems",
      "Prototype and experiment with novel AI system architectures delivering measurable business impact",
    ],
    requirements: [
      "Expertise in compound AI systems and agentic collaboration techniques (ensembling, ReAct, graph-of-thoughts)",
      "Published research work or demonstrated results via papers, social media, or other platforms",
      "Active daily use of AI tools (ChatGPT, Cursor, Perplexity) to enhance workflow",
      "Strong programming and data analysis capabilities for rapid prototyping",
      "Preference for demonstrable solutions over theoretical elegance",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "product-manager-contact-center",
    title: "Product Manager",
    department: "Product",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Lead product management for our various projects across enterprise organizations & SMBs. You'll build and scale a team while transforming existing solutions into a scalable, modular stack for customers.",
    responsibilities: [
      "Define solution roadmap emphasizing modularity and reuse",
      "Develop SME-facing tools including SME Workbench, Agent Assist, and Closed-Loop Optimizer",
      "Engage directly with enterprise customers for feedback validation and product iteration",
      "Partner with Implementation teams to extract deployment learnings and improve product",
      "Coordinate across Engineering, AI, GTM, and Strategy functions",
      "Monitor competitive landscape and contact center platform trends",
      "Support GTM efforts including pricing, packaging, and analyst engagement",
      "Establish performance metrics and optimization loops for continuous improvement",
    ],
    requirements: [
      "10+ years of product management experience with proven track record",
      "Communications platform background required",
      "Growth systems expertise (onboarding, experimentation, product-led growth)",
      "GTM proficiency including launches, pricing, and positioning",
      "Experience executing in early-stage, high-growth environments",
      "Familiarity with applied AI products and enterprise automation",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Architect and operate cloud-native platforms for AI-powered enterprise systems. Build secure, scalable, and easily deployable infrastructure supporting enterprise deployments across cloud and hybrid environments.",
    responsibilities: [
      "Design resilient deployments across cloud and hybrid environments using Kubernetes and microservices",
      "Develop modular Terraform and GitOps configurations for multi-cloud consistency",
      "Build CI/CD pipelines leveraging Flux, Helm, Bazel, and GitHub Actions",
      "Embed security through IAM, secrets management, and service-to-service communication",
      "Establish observability using Prometheus, Grafana, OpenTelemetry, and Datadog",
      "Design infrastructure for AI systems, including agent integrations and deployments",
    ],
    requirements: [
      "6+ years in infrastructure, DevOps, or systems engineering",
      "Deep expertise in AWS, Azure, or GCP with Kubernetes proficiency",
      "Strong Infrastructure as Code experience (Terraform or Pulumi)",
      "Python and Linux proficiency",
      "Knowledge of microservices, distributed systems, networking, and security",
      "Bachelor's in Computer Science/Engineering or equivalent experience",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: "ai-strategist-lead",
    title: "AI Strategist",
    department: "Product",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Direct complex, high-impact customer engagements at enterprise scale. Partner with senior technical leaders to oversee multidisciplinary teams delivering transformative AI solutions to enterprise clients.",
    responsibilities: [
      "Build C-suite relationships and serve as strategic advisor to executive stakeholders",
      "Lead engagements from initial scoping through sustained value delivery",
      "Identify high-value problems and align AI solutions to measurable ROI",
      "Direct teams of 10+ professionals across engineering, research, and program management",
      "Ensure solutions meet enterprise performance, compliance, and scalability requirements",
      "Drive change management and adoption, embedding systems into customer workflows",
      "Represent customer insights to influence product development and platform evolution",
    ],
    requirements: [
      "10+ years managing enterprise-scale engagements, ideally involving AI",
      "Demonstrated people leadership and cross-functional team management",
      "C-level communication skills with ability to translate between technical and business audiences",
      "Strategic framing and executive influence capabilities",
      "Customer-focused mindset emphasizing tangible business impact",
      "Technical proficiency in Python, R, SQL, or similar tools with solid AI/ML understanding",
      "Comfort with ambiguity, bias toward action, and willingness to travel 25-75%",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400&auto=format&fit=crop",
  },
];
