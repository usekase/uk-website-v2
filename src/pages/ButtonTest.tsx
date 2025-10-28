import { Button } from "@/components/ui/button";

export default function ButtonTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold mb-8">Button Visual Test</h1>

        {/* Primary (Default) Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Primary Buttons (Default Variant)</h2>
          <div className="flex flex-wrap gap-4 items-start p-8 bg-zinc-900 rounded-lg">
            <div className="space-y-2">
              <Button data-testid="btn-primary-default">Primary Default</Button>
              <p className="text-xs text-zinc-400">Default state</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-primary-disabled" disabled>Primary Disabled</Button>
              <p className="text-xs text-zinc-400">Disabled state</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-primary-sm" size="sm">Primary Small</Button>
              <p className="text-xs text-zinc-400">Small size</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-primary-lg" size="lg">Primary Large</Button>
              <p className="text-xs text-zinc-400">Large size</p>
            </div>
          </div>
          <div className="p-4 bg-zinc-800 rounded text-sm">
            <p className="font-semibold mb-2">Expected behavior:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li>On hover: Corner decorations fade in (4 corner borders)</li>
              <li>On hover: Border changes to primary color</li>
              <li>Background should have opacity transition (90%)</li>
              <li>Transitions should be smooth (200ms for corners)</li>
            </ul>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Secondary Buttons</h2>
          <div className="flex flex-wrap gap-4 items-start p-8 bg-zinc-900 rounded-lg">
            <div className="space-y-2">
              <Button data-testid="btn-secondary-default" variant="secondary">Secondary Default</Button>
              <p className="text-xs text-zinc-400">Default state</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-secondary-disabled" variant="secondary" disabled>Secondary Disabled</Button>
              <p className="text-xs text-zinc-400">Disabled state</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-secondary-sm" variant="secondary" size="sm">Secondary Small</Button>
              <p className="text-xs text-zinc-400">Small size</p>
            </div>
            <div className="space-y-2">
              <Button data-testid="btn-secondary-lg" variant="secondary" size="lg">Secondary Large</Button>
              <p className="text-xs text-zinc-400">Large size</p>
            </div>
          </div>
          <div className="p-4 bg-zinc-800 rounded text-sm">
            <p className="font-semibold mb-2">Expected behavior:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li>On hover: Corner decorations fade in (4 corner borders)</li>
              <li>On hover: Border changes to primary color</li>
              <li>Background should have opacity transition (80%)</li>
              <li>Corner decorations should be zinc-700 color</li>
            </ul>
          </div>
        </section>

        {/* Other Variants (no corners) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Other Variants (No Corner Decorations)</h2>
          <div className="flex flex-wrap gap-4 items-start p-8 bg-zinc-900 rounded-lg">
            <Button data-testid="btn-outline" variant="outline">Outline</Button>
            <Button data-testid="btn-ghost" variant="ghost">Ghost</Button>
            <Button data-testid="btn-destructive" variant="destructive">Destructive</Button>
            <Button data-testid="btn-link" variant="link">Link</Button>
          </div>
          <div className="p-4 bg-zinc-800 rounded text-sm">
            <p className="font-semibold mb-2">Expected behavior:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li>No corner decorations should appear on these variants</li>
              <li>Standard hover effects only (background/color changes)</li>
            </ul>
          </div>
        </section>

        {/* Interactive Test Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Interactive Test - Hover Me!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-zinc-900 rounded-lg">
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Slowly hover over this button and observe the corner decorations appearing:</p>
              <Button data-testid="btn-test-primary" size="lg" className="w-full">
                Hover to Test Primary
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-zinc-300">Slowly hover over this button and observe the corner decorations appearing:</p>
              <Button data-testid="btn-test-secondary" variant="secondary" size="lg" className="w-full">
                Hover to Test Secondary
              </Button>
            </div>
          </div>
        </section>

        {/* Click Test */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Click Animation Test</h2>
          <div className="flex flex-wrap gap-4 p-8 bg-zinc-900 rounded-lg">
            <Button
              data-testid="btn-click-test-primary"
              onClick={() => console.log('Primary clicked')}
            >
              Click Me (Primary)
            </Button>
            <Button
              data-testid="btn-click-test-secondary"
              variant="secondary"
              onClick={() => console.log('Secondary clicked')}
            >
              Click Me (Secondary)
            </Button>
          </div>
          <div className="p-4 bg-zinc-800 rounded text-sm">
            <p className="font-semibold mb-2">Expected behavior:</p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li>Click should feel responsive</li>
              <li>Corner decorations should remain visible during click</li>
              <li>No layout shift or jitter during interaction</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
