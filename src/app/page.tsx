import { ArrowRightIcon, RocketIcon, FileTextIcon, CodeIcon, SearchIcon, PaletteIcon } from 'lucide-react';
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nextra 4 - The Next-Gen Documentation Platform",
  description: "Build beautiful, powerful documentation with Next.js and Markdown. Nextra v4 introduces enhanced performance and customization.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Nextra V4
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Check krke batana is this ok or not!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/docs/get-started" className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/mdx-editor" className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              MDX Editor
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <RocketIcon className="h-8 w-8" />,
              title: "Blazing Fast",
              description: "Built on Next.js 14 with automatic static optimization and incremental static regeneration."
            },
            {
              icon: <FileTextIcon className="h-8 w-8" />,
              title: "Markdown & MDX",
              description: "Write content in Markdown or MDX with built-in syntax highlighting and React components."
            },
            {
              icon: <SearchIcon className="h-8 w-8" />,
              title: "Built-in Search",
              description: "Instant, client-side search with flexible indexing and keyboard shortcuts."
            },
            {
              icon: <CodeIcon className="h-8 w-8" />,
              title: "TypeScript Ready",
              description: "First-class TypeScript support with generated type definitions and validation."
            },
            {
              icon: <PaletteIcon className="h-8 w-8" />,
              title: "Customizable",
              description: "Flexible theming system with CSS variables and layout customization options."
            },
            {
              icon: <RocketIcon className="h-8 w-8" />,
              title: "SEO Optimized",
              description: "Automatic meta tags, OpenGraph, and JSON-LD structured data generation."
            },
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-blue-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Start Building Today</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Create stunning documentation in minutes with zero configuration. 
            Perfect for open source projects, product docs, and knowledge bases.
          </p>
          <div className="flex justify-center gap-4">
            <code className="px-4 py-3 bg-gray-800 text-gray-100 rounded-lg font-mono text-sm">
              npx create-nextra@latest
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}