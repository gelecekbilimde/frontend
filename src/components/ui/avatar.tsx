"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Avvvatars from "avvvatars-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...properties }, reference) => (
  <AvatarPrimitive.Root
    ref={reference}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...properties}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...properties }, reference) => (
  <AvatarPrimitive.Image
    ref={reference}
    className={cn("aspect-square h-full w-full", className)}
    {...properties}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(({ className, ...props }, ref) => <AvatarPrimitive.Fallback ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...props} />);
// AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
type Style = "character" | "shape";

interface AvatarFallbackProperties {
  displayValue?: string;
  // this should be unique to user, it can be email, user id, or full name
  value: any;
  size?: number;
  shadow?: boolean;
  style?: Style;

  // toggle border
  border?: boolean;
  borderSize?: number;
  borderColor?: string;
  radius?: number;
}

const AvatarFallback = (properties: AvatarFallbackProperties): JSX.Element => {
  return <Avvvatars {...(properties as any)} radius={6} />;
};
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
