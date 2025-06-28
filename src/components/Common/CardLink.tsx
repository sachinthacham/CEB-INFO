import { EyeIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

type CardLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  target?: string;
  rel?: string;
};

export default function CardLink({
  href,
  children,
  icon,
  target = "_blank",
  rel = "noopener noreferrer",
}: CardLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center px-4 py-1.5 text-blue-700 rounded-md text-sm shadow-md hover:shadow-lg bg-blue-50 hover:bg-blue-200 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {icon ?? <EyeIcon className="w-4 h-4 mr-2" />}
      {children}
    </a>
  );
}
