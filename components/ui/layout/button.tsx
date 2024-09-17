import {
  ButtonProps,
  Button as ButtonSDN,
  buttonVariants,
} from "@/components/sui/button";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <ButtonSDN
        className={twMerge("bg-theme-grey5", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
