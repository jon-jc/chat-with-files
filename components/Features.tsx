import { CommandIcon, FileIcon, FileSearch } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the future of file management with our innovative
              features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <FileSearch className="w-20 h-20" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Voice-based File Search</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Effortlessly find your files using natural language voice
                commands.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <FileIcon className="w-20 h-20" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">
                AI-powered File Organization
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Let our advanced AI automatically categorize and organize your
                files.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <CommandIcon className="w-20 h-20" />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">
                Natural Language File Commands
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use simple language to perform complex file operations with the
                power of AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
