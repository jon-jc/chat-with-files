import React from "react";
import Link from "next/link";
import { FileIcon, SearchIcon, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
  auth,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Landing = () => {
  const { userId } = auth();

  return (
    <>
      <div className="bg-gray-50/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
        <div className="container flex flex-col gap-4 px-4 md:px-6 py-2">
          <nav className="flex items-center justify-between">
            <Link
              className="flex items-center space-x-2 text-xl font-bold"
              href="#"
            >
              <span className="sr-only">FileMagic AI</span>
              <FileIcon className="w-6 h-6 fill-current" />
              <span className="font-semibold">FileMagic AI</span>
            </Link>
            <div className="hidden items-center space-x-4 md:flex">
              <Link
                className="font-medium transition-colors hover:underline"
                href="/sign-in"
              >
                Features
              </Link>
              <Link
                className="font-medium transition-colors hover:underline"
                href="#"
              >
                Documentation
              </Link>
              <Link
                className="font-medium transition-colors hover:underline"
                href="#"
              >
                FAQ
              </Link>

              <Link
                className="font-medium transition-colors hover:underline"
                href="/sign-in"
              >
                Contact
              </Link>
            </div>
            {!userId && (
              <div className="flex items-center space-x-4">
                <Link
                  className="font-medium underline underline-offset-2"
                  href="/sign-in"
                >
                  Sign In
                </Link>
                <Link
                  className="inline-flex items-center h-8 rounded-md bg-gray-900 px-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                  href="/sign-up"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {userId && (
              <div className="flex items-center space-x-4">
                <Link
                  className="font-medium underline underline-offset-2"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="inline-flex items-center h-8 rounded-md bg-gray-900 px-3 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                  href="/chat"
                >
                  Chat
                </Link>
              </div>
            )}
            <UserButton />

            <div className="flex items-center space-x-2 md:hidden">
              <Button>
                <SearchIcon className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button>
                <ShoppingCart className="w-4 h-4" />
                <span className="sr-only">Cart</span>
                <span className="absolute inline-flex h-1.5 w-1.5 top-2 right-2 rounded-full bg-primary-500" />
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {!userId && (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Chat with your files
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transform PDFs, images, and text files into conversational
                magic. Collaborate with your team and automate your workflow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                <SignInButton afterSignInUrl="/dashboard" />
              </div>

              <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                <SignUpButton redirectUrl="/dashboard" />
              </div>
            </div>
          </div>
        </section>
      )}

      {userId && (
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                  Chat with your files
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Transform PDFs, images, and text files into conversational
                  magic. Collaborate with your team and automate your workflow.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>

                <Link href="/chat">
                  <Button>Chat</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Landing;
