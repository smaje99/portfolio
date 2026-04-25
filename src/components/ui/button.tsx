import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 data-[icon=inline-end]:-me-0.5 data-[icon=inline-start]:-ms-0.5",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-[0_0_0_1px_rgb(224_255_79/12%),0_14px_34px_rgb(224_255_79/24%)] hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--primary)_90%,white)] hover:shadow-[0_0_0_1px_rgb(224_255_79/18%),0_22px_48px_rgb(224_255_79/30%)] focus-visible:ring-primary',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--destructive)_88%,black)]',
        outline:
          'border-border/75 bg-card/66 text-card-foreground shadow-sm hover:-translate-y-0.5 hover:border-primary/70 hover:bg-accent/90 hover:text-foreground',
        secondary:
          'border border-transparent bg-secondary/70 text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:border-border/60 hover:bg-[color-mix(in_srgb,var(--secondary)_90%,white)]',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-6 text-sm',
        icon: 'size-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
