import { geistMono, geistSans } from "@/app/layout";
import PageTransition from "@/components/transitionOverlays/SimplePageTransition";

export default function ThirdSectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageTransition>
      <div
        className={`${geistSans.className} ${geistMono.variable} flex flex-col h-screen overflow-auto`}
      >
        <div className="flex-1">{children}</div>
      </div>
    </PageTransition>
  );
}
