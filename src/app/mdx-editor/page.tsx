import React from 'react'
import { Metadata } from "next";
import MdxEditor from '@/components/MdxEditor';

export const metadata: Metadata = {
  title: "Nextra 4 - The Next-Gen Documentation Platform",
  description: "Build beautiful, powerful documentation with Next.js and Markdown. Nextra v4 introduces enhanced performance and customization.",
};
const page = () => {
  return (
   <MdxEditor/>
  )
}

export default page