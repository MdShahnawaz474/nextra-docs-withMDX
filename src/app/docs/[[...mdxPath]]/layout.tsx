import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};


const footer = <Footer>FirstBench Technology </Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<h1 className="text-2xl"> Nextra</h1>}
              projectLink="https://github.com/officialrajdeepsingh/nextra-4"
            />
          }
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
