import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davis Enterprises - Website Redesign Brief",
  description: "Competitive analysis and redesign proposal for davisenterprises.com.au",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif", background: "#0a0f1a", color: "#e0e8f5" }}>
        {children}
      </body>
    </html>
  );
}
