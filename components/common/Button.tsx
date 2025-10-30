import type { ComponentProps } from "react";

function Button({ ...props }: ComponentProps<"button">) {
  return <button {...props}></button>;
}

export default Button;
