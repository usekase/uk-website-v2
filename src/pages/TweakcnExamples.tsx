import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Create custom button variants extending ShadCN's base styles
// This demonstrates the TweakCN concept of extending component variants
const customButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New custom variants added with TweakCN-style approach
        gradient: "bg-primary/10 text-white hover:from-purple-600 hover:to-pink-600",
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // New custom sizes added with TweakCN-style approach
        xl: "h-14 rounded-md px-10 text-lg",
        xs: "h-7 rounded-md px-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Custom Button component with extended variants
interface TweakedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof customButtonVariants> {}

function TweakedButton({ className, variant, size, ...props }: TweakedButtonProps) {
  return (
    <button
      className={cn(customButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export default function TweakcnExamples() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Component Variant Customization</h1>
          <p className="text-muted-foreground">
            Examples demonstrating how to extend ShadCN UI components with custom variants using class-variance-authority (the approach used by TweakCN)
          </p>
        </div>

        <div className="grid gap-8">
          {/* Custom Button Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Button Variants</CardTitle>
              <CardDescription>
                New button styles added using CVA without modifying the original component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Custom Color Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <TweakedButton variant="gradient">Gradient Button</TweakedButton>
                    <TweakedButton variant="success">Success Button</TweakedButton>
                    <TweakedButton variant="warning">Warning Button</TweakedButton>
                    <TweakedButton variant="info">Info Button</TweakedButton>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Original Variants Still Work</h3>
                  <div className="flex flex-wrap gap-4">
                    <TweakedButton variant="default">Default</TweakedButton>
                    <TweakedButton variant="secondary">Secondary</TweakedButton>
                    <TweakedButton variant="outline">Outline</TweakedButton>
                    <TweakedButton variant="destructive">Destructive</TweakedButton>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Custom Size Variants</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <TweakedButton size="xs">Extra Small</TweakedButton>
                    <TweakedButton size="sm">Small</TweakedButton>
                    <TweakedButton size="default">Default</TweakedButton>
                    <TweakedButton size="lg">Large</TweakedButton>
                    <TweakedButton size="xl">Extra Large</TweakedButton>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Combining Custom Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <TweakedButton variant="gradient" size="xl">
                      Large Gradient
                    </TweakedButton>
                    <TweakedButton variant="success" size="xs">
                      Tiny Success
                    </TweakedButton>
                    <TweakedButton variant="warning" size="lg">
                      Large Warning
                    </TweakedButton>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Example */}
          <Card>
            <CardHeader>
              <CardTitle>How Component Extension Works</CardTitle>
              <CardDescription>
                Extending component variants without modifying the source using CVA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`import { cva } from "class-variance-authority";

// Extend ShadCN button with custom variants
const customButtonVariants = cva(
  "base-classes...",
  {
    variants: {
      variant: {
        // Include all original ShadCN variants
        default: "bg-primary...",
        // Add your custom variants
        gradient: "bg-gradient-to-r from-purple-500...",
        success: "bg-green-600 text-white...",
      },
      size: {
        default: "h-10 px-4 py-2",
        xl: "h-14 rounded-md px-10 text-lg",
        xs: "h-7 rounded-md px-2 text-xs",
      },
    },
  }
);

// Use the extended variants
<button className={customButtonVariants({ variant: "gradient" })}>
  Gradient Button
</button>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Benefits of Component Variant Extension</CardTitle>
              <CardDescription>
                Why extend component variants this way
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Non-destructive:</strong> Original component variants remain unchanged
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Type-safe:</strong> Full TypeScript support with proper type inference
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Composable:</strong> Combine original and custom variants seamlessly
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Maintainable:</strong> Easy to update ShadCN components without losing customizations
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Reusable:</strong> Create variant libraries that can be shared across projects
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Comparison with Standard Button */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard ShadCN Button</CardTitle>
                <CardDescription>Using the original component</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full">Default Variant</Button>
                  <Button variant="secondary" className="w-full">
                    Secondary Variant
                  </Button>
                  <Button variant="outline" className="w-full">
                    Outline Variant
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CVA Enhanced Button</CardTitle>
                <CardDescription>With custom variants added</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <TweakedButton variant="gradient" className="w-full">
                    Gradient Variant
                  </TweakedButton>
                  <TweakedButton variant="success" className="w-full">
                    Success Variant
                  </TweakedButton>
                  <TweakedButton variant="warning" className="w-full">
                    Warning Variant
                  </TweakedButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
