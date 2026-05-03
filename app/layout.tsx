import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Async Standup Optimizer – Maximize Team Alignment",
  description: "Analyze async standup responses for engagement patterns and get optimization recommendations for remote engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c8271318-d792-4e65-a213-0a23974a80fb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
