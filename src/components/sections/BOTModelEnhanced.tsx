import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";

export default function BOTModelEnhanced() {
  const features = [
    {
      title: "Build (4-6 months)",
      description:
        "We design and develop your AI capability from scratch, tailored to your specific workflows and data. Custom AI models trained on your data, production-ready infrastructure, and initial team training begins.",
      imageUrl:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      title: "Operate (4-6 months)",
      description:
        "We run it in production alongside your team, optimizing performance and training your people hands-on. Live in production environment with continuous optimization and monitoring while your team learns by doing.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      title: "Transfer (6 months)",
      description:
        "We gradually hand over full ownership — code, infrastructure, and knowledge — to your team. Complete code and IP transfer, full infrastructure ownership, with your team running it independently.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      title: "Monitor (Ongoing)",
      description:
        "Optional ongoing support as you scale and extend the capability on your own terms. Performance monitoring dashboards, optional advisory support, and the freedom to extend and customize freely.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section id="model">
      <StickyFeatureSection
        features={features}
        headerTitle="Our Model: Build · Operate · Transfer · Monitor"
        headerSubtitle="A proven framework for delivering AI capabilities that become truly yours — no dependencies, no lock-in, just ownership."
      />
    </section>
  );
}
