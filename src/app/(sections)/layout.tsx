import { geistMono, geistSans } from "@/app/layout";
import PageTransition from "@/components/transitionOverlays/SimplePageTransition";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTransition>
      <div
        className={`${geistSans.className} ${geistMono.variable} h-screen    overflow-auto`}
      >
        {children}
      </div>
    </PageTransition>
  );
}
