import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShadcnExamples() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">ShadCN UI Components</h1>
          <p className="text-muted-foreground">
            Interactive examples showcasing various ShadCN UI components
          </p>
        </div>

        <div className="grid gap-8">
          {/* Button Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Button Component</CardTitle>
              <CardDescription>
                Buttons with different variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Card Examples */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Card with counter example</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">Count: {count}</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
                <Button
                  variant="outline"
                  onClick={() => setCount(Math.max(0, count - 1))}
                >
                  Decrement
                </Button>
                <Button variant="secondary" onClick={() => setCount(0)}>
                  Reset
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>
                  Example card showing header, content, and footer sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards are versatile containers for grouping related content.
                  They can include headers, descriptions, content areas, and
                  action footers.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action Button</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Dialog Example */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog Component</CardTitle>
              <CardDescription>Modal dialog with form example</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Example Dialog</DialogTitle>
                    <DialogDescription>
                      This is a modal dialog built with Radix UI and styled with
                      ShadCN components.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Input and Label Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Input & Label Components</CardTitle>
              <CardDescription>Form input examples with labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 max-w-md">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email-example">Email</Label>
                  <Input
                    id="email-example"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="disabled-input">Disabled Input</Label>
                  <Input
                    id="disabled-input"
                    placeholder="This input is disabled"
                    disabled
                  />
                </div>
                <Button className="w-full">Submit Form</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
