import { WavePath } from "@/components/ui/wave-path";

export default function CaseStudiesWithWave() {
  return (
    <section className="relative bg-white dark:bg-zinc-800 py-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center max-w-6xl mx-auto">
          <WavePath className="text-primary" />
        </div>
      </div>
    </section>
  );
}
