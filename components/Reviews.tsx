import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <p className="text-base text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              “FileMagic AI has transformed the way I manage my files. The voice
              search feature is incredibly convenient, and the AI-powered
              organization makes everything easy to find. Highly recommended!”
            </p>
            <div className="flex items-center space-x-2">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="text-sm">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-base text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              “As a busy professional, I dont have time to manually organize my
              files. FileMagic AI does it all for me. I simply drop my files,
              and the AI takes care of the rest. Its like having a personal
              assistant for my files!”
            </p>
            <div className="flex items-center space-x-2">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="text-sm">
                <h3 className="font-semibold">David Lee</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Financial Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
