/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0tOBFuDbFfn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CommandIcon, FileIcon, FileSearch } from "lucide-react";
import Upload from "./Upload";

export default function Component() {
  return (
    <>
      <div className="bg-gray-50 py-12 lg:py-16 mt-28">
        <div className="container px-4 md:px-6 mx-64">
          <div className="grid gap-6 lg:grid-cols-2 xl:gap-12">
            <div className="flex flex-col justify-center items space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/line-tight">
                  FileMagic AI
                </h1>
                <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Talk to your files with the power of AI. Experience the future
                  of file management with FileMagic AI.
                </p>
              </div>
              <Upload />
            </div>
            <img alt="Image" height="338" src="/pdfReader.png" width="600" />
          </div>
        </div>
      </div>
    </>
  );
}
