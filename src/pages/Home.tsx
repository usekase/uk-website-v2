import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShadCN + TweakCN Demo</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A modern React + TypeScript application showcasing ShadCN UI components and TweakCN customization
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/shadcn-examples">
              <Button size="lg">Explore ShadCN Components</Button>
            </Link>
            <Link to="/tweakcn-examples">
              <Button variant="outline" size="lg">View TweakCN Examples</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>ShadCN UI</CardTitle>
              <CardDescription>Beautiful, accessible component library</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ShadCN UI provides a collection of beautifully designed, accessible components
                built with Radix UI and Tailwind CSS. Components include buttons, cards, dialogs,
                forms, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TweakCN</CardTitle>
              <CardDescription>Component customization made easy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                TweakCN allows you to easily customize ShadCN components with additional variants,
                styles, and functionality while maintaining the same API and accessibility standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>Type-safe development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with TypeScript for enhanced developer experience, better code quality,
                and improved maintainability with full type checking and IntelliSense support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vite</CardTitle>
              <CardDescription>Lightning-fast build tool</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Powered by Vite for instant server start, lightning-fast HMR, and optimized
                production builds. Experience a modern development workflow.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
