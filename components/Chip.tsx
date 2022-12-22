import { ReactNode } from "react";

export const Chip = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <span
      className="mr-2 mb-2 rounded-full px-2 py-1.5 text-xs nx-bg-primary-50 font-medium nx-text-primary-600 dark:nx-bg-primary-500/10 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
      {...props}
    >
      {children}
    </span>
  );
};
