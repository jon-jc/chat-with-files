import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Email = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Experience the Magic
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let the power of AI transform the way you manage your files. Sign
              up now to be the first to experience the magic.
            </p>
          </div>
          <div className="max-w-sm w-full space-y-4">
            <form className="flex flex-col gap-4">
              <Input placeholder="Enter your email" required type="email" />
              <Button type="submit">Sign Up</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Email;
