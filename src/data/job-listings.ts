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
];
