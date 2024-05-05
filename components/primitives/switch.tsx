"use client";

import * as React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "data-[state=unchecked]:dark:bg-gray-550 data-[state=unchecked]:bg-gray-250 group relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full outline-none transition-colors data-[state=checked]:bg-green-600",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "absolute top-1 flex h-4 w-4 scale-100 rounded-full bg-white transition-all hover:scale-105 group-active:w-5 data-[state=checked]:left-6 data-[state=unchecked]:left-1 data-[state=checked]:group-active:left-5",
      )}
    />
  </SwitchPrimitive.Root>
));

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
