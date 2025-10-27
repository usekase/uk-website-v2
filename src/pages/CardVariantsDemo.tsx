import { Card } from "@/components/ui/card"

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!"
}

export default function CardVariantsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Card Variants Demo</h1>
        <p className="text-muted-foreground mb-12">
          Explore different card variants with unique visual styles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Default Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Default</h2>
            <Card {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Dots Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Dots</h2>
            <Card variant="dots" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Gradient Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Gradient</h2>
            <Card variant="gradient" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Plus Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Plus</h2>
            <Card variant="plus" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Neubrutalism Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Neubrutalism</h2>
            <Card variant="neubrutalism" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Inner Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Inner</h2>
            <Card variant="inner" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Lifted Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Lifted</h2>
            <Card variant="lifted" {...cardContent} className="max-w-[400px] bg-background" />
          </div>

          {/* Corners Card */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Corners</h2>
            <Card variant="corners" {...cardContent} className="max-w-[400px] bg-background" />
          </div>
        </div>
      </div>
    </div>
  )
}
