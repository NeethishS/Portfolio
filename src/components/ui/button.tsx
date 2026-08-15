import * as React from "react"
import { Slot } from "@radix-ui/react-slot@1.1.2"
import { cva, type VariantProps } from "class-variance-authority@0.7.1"
import { cn } from "./utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 dark:focus:outline-blue-400",
        secondary: "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-slate-400 dark:focus:outline-slate-500",
        ghost: "bg-transparent text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 focus:outline-2 focus:outline-offset-2 focus:outline-slate-400 dark:focus:outline-slate-500",
        default: "bg-slate-950 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="w-4 h-4 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && !isLoading && <span className="inline-flex mr-1">{icon}</span>}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
