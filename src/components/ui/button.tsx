import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const shouldHaveCorners = variant === "default" || variant === "secondary"

    if (shouldHaveCorners) {
      return (
        <div className="relative inline-flex group">
          {/* Corner decorations - only visible on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-zinc-700 size-4 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md z-10 pointer-events-none" />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-zinc-700 size-4 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md z-10 pointer-events-none" />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-zinc-700 size-4 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md z-10 pointer-events-none" />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-zinc-700 size-4 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md z-10 pointer-events-none" />

          <Comp
            className={cn(
              buttonVariants({ variant, size }),
              "border-2 border-transparent group-hover:border-primary transition-colors",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
