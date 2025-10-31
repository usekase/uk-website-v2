import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";

export default function BOTModelEnhanced() {
  const features = [
    {
      title: "Layer 1: Industry",
      subtitle: "Where the Future Is Being Re-Architected",
      description:
        "We bring deep understanding of how AI is reshaping key industries and where to compete next.",
      details:
        "Our industry practices focus on the sectors driving the real economy: Manufacturing & Supply Chain • Logistics & Distribution • Retail & Consumer Goods • Financial & Professional Services • Sustainability & ESG",
      finalComment:
        "We start by identifying where AI can move the market — not just your metrics.",
      imageUrl:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      title: "Layer 2: Business Domains",
      subtitle: "Where Performance Lives",
      description:
        "Within every industry, we work across the domains that define success: Operations • Sales & Customer Experience • Finance • Supply Chain • People & Organization • Sustainability",
      details:
        "We connect strategy to execution by focusing on functional leverage points — the areas where intelligent systems create measurable uplift and efficiency.",
      finalComment:
        "We target the functions that drive the P&L — and turn them into growth engines.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      title: "Layer 3: Your Company Context",
      subtitle: "Where Competitive Advantage Is Built",
      description: "No two businesses start from the same place.",
      details:
        "We design every solution around your data, systems, and people — building the internal capabilities, culture, and confidence needed to sustain results long after hand-over.",
      finalComment: "Because advantage isn't installed — it's built from within.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      bgColor: "",
      textColor: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section id="model">
      <StickyFeatureSection features={features} />

      {/* Quote Section */}
      <div className="bg-gray-50 dark:bg-gray-900 pb-12 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md p-8 md:p-10">
            {/* Corner decorations */}
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
            <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-8 items-center">
              {/* Photo and Attribution */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFaoqTgI8kBQw/profile-displayphoto-shrink_800_800/B4DZaF110HH4Ag-/0/1746002206743?e=1763596800&v=beta&t=Y-GrA4S8I8mfbQ7V9RbtM0wVsD6GBcKB5dI-_whi1dA"
                  alt="Martin Gents"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-3 border-2 border-zinc-200 dark:border-zinc-600"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base">
                    Martin Gents
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Founder & CEO, Usekase
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex items-center">
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed italic">
                  "By working across all three layers, Usekase delivers
                  solutions that are globally informed, operationally grounded,
                  and uniquely yours."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
