import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davis Enterprises Holdings",
  description: "We back bold Australian founders building what's next. Private capital across AI, space, robotics, and deep tech.",
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
